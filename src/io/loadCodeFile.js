let $ = require("jquery");

module.exports = function loadCodeFile(editor) {
  // remove_fileInput_listener();
  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      editor.setValue(reader.result);
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  $("#fileInput").click(); // activate the hidden file input
}