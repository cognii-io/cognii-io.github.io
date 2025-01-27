// Get elements using IDs
const menuButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = mobileMenu.querySelector('.fixed.inset-0');

// Toggle menu function
const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    // When showing menu, make backdrop clickable
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    backdrop.style.cursor = 'pointer';
};

// Close menu function
const closeMenu = () => {
    mobileMenu.classList.add('hidden');
};

// Handle clicks
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);