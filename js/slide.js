let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides__item');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(100%)';
    }
  });
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

showSlides();
