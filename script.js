// Create animated background dots
function createDots() {
    const dotsContainer = document.getElementById('dots');
    const numberOfDots = 15;
    
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Random size
        const size = Math.random() * 200 + 50;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Random position
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;
        
        dotsContainer.appendChild(dot);
    }
}

// Set the last updated date
function updateLastUpdated() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('lastUpdated').textContent = now.toLocaleDateString('en-US', options);
}

// Set countdown timer to a date 30 days from now
function startCountdown() {
    const now = new Date();
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + 30);
    
    function updateCountdown() {
        const currentTime = new Date();
        const difference = targetDate - currentTime;
        
        if (difference <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize the page
window.onload = function() {
    createDots();
    updateLastUpdated();
    startCountdown();
};