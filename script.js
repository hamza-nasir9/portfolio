

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  lerp: 0.1

});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});







let tl = gsap.timeline();

function load() {

  tl.to(".hide-text", {
    y: 300,
    duration: 1,
    ease: "bounce",
  });

  tl.to(".black", {
    y: -1000,
    duration: 1,
    ease: "power2.out",
    opacity: 1,
  });
}
load();

tl.from(".navtop", {
  y: -50,
  opacity: 0,
});
tl.from(".one", {
  y: -100,
  opacity: 0,
  ease: "bounce"
});
tl.from(".two", {
  y: -100,
  opacity: 0,
  ease: "bounce"
});
tl.from(".three", {
  y: -100,
  opacity: 0,
  ease: "bounce"
});


let cursor = document.querySelector(".follower");
document.addEventListener("mousemove", function (det) {
  gsap.to(cursor, {
    duration: 0.8,
    scale: 1,
    opacity: 1,
    left: det.x,
    top: det.y
  });
});

let cursar = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  gsap.to(cursar, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    left: dets.x + 8,
    top: dets.y + 8
  })
})



let heading = document.querySelectorAll("h1");
heading.forEach(item => {
  item.addEventListener("mouseenter", function () {

    cursor.style.display = "none"
    cursar.style.background = "red"
    item.addEventListener("mousemove", function (dets) {
      console.log("hello")
      gsap.to(item, {
        border : "1px solid white",
      })
    })
  })
  item.addEventListener("mouseleave", function () {

    cursar.style.background = "white"
    gsap.from(cursor,{
      scale:1,
    })
    cursor.style.display = "block"
      console.log("nikl")
      gsap.to(item, {
        border : "none",
        

      })
  })
})



gsap.from(".about", {

  y: 100,
  duration: .5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    scroller: "main",
    start: "top 50%",
    end: "top 55%",
    scrub: 2,
    // markers:true
  }

});

gsap.from(".know", {
  x: "-50%",
  duration: "1",
  opacity: 0,
  scrollTrigger: {
    trigger: ".know",
    scroller: "main",
    scrub: 1,
    start: "top 120%",
    end: "bottom 95%",
  }
});
gsap.from(".about-contact", {
  x: "50%",
  duration: "1",
  opacity: 0,
  scrollTrigger: {
    trigger: ".know",
    scroller: "main",
    scrub: 1,
    start: "top 120%",
    end: "bottom 95%",
  }
});
gsap.from(".expertiesimg", {
  y: -200,
  opacity: 0,
  duration: .5,
  scrollTrigger: {
    trigger: ".expertiesimg",
    scroller: "main",
    start: "top 30%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
    ease: "none"
  }
});


gsap.from(".expert-one", {
  y: -150,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".expert-one",
    scroller: "main",
    scrub: 1,
    start: "top 45%",
    end: "top 35%",
    // markers:true
  }
});
gsap.from(".expert-two", {
  y: -150,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".expert-two",
    scroller: "main",
    scrub: 1,
    start: "top 40%",
    end: "top 30%",
    // markers:true

  }
});
gsap.from(".expert-three", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".expert-three",
    scroller: "main",
    scrub: 1,
    start: "top 50%",
    end: "bottom 45%",
    // markers:true
  }
});
gsap.from(".service-card-1", {
  y: 100,
  duration: .5,
  opacity: 0,
  // ease: "bounce",
  scrollTrigger: {
    trigger: ".service-card-1",
    scroller: "main",
    scrub: 1,
    start: "top 40%",
    end: "top 55%",
    // markers:true
  }
});
gsap.from(".service-card-2", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".service-card-2",
    scroller: "main",
    scrub: 1,
    start: "top 50%",
    end: "top 35%",
  }
});
gsap.from(".service-card-3", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".service-card-3",
    scroller: "main",
    scrub: 1,
    start: "top 50%",
    end: "top 35%",
  }
});
gsap.from(".service-card-4", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".service-card-4",
    scroller: "main",
    scrub: 1,
    start: "top 50%",
    end: "top 35%",
  }
});
gsap.from(".list-img", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".list-img",
    scroller: "main",
    scrub: 1,
    start: "top 50%",
    end: "top 35%",
  }
});


gsap.from(".list-heading-1", {
  y: -150,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".list-heading-1",
    scroller: "main",
    scrub: 1,
    start: "top 45%",
    end: "bottom 50%",
  }
});
gsap.from(".list-heading-2", {
  y: -150,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".list-heading-2",
    scroller: "main",
    scrub: 1,
    start: "top 30%",
    end: "bottom 40%",

  }
});
gsap.from(".list-heading-3", {
  y: -100,
  duration: .5,
  opacity: 0,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".list-heading-3",
    scroller: "main",
    scrub: 1,
    start: "top 15%",
    end: "bottom 30%",

  }
});


