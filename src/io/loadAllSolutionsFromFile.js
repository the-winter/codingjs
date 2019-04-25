let $ = require("jquery");

function loadAllSolutionsFromFile() {
  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      // localStorage.clear();
      let parsedFile = JSON.parse(reader.result);
      writeLocalStorage(parsedFile);
      location.reload();
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  $("#fileInput").click(); // activate the hidden file input
}

function writeLocalStorage(data) {
  Object.keys(data).forEach(function(key) { localStorage.setItem(key, data[key])});
}

module.exports = loadAllSolutionsFromFile;