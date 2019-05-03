let FileSaver = require('file-saver');

function saveAllSolutionsToFile() {
  let allSolutions = getLocalStorage();
  let blob = new Blob([allSolutions], {
    type: "text/javascript;charset=utf-8"
  });
  FileSaver.saveAs(blob, "combinedSolutions.js", true);
}

function getLocalStorage() {
  return JSON.stringify(localStorage);
}

module.exports = saveAllSolutionsToFile;