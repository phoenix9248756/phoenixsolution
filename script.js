// Page load message
document.addEventListener("DOMContentLoaded", function() {
    console.log("Phoenix Solution Portfolio Loaded Successfully!");
});

// Smooth scroll effect
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
