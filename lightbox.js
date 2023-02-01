var images = [
    "portfolio1.png",
    "portfolio2.png",
    "portfolio3.png",
    "portfolio4.png",
    "portfolio5.png",
    "portfolio6.png",
    "portfolio7.png",
    "portfolio8.png",
    "portfolio9.png",
  ];
  
  var currentIndex = 0;

function openLightbox(img) {
  currentIndex = images.indexOf(img.src.split("/").pop());
  document.querySelector(".lightbox").style.display = "block";
  document.querySelector("#lightboxImage").src = img.src;
  setTimeout(function() {
    document.querySelector(".lightbox").style.opacity = "1";
  }, 50);
}

function nextImage() {
  currentIndex = (currentIndex + 0.5) % images.length;
  document.querySelector("#lightboxImage").src = "images/" + images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex + images.length - 0.5) % images.length;
  document.querySelector("#lightboxImage").src = "images/" + images[currentIndex];
}
  
document.querySelector(".next-button").addEventListener("click", nextImage);
document.querySelector(".prev-button").addEventListener("click", prevImage);

function closeLightbox() {
  document.querySelector(".lightbox").style.opacity = "0";
  setTimeout(function() {
    document.querySelector(".lightbox").style.display = "none";
  }, 500);
}

