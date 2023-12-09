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