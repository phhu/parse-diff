    var add, chunk, del, deleted_file, file, files, from_file, index, line, lines, ln_add, ln_del, new_file, noeol, normal, parse, restart, schema, start, to_file, _i, _len;
    deleted_file = function() {
      restart();
      return file.deleted = true;
    };
    schema = [[/^diff\s/, start], [/^new file mode \d+$/, new_file], [/^deleted file mode \d+$/, deleted_file], [/^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/, index], [/^---\s/, from_file], [/^\+\+\+\s/, to_file], [/^@@\s+\-(\d+),(\d+)\s+\+(\d+),(\d+)\s@@/, chunk], [/^-/, del], [/^\+/, add]];