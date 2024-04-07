let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
slides[activeSlide].classList.remove('active');
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
}, 2000);
