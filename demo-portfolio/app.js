const init = () => {
    const portfolio = document.querySelector('.portfolio');
    const dots = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');

    const hamburgerLines = document.querySelectorAll(".hamburger line")
    const nav = document.querySelector('.navbar');
    const menu = document.querySelector('.hamburger');
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');

        let color = 'white';
        if (nav.classList.contains('open')){
            color = 'black';
        }

        hamburgerLines.forEach(i => {
            i.setAttribute('stroke', color);
        });
    });

    const backgrounds = ['radial-gradient(#2B3760, #0B1023)',
        'radial-gradient(#4E3022, #161616)',
        'radial-gradient(#4E4322, #161616)'];

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            portfolio.style.background = backgrounds[index];
            changeDot(dot);
            changePage(pages[index]);
        });
    });

    const changePage = page => {
        pages.forEach(i => {
            i.classList.remove('active');
        });
        page.classList.add('active');
    }

    const changeDot = dot => {
        dots.forEach(i => {
           i.classList.remove('active');
        });
        dot.classList.add('active');
    }
}

init();