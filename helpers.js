module.exports = {};

var repeatString = module.exports.repeatString = function (str, times) {
  var result = '';
  for (var i = 0; i < times; i++)
    result += str;
  return result;
};

var prefixLines = module.exports.prefixStrings = function (lines, prefix) {
  for (var i = 0; i < lines.length; i++) {
    lines[i] = prefix + lines[i];
  }
  return lines;
};
