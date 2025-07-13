// Simple dark mode toggle (no persistence)
const logo = document.querySelector('#logo');
const toggleLogo = document.querySelector('#toggleLogo');
const contractLogo = document.querySelector('#contractLogo');
const notificationIcon = document.querySelector('#notificationIcon');

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#darkModeToggle');
    const html = document.documentElement;

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            // Toggle logo based on dark mode
            if (html.classList.contains('dark')) {
                logo.src = 'public/main-logo-dark.png';
                toggleLogo.src = 'public/sun.png';
                contractLogo.src = 'public/status/contract-dark.png'; // Change contract logo for dark mode
                notificationIcon.src = 'public/notification-dark.png'; // Change notification icon for dark mode
            } else {
                logo.src = 'public/main-logo.png';
                toggleLogo.src = 'public/moon.png';
                contractLogo.src = 'public/status/contract.png'; // Reset contract logo
                notificationIcon.src = 'public/notification.png'; // Reset notification icon
            }
        });
    }
});