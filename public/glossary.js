$(document).ready(() => {
  for (var i = 0; i < exercises.length; i++)
    if ($(`.${exercises[i].title} p:first-child`).text() == exercises[i].title){
      $(`.${exercises[i].title}`).append(`<p>${exercises[i].name}</p>`);
    }
})
