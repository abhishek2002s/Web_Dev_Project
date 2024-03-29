var timeout;


const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: '-10',
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".subloading", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut,
      });
  }
  
  function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;
  
    var xprev=0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);

      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;
  
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#mini-circle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
      }, 100);
    });
}
var crsr = document.querySelector("#mini-circle")
  
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    })
    
  
    circleChaptaKaro();
    firstPageAnim();
    circleMouseFollower();


// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye
document.querySelectorAll(".elem").forEach(function (elem) {
  window.addEventListener("mousemove",function(dets){
    gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease : Power1,
    });
  });
  });