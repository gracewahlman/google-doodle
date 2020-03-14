gsap.from('h1', {x: 2000, duration: .75, delay: 2.5});

gsap.from('img', {x: -500, opacity: 0, duration: 3.5});

gsap.to('img', {x: 0, duration: 3.5});

gsap.from('#svg', {x: 1000, y: 500, scale: .5, duration: 1 })