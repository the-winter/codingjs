let $ = require("jquery");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

module.exports = function (editor, exerciseName) {
  //allow user to save/open code with keyboard shortcuts
  document.addEventListener("keydown", function(e) {
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        saveCodeFile(editor, exerciseName);
      }
      if (e.keyCode == 79 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        loadCodeFile(editor);
      }
      if (e.key == "Enter" && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        $("#solve").click(); //run code on ctrl-enter
      }
      // if (e.keyCode == 74 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      //   e.preventDefault();
      //   $("#jsref-link").click(); //help screen on ctrl-j
      // }
      // if (e.keyCode == 191 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      //   e.preventDefault();
      //   editor.toggleComment();
      // }
    });
  };