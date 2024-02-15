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


  function menuAnimation() {
    var menu = document.querySelector("#nav h3");
    var fullScr = document.querySelector("#full-scr");
    var navImg = document.querySelector("#nav img");
    var flag = 0
    menu.addEventListener("click", function(){
      if(flag == 0){
     fullScr.style.top = 0;
     navImg.style.opacity = 0
     flag = 1;
      }
      else{
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
      }
    })
  }
  function loadAnimation(){
  var load = document.querySelector('#loader')
  setTimeout(function (){
   load.style.top = "-100%"
  },4000)
  }

  swiperAnimation();
  page5Animation();
menuAnimation();
loadAnimation();
