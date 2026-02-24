// Inicializar ícones Lucide
lucide.createIcons();

// Ano atual no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Menu Mobile Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('menu-open');
    document.body.classList.toggle('overflow-hidden');
}

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Toggle service details
function setupServiceDetailsToggle(buttonId, detailsId) {
    const button = document.getElementById(buttonId);
    const details = document.getElementById(detailsId);
    const icon = button.querySelector('i[data-lucide="chevron-right"]'); // Assuming chevron-right is always present

    button.addEventListener('click', () => {
        if (details.style.maxHeight) {
            details.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)'; // Rotate icon back
        } else {
            details.style.maxHeight = details.scrollHeight + "px";
            icon.style.transform = 'rotate(90deg)'; // Rotate icon
        }
    });
}

// Setup toggles for each service
setupServiceDetailsToggle('toggle-interiores-btn', 'interiores-details');
setupServiceDetailsToggle('toggle-escolas-btn', 'escolas-details');
setupServiceDetailsToggle('toggle-pavimentacao-btn', 'pavimentacao-details');

// Setup toggle for full portfolio
setupServiceDetailsToggle('toggle-portfolio-btn', 'portfolio-details');





