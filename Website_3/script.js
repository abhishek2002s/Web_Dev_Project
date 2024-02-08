const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page5Animation(){
    var elemc = document.querySelector("#elem-container")
var fix = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
fix.style.display="block"
})
elemc.addEventListener("mouseleave",function(){
fix.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var iamge = e.getAttribute("data-image")
        fix.style.backgroundImage = `url(${iamge})`
    })

})
}




  function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
  }

  swiperAnimation()
  page5Animation()