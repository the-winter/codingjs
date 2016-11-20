
var title = deParam(window.location.search).title
var allTitles = _.uniq(exercises.map(e=>e.title))
var titles = title? [title] : allTitles

$(document).ready(() => {

  for (title of titles){
    var div = $('<div class="problems"></div>').appendTo('.exerciseIndex  ')
    div.append(`<h3 class="probTitle" id="${title}">${title}</h3>`)

    var x = exercises.filter((ex) => ex.title == title);

    x.forEach((ex) => {
      div.append(`<span class="exercise-link"><a href='exercise?name=${ex.name}&title=${ex.title}'>${ex.name}</a>&nbsp;</span>`)
    });
  }


})

// for (var i = 0; i < exercises.length; i++)
//   if ($(`.${exercises[i].title} p:first-child`).text() == exercises[i].title){
//     $(`.${exercises[i].title}`).append(`<p>${exercises[i].name}</p>`);
//   }
