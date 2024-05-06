
//  Header toggle

let menu_icon = document.getElementById('menu_icon')

menu_icon.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bx-x');
});

// Typing effect

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Facilitator', 'Coach-Public Speaker'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Active Link State On Scroll

//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All sections
let sections = document.querySelectorAll('section')
console.log(sections);

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});