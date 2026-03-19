// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
        if(window.innerWidth < 768){
            document.querySelector('nav ul').style.display = 'none';
        }
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    const navUl = document.querySelector('nav ul');
    if(navUl.style.display === 'flex'){
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'flex';
    }
});