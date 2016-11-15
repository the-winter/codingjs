
// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(exercise => exercise.name == exerciseName)[0];

console.log(urlParams, exerciseName);

/** takes url parameter and transforms into object **/
function deParam(urlStr) {
  const subbie = urlStr.substring(1);
  const x = subbie.split('&').map(s => s.split('='));
  return x.reduce((accum, arr) => { accum[arr[0]] = arr[1]; return accum; }, {});
}

/** Return row for html table **/
function formatResults(funcName, inputStr, idealOutput, output) {
  const ok = _.isEqual(output, idealOutput);
  return `<tr>
         <td>${funcName}${inputStr} → ${idealOutput}</td>
         <td>${output}</td>
         <td>${ok ? '✔' : '✖'}</td>
         <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>
     </tr>`;
}


 /**
  * it converts nodingbat input (as stored) to js
  *     e.g. inputParser('(1,2)')=>[1,2]
  **/
function inputParser(inputStr) {
  // return eval(`[${inputStr.slice(1, -1)}]`) // another way of doing it
  const x = inputStr.slice(1, -1);
  var y = '['+x+']';
   eval("var z ="+y);
   return z
}

/** creates default input to start function **/
function defaultInput(inputStr) {
  z = inputParser(inputStr)
  var inps = z.map((item, i) => 'input'+(i+1));
  return inps;
}


$(document).ready(() => {
	  $('#title').text(exercise.title);
  $('#name').text(exercise.name);
  $('#problem').text(exercise.question);
  $('#answer').text('function '+exercise.name+'('+defaultInput(exercise.inputs[0])+'){\n\n}');

  for (var i = 0; i <= 2; i++) {
    var input = inputParser(exercise.inputs[i]);
    var result = solutions[exerciseName](...input);
    // TODO make this a class instead of an element
    $('.examples').append(`${exerciseName}${exercise.inputs[i]} → ${result}<br>`);
  }

  $('#solve').on('click', () => {
    $('tr').remove();
    const answer = $('#answer').val();

    console.log(answer);
    eval(`var ans=${answer}`);

    const inputs = exercise.inputs;
    console.log('inpute: ', inputs);

    let results = []
    inputs.forEach((inputStr) => {
      const input = inputParser(inputStr);
      const result = ans(...input);
      console.log(input);
      const idealResult = solutions[exerciseName](...input);
      $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result));
      console.log('result: ', result);

      var isCorrect = _.isEqual(result,idealResult)
      results.push(isCorrect)
    });

    if (Math.min(...results) == 1){
      $('.congrats').text("100% Passing. Well Done!")
    }

  });

  $('#next').on('click', () => {
    var indx = _.findIndex(exercises, {name: exerciseName})+1;
    var x = exercises[indx];
    window.location.search = `?name=${x.name}&title=${x.title}`
  })

  $('#show').on('click', () => {
    $('#mySolution').text(solutions[exerciseName].toString())
  })
});
