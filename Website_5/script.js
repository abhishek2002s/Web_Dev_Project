// const { default: Shery } = require("sheryjs");

Shery.mouseFollower();

Shery.makeMagnet(".magnet,img");

Shery.hoverWithMediaCircle(".h",{
    videos: ["./images/0.mp4","./images/2.mp4","./images/3.mp4"],
});


gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: ".fimage",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  
  const sections = document.querySelectorAll(".fleftelem");
  Shery.imageEffect(".image", {
      style: 1,
      slideStyle: (setScroll) => {
          sections.forEach(function (section, index) {
              ScrollTrigger.create({
                  trigger: section,
                  start: "top top",
                  scrub: 1,
                  onUpdate: function (prog) {
                      setScroll(prog.progress + index);
                  },
              });
          });
      },
  });

// Shery.imageEffect(".images img",{
//     style:4,
//     config:
// })