function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselRight = document.querySelector('.carousel__arrow_right');
  const carouselLeft = document.querySelector('.carousel__arrow_left');
  const slidesCount = 4;
  let currentSlide = 0;
  const slideWidth = carouselInner.offsetWidth;
  carouselLeft.style.display = 'none';
  
  carouselRight.addEventListener('click', () => {
    if (currentSlide < slidesCount - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  carouselLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    if (currentSlide === 0) {
      carouselLeft.style.display = 'none';
    } else {
      carouselLeft.style.display = '';
    }

    if (currentSlide === slidesCount - 1) {
      carouselRight.style.display = 'none';
    } else {
      carouselRight.style.display = '';
    }
  }
}

initCarousel();
