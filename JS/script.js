/*MENU BURGER*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*EFFET SCROLL ACTIF NAVBAR*/

let sections = document.querySelectorAll('section'); /*effectue une requête dans le document HTML pour sélectionner tous les éléments <section> présents dans le document, puis stocke ces éléments dans une variable appelée "sections".*/
let navLinks = document.querySelectorAll('header nav a'); /*effetcute une requête dans le doc HTML pour séléctionner*/ 

window.onscroll = () => {  /*événement JavaScript qui se déclenche lorsque l'utilisateur fait défiler la page. Lorsque cet événement se produit, la fonction fléchée (arrow function) définie après le signe => est exécutée.*/ 
    sections.forEach(sec => { /*Cela itère sur tous les éléments <section> stockés dans la variable sections. Pour chaque section, les instructions à l'intérieur de la fonction fléchée sont exécutées.*/ 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*Supprimer menu burger lorsque on clique sur un lien dedans*/
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*SCROLL REVEAL*/

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.bodys, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*TYPED JS*/

const typed = new Typed('.multiple-text', {
    strings: ['Portofolio.'], /*je rajoute dans le tableau les elts que je veux*/ 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});