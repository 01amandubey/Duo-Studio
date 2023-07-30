function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
 
locoScroll.on("scroll", ScrollTrigger.update);

 
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },  
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
  
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
init()

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+20+"px"
    cursor.style.top = dets.y+"px"
})


var wr = document.querySelector("#nav #wr")
var wo = document.querySelector("#purple .work")
wr.addEventListener("mouseenter",function(){
   wo.style.display="block" 
})
wr.addEventListener("mouseleave",function(){
    wo.style.display="none" 
 })

 var st = document.querySelector("#nav #st")
 var stu = document.querySelector("#purple .studio")
 st.addEventListener("mouseenter",function(){
    stu.style.display="block" 
 })
 st.addEventListener("mouseleave",function(){
     stu.style.display="none" 
  }) 

  var cn = document.querySelector("#nav #cn")
var con = document.querySelector("#purple .contact")
cn.addEventListener("mouseenter",function(){
   con.style.display="block" 
})
cn.addEventListener("mouseleave",function(){
    con.style.display="none" 
 })


var video = document.querySelector("#page1 video");
video.addEventListener("mouseenter",function(){
    cursor.style.width = "100px"
   cursor.style.height = "20px"
    cursor.style.borderRadius = "10px"
    cursor.innerHTML = "<p><center>SOUND ON</center></p>"
    cursor.style.padding = "1px"
})
video.addEventListener("mouseleave",function(){
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.borderRadius = "50%"
    cursor.innerHTML=""
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 32%",
        end:"top 0",
        scrub:3 
    }
})

tl.to("#page1 h1",{
    x:-100, 
},"anim")

tl.to("#page1 h2",{
    x:100,
},"anim")
tl.to("#page1 video",{
    width:"90%",
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -70%",
        end:"top -80%",
        scrub:3 
    }
})
tl2.to("#main",{
    backgroundColor:"#fff"
})



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -550%",
        end:"top -570%",
        scrub:3 
    }
})
tl3.to("#main",{
    backgroundColor: "#0F0D0D"
})


var container = document.querySelectorAll("#p5container")
container.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "300px"
        cursor.style.height="250px"
        cursor.style.borderRadius ="0"
        cursor.style.backgroundImage = `url(${att})`

    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height="20px"
        cursor.style.borderRadius ="50%"
        cursor.style.backgroundImage = `none`

    })
})


var purple = document.querySelector("#purple")
var h4 = document.querySelectorAll("#nav h4")
var nav = document.querySelector("#nav")
h4.forEach(function(elem){
    nav.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    nav.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})