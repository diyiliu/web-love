const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }else {
                link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.25}s`
            }
        });
    });
}

navSlide();