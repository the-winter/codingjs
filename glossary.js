
let title = deParam(window.location.search).title
let allTitles = _.uniq(exercises.map(e=>e.title))
let titles = title? [title] : allTitles

$(document).ready(() => {

  for (title of titles){
    let outerDiv = document.getElementById('exerciseIndex');
    outerDiv.innerHTML += `<h3 class="probTitle" id="${title}">${title}</h3>`;
    // var outerDiv = document.getElementById("exerciseIndex");
    // var content = document.createTextNode(`<h3 class="probTitle" id="${title}">${title}</h3>`);
    // outerDiv.appendChild(content);

    let div = $('<div class="problems"></div>').appendTo('#exerciseIndex');
    let x = exercises.filter((ex) => ex.title == title);

    x.forEach((ex) => {
      div.append(`<span class="exercise-link" id="${ex.name}"><a href='exercise?name=${ex.name}&title=${ex.title}'>${ex.name}</a>&nbsp;</span><br />`)
     if (localStorage[ex.name] == "true"){
        $(`#${ex.name}`).append('<span class="tick"><b>✓</b></span>');
      }
    });
  }

  $('#saveAll').on('click', () => {
    saveAllSolutionsToFile();
  })

  $('#loadAll').on('click', () => {
    loadAllSolutionsFromFile();
  })


})

// for (let i = 0; i < exercises.length; i++)
//   if ($(`.${exercises[i].title} p:first-child`).text() == exercises[i].title){
//     $(`.${exercises[i].title}`).append(`<p>${exercises[i].name}</p>`);
//   }
