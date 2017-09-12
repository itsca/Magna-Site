global.headroom = require('headroom.js');
var headroomObject = new headroom(document.getElementById("main-header"), {
  "offset": 100,
  "tolerance": 5,
  "classes": {
    "initial": "header--fixed",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroomObject.init();
/*End Headroom acativation*/