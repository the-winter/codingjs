let $ = require("jquery");
let saveAllSolutionsToFile = require("../io/saveAllSolutionsToFile.js");
let loadAllSolutionsFromFile = require("../io/loadAllSolutionsFromFile.js");


$('#saveAll').on('click', () => {
    saveAllSolutionsToFile();
})
  
$('#loadAll').on('click', () => {
    loadAllSolutionsFromFile();
})