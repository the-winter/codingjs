
// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(exercise => exercise.name == exerciseName)[0];

// console.log(urlParams, exerciseName);



$(document).ready(() => {
  // $('#problemsLink').prop('href', `problems?title=${exercise.title}`)
  $('#title').text(exercise.title);
  $('#name').text(exercise.name);
  $('#problem').text(exercise.question);
  $('#answer').text('function '+exercise.name+'('+defaultInput(exercise.name)+'){\n\n}');

  //load previous solution from localStorage
  let exerciseCode = exerciseName + "-code";
  if(localStorage.getItem(exerciseCode)) {
    editor.setValue(localStorage.getItem(exerciseCode));
  }

  for (var i = 0; i <= 2; i++) {
    var input = inputParser(exercise.inputs[i]);
		window[exerciseName] = solutions[exerciseName];
    var result = window[exerciseName](...input);
    // TODO make this a class instead of an element
    $('.examples').append(`${exerciseName}${exercise.inputs[i]} → ${result}<br>`);
		window[exerciseName] = undefined;
  }

  $('#solve').on('click', () => {
    $('tr').remove();
    const answer = editor.getValue();

    // whenever the user checks their solution, save the most recent version of their code to localStorage
    localStorage.setItem(exerciseCode, answer);

    // console.log(answer);
    eval(`var ans=${answer}`);

    const inputs = exercise.inputs;
    // console.log('inpute: ', inputs);

    let results = []
    inputs.forEach((inputStr) => {
      const input = inputParser(inputStr);
      const result = ans(...input);
      // console.log(input);
			  window[exerciseName] = solutions[exerciseName];
      const idealResult = solutions[exerciseName](...input);
			  window[exerciseName] = undefined;
      $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result));
      // console.log('result: ', result);

      var isCorrect = _.isEqual(result,idealResult)
      results.push(isCorrect)
    });

    if (Math.min(...results) == 1){
      $('.congrats').text("100% Passing. Well Done!");
			localStorage[exerciseName] = "true";
    }
  });

  $('#next').on('click', () => {
    var indx = _.findIndex(exercises, {name: exerciseName})+1;
    var x = exercises[indx];
    window.location.search = `?name=${x.name}&title=${x.title}`
  })

  $('#previous').on('click', () => {
    var indx = _.findIndex(exercises, {name: exerciseName})-1;
    var x = exercises[indx];
    window.location.search = `?name=${x.name}&title=${x.title}`
  })


  // $('#show').on('click', () => {
  //   var s = solutions[exerciseName].toString();
  //   var r = new RegExp(/function/);
  //   var n = s.replace(r, `function ${exercise.name}`)
  //   $('#mySolution').text(n)
  // })
});
