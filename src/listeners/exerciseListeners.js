let $ = require("jquery");
let _ = require("lodash");
let magnificPopup = require("magnific-popup");
let exercises = require("../exercisesToShowOnIndex");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

module.exports = function(editor, exerciseName) {
    // js syntax help
    $('.ajax-popup-link').magnificPopup({
        type: 'ajax'
    });

    $('#next').on('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) + 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    $('#previous').on('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) - 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    $('#save').on('click', () => {
        saveCodeFile(editor, exerciseName);
    })

    $('#open').on('click', () => {
        loadCodeFile(editor);
    })


    // $('#show').on('click', () => {
    //   let s = solutions[exerciseName].toString();
    //   let r = new RegExp(/function/);
    //   let n = s.replace(r, `function ${exercise.name}`)
    //   $('#mySolution').text(n)
    // })
};