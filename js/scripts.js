gsap.from('h1', {x: 1000, duration: 1});

gsap.from('img', {x: -500, opacity: 0, duration: 3});

gsap.to('img', {x: 0, duration: 3});

gsap.from('#svg', {x: 1000, y: 500, scale: .5, duration: 1 })