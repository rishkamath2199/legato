const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".navigation", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".first-jumbotron", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".login-popup", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".login-close", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".first-jumbotron", { opacity: 0 }, { opacity: 1, duration: 1 });

