function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

const swiper = new Swiper('.sample-slider', {
  loop: true,                       
  slidesPerView: 2,                  
  centeredSlides : true,             
  spaceBetween: 20,                
  autoplay: {                        
      delay: 2000,  
  },   
  pagination: {                       
      el: '.swiper-pagination',
  },
  navigation: {                      
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})


var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$('#overlay').on('show.bs.modal', function () {
  $(this).addClass('show');
});

$('#overlay').on('hidden.bs.modal', function () {
  $(this).removeClass('show');
});



document.addEventListener('DOMContentLoaded', function() {
  
  var button = document.getElementById('btn-scroll');
  var targetElement = document.getElementById('image-gallery');

  
  button.addEventListener('click', function() {
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});




