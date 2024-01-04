const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemc = document.querySelector("#elem-container")
var fix = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
fix.style.display="block"
})
elemc.addEventListener("mouseleave",function(){
fix.style.display="none"
})