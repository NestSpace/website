const foreground = document.getElementById('foreground');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    foreground.style.transform = `translateY(-${scrollY * 0.2}px)`;
});
