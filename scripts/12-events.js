document.addEventListener("DOMContentLoaded",function() {
  /* add click listener to button */
  let themeButton = document.querySelector("#toggle-theme");
  themeButton.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("night");
  });
});