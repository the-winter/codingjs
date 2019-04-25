let $ = require("jquery");

if (location.pathname === "/") {
  // main page
  require("./indexPage.js");
}

else if (location.pathname === "/exercise.html") {
  // individual problem/exercise page
  require("./exercisePage.js");
}

// this lets you not display anything until the entire page is ready (since we set html
//  to invisible in style.css)
// useful, since otherwise you see the transition from textarea to codemirror, etc...
$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});