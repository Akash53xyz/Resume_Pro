document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    const goCreate = document.getElementById('go-create');
    const goAts = document.getElementById('go-ats');

    // Functions to Open/Close
    const toggleMenu = () => {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    // Event Listeners for the Menu
    openBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Redirect Logic
    goCreate.addEventListener('click', () => {
        window.location.href = 'Chose_tamplate.html';
    });

    goAts.addEventListener('click', () => {
        window.location.href = 'ats-checker.html';
    });
});
