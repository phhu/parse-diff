  var defaultToWhiteSpace, escapeRegExp, ltrim, makeString, parseFile, trimLeft;
    var add, chunk, current, del, deleted_file, file, files, from_file, i, index, len, line, lines, ln_add, ln_del, new_file, noeol, normal, parse, restart, schema, start, to_file;
    current = null;
        chunks: [],
      if (!file || file.chunks.length) {
      var newLines, newStart, oldLines, oldStart;
      ln_del = oldStart = +match[1];
      oldLines = +(match[2] || 0);
      ln_add = newStart = +match[3];
      newLines = +(match[4] || 0);
      current = {
        content: line,
        changes: [],
        oldStart: oldStart,
        oldLines: oldLines,
        newStart: newStart,
        newLines: newLines
      };
      return file.chunks.push(current);
      current.changes.push({
      current.changes.push({
      return current.changes.push({
    s = ltrim(s, '-');
    s = ltrim(s, '+');
    t = /\t.*|\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d(.\d+)?\s(\+|-)\d\d\d\d/.exec(s);
  ltrim = function(s, chars) {
    s = makeString(s);
    if (!chars && trimLeft) {
      return trimLeft.call(s);
    }
    chars = defaultToWhiteSpace(chars);
    return s.replace(new RegExp('^' + chars + '+'), '');
  };

  makeString = function(s) {
    if (s === null) {
      return '';
    } else {
      return s + '';
    }
  };

  trimLeft = String.prototype.trimLeft;

  defaultToWhiteSpace = function(chars) {
    if (chars === null) {
      return '\\s';
    }
    if (chars.source) {
      return chars.source;
    }
    return '[' + escapeRegExp(chars) + ']';
  };

  escapeRegExp = function(s) {
    return makeString(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  };
