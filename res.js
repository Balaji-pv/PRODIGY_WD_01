// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Change to a darker color on scroll
    } else {
        navbar.style.backgroundColor = ''; // Reset to default
    }
});

document.querySelectorAll('#navbar a').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = '#777'; // Change color on hover
    });
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = ''; // Reset on mouse out
    });
});
