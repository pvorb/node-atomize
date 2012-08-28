var iso8601 = require('iso8601');
var helpers = require('./helpers.js');
var repeatString = helpers.repeatString;
var prefixLines = helpers.prefixLines;

var module.exports = {};

var AtomFeed = module.exports.AtomFeed = function (id, title, updated, authors,
    categories, contributors, generator, icon, links, logo, rights, subtitle) {

  // required fields
  this.id = id;
  this.title = title;
  this.updated = updated;

  // recommended fields
  this.authors = authors;
  this.links = links;

  // optional fields
  this.categories = categories;
  this.contributors = contributors;
  this.generator = generator;
  this.icon = icon;
  this.logo = logo;
  this.rights = rights;
  this.subtitle = subtitle;
};

var xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
var xmlns = 'xmlns="http://www.w3.org/2005/Atom"';

AtomFeed.prototype.toString() = function (root, space) {
  if (typeof root == 'undefined' || root === null)
    root = 'feed';
  if (typeof space == 'undefined' || space === null)
    space = '  ';

  var xml = xmlHeader + '\n' +
}

var Entry = module.exports.Entry = function () {};

var Category = module.exports.Category = function (term, scheme, label) {

  // required field
  this.term = term;

  // optional fields
  this.scheme = scheme;
  this.label = label;
};

Category.prototype.toString = function (space, level) {
  if (typeof space == 'undefined' || space == null)
    space = '  ';
  if (!level)
    level = 0;

  var xml = repeatString(space, level)+'<category term="'+this.term+'"';
  if (this.scheme)
    xml += ' scheme="'+this.scheme+'"';
  if (this.label)
    xml += ' label="'+this.label+'"';
};

var Person = module.exports.Person = function (name, uri, email) {

  // required field
  this.name = name;

  // optional fields
  this.uri = uri;
  this.email = email;
};

Person.prototype.toString = function (root, space, level) {
  if (typeof root == 'undefined' || root == null)
    root = 'author';
  if (typeof space == 'undefined' || space == null)
    space = '  ';
  if (!level)
    level = 0;

  var xml = [ '<'+root+'>', '<name>'+this.name+'</name>' ];
  if (this.uri)
    xml.push(space+'<uri>'+this.uri+'</uri>');
  if (this.email)
    xml.push(space+'<email>'+this.uri+'</email>');
  xml.push('</'+root+'>');

  // indent lines and join
  return prefixLines(xml, repeatString(space, level)).join('\n');
};
