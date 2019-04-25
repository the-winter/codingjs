let FileSaver = require('file-saver');

module.exports = function saveCodeFile(editor, exerciseName) {
  // event.preventDefault(); // is this needed?
  let blob = new Blob([editor.getValue()], {
    type: "text/javascript;charset=utf-8"
  });
  FileSaver.saveAs(blob, exerciseName + ".js", true);
}
