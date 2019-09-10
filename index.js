var btn = document.querySelector(".nav-responsive__logo");
var nav = document.querySelector(".mainnav");
var content = document.querySelector(".wrapcontent");
var content2 = document.querySelector(".wrapcontent2");
var downarrow = document.querySelector(".downarrow");
var layer = document.querySelector(".layer");
var overflow = document.querySelector(".bodyOverflow");
function handleClick() {
  nav.classList.toggle("mainnav--active");
  btn.classList.toggle("nav-responsive__logo--active");
  content.classList.toggle("wrapcontent--active");
  content2.classList.toggle("wrapcontent2--active");
  downarrow.classList.toggle("downarrow--active");
  layer.classList.toggle("layer--active");
  overflow.classList.toggle("bodyOverflow--active");
}

btn.addEventListener("click", handleClick);
