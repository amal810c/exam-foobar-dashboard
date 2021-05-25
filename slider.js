/* let slideIndex = 0;

carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}
 */

/* simpleslider.getSlider(); */

simpleslider.getSlider({
  container: document.getElementById("myslider"),
});
/* 
document.querySelector("#myslider").style.width = "400px";
document.querySelector("#myslider").style.height = "400px"; */
