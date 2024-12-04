let tl = gsap.timeline();

tl.from("#nav h2", {
    opacity: 0,
    duration: 0.7,
    y: -20,
    delay: 0.5  
});
tl.from("#nav #links h4", {
    opacity: 0,
    y: -20,
    stagger: 0.3
});