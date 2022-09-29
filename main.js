const images = document.querySelector(".image");

images.addEventListener("mouseenter", function () {
  $(".image").hide();
});
images.addEventListener("mouseleave", function () {
  $(".image").show();
});
