
//scroll bar
var bar = document.getElementById("bar");

window.onscroll = function() {
  scrollIndicator()
};

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = 100;
  
  if (height > 0) {
    scrolled = (winScroll / height) * 100;
  }

  bar.style.height = scrolled + "%";
}