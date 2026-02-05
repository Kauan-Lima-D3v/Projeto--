document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const header = document.getElementById('header-main');

    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            let windowHeight = window.innerHeight;
            let elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    // Remove o loader após carregar
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) loader.classList.add('finished');
            document.body.classList.remove('loading');
            reveal();
        }, 1500);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        reveal();
    });
});