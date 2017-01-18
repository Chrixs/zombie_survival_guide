function displayMore() {

  var e = document.getElementById("read_more");
  e.id = "read_more_after";
  var g = document.getElementById('buttonReadMore');
  g.style.visibility = 'hidden';
}

function displayLess() {
  var f = document.getElementById("read_more_after");
  f.id = "read_more";
  var h = document.getElementById("buttonReadMore");
  h.style.visibility = 'visible'
}
