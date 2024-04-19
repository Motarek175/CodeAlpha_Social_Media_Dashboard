var body = document.querySelector("body");
var box = document.querySelector(".header .theme .box");

box.addEventListener("click", function () {
  body.classList.toggle("dark");
});
