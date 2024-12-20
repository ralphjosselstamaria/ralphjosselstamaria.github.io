ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.title, .resume-list, .contact-me, .about-me', { origin: 'top' });
ScrollReveal().reveal('.table', { origin: 'left' });
ScrollReveal().reveal('.table2, .contact-img', { origin: 'right' });
ScrollReveal().reveal('.about-me p', { origin: 'bottom' });

