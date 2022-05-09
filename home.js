const swiper = new Swiper('.swiper', {
  autoplay: {
    display: 1000,
    disableOnIteraction: false,
  },

  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

// chnges by Khlaid Shah Start
var basketDiv = document.querySelector("#box2")
basketDiv.addEventListener("click",goToBasketFunction)
function goToBasketFunction(){
  window.location.href = "./Cart/cart.html"
}
// chnges by Khlaid Shah End