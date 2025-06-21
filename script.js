gsap.to(".boxses",{
    transform:"translateX(-80%)",
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top -30%",
        end:"top -150%",
        scrub:1,
        markers:true
    }
})
gsap.from("#third",{
    y:40,
    opacity:0,
    stagger:1,
    delay:4,
    scrollTrigger:{
       trigger:"#third",
       scroller:"body",
       scrub:true,
       start:"top 130%",
       end:"top -20%",
       scrub:true
    }
})