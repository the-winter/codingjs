

describe('main', () => {
  describe('inputParser', () => {
    it('should give the right output', () => {
      const result = inputParser("([2,7,-2,10,2],'cat')");
      const ideal = [[2, 7, -2, 10, 2], 'cat'];
      expect(result).to.deep.equal(ideal);
    });
  });

  describe('formatResults', function () {
    it('should run for given inputs', function () {
      const result = formatResults("scoresIncreasing", '([1, 3, 4])', true, true);
      const idealResult = `
       <tr>
         <td>scoresIncreasing([1, 3, 4]) → true</td>
         <td>true</td>
         <td>✔</td>
         <td class="status-box" style="background-color:green"></td>
     </tr>`
     expect($(result).text()).to.equal($(idealResult).text());
    });
  })

  describe('deParam', function () {
    it('should run for a given input', function () {
      const result = deParam("?excerciseName=diff21&module=recursion");
      const idealResult = {excerciseName: "diff21", module: "recursion"}
      expect(result).to.deep.equal(idealResult);
    });
  })

});

describe('solutions', function () {
  exercises.forEach(function(exercise){
    let solution = solutions[exercise.name];

      describe(exercise.name, function(){
        exercise.inputs.forEach(function(inputStr){
          it(`should run for ${exercise.name}${inputStr}`, function () {
            let js_inputs = inputParser(inputStr)
            window[exercise.name] = solution;
            let idealResult = solution.apply(undefined, js_inputs)
            expect(idealResult).to.exist // check the result isn't undefined
          });
        })
      })
  })
})
