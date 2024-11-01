// This code  is for Animation for hero section fade-in
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hero-content").style.opacity = "1";
    document.querySelector(".hero-content").style.transform = "translateY(0)";
});

// thso code is for Scroll animation for service cards and testimonials
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".service-card, .testimonial").forEach(element => {
    observer.observe(element);
});

// Thois is fo r Handle "Get a Free Quote" button click
document.getElementById('getQuoteButton').addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});

// This is for  Form submission with success message display
const appointmentForm = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //this is for  Simulate form submission
    setTimeout(() => {
        successMessage.style.display = 'block';
        appointmentForm.reset();
        
        //to show timeer
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 6000);
    }, 1000);
});

const bubbleContainer = document.querySelector(".floating-bubbles");
for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = bubble.style.height = `${Math.random() * 100 + 30}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 5}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubbleContainer.appendChild(bubble);
}