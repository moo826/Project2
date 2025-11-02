


(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();


document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 12,
      slidesPerView: 3,         
      breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 5 }
      },
      autoplay: { delay: 2300, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }
});
