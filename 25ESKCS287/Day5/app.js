// --- Dark/Light Mode Theme Management ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = 'dark';
    
    if (currentTheme === 'dark') {
        newTheme = 'light';
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
    
    htmlElement.setAttribute('data-theme', newTheme);
});

// --- Responsive Mobile Nav Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const menuIcon = mobileMenuBtn.querySelector('i');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

// Auto-close navigation menu when link elements are clicked (Mobile view structural safety)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        const menuIcon = mobileMenuBtn.querySelector('i');
        menuIcon.className = 'fas fa-bars';
    });
});

// --- Target Precision Countdown Timer Logic ---
const targetDate = new Date('July 10, 2026 09:00:00').getTime();

function updateCountdownTimer() {
    const rightNow = new Date().getTime();
    const distanceThreshold = targetDate - rightNow;

    if (distanceThreshold <= 0) {
        document.getElementById('countdown').innerHTML = "<h3>The Hack is Live!</h3>";
        clearInterval(timerIntervalTracker);
        return;
    }

    const dayMetrics = Math.floor(distanceThreshold / (1000 * 60 * 60 * 24));
    const hourMetrics = Math.floor((distanceThreshold % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuteMetrics = Math.floor((distanceThreshold % (1000 * 60 * 60)) / (1000 * 60));
    const secondMetrics = Math.floor((distanceThreshold % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(dayMetrics).padStart(2, '0');
    document.getElementById('hours').innerText = String(hourMetrics).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minuteMetrics).padStart(2, '0');
    document.getElementById('seconds').innerText = String(secondMetrics).padStart(2, '0');
}

const timerIntervalTracker = setInterval(updateCountdownTimer, 1000);
updateCountdownTimer(); // Instantaneous execution invocation

// --- FAQ Accordion Mechanics ---
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const structuralState = item.classList.contains('active');
        
        // Dynamic cleanup of open nodes
        document.querySelectorAll('.faq-item').forEach(innerItem => innerItem.classList.remove('active'));
        
        if (!structuralState) {
            item.classList.add('active');
        }
    });
});

// --- Frontend Registration Form Handle Overlay Control ---
const hackathonMainForm = document.getElementById('hackathonForm');
const successOverlayFrame = document.getElementById('successMessage');

hackathonMainForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent full-page submission default cycles
    
    // Smooth frame state transition switch
    successOverlayFrame.style.display = 'flex';
    
    // Option to clear standard input fields safely post-cache mock execution
    hackathonMainForm.reset();
});