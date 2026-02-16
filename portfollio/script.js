const skillBars = document.querySelectorAll(".progress div");
const expertiseLink = document.getElementById("expertiseLink");

// Function to animate bars
function animateBars() {
    skillBars.forEach(bar => {
        bar.style.transition = "none";     // remove animation
        bar.style.width = "0%";            // force reset
    });

    // Force browser reflow (very important)
    void document.body.offsetWidth;

    skillBars.forEach(bar => {
        bar.style.transition = "width 1.8s ease";
        bar.style.width = bar.dataset.width;  // animate to real value
    });
}

// Intersection Observer (animate when visible)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (entry.target.id === "skills") {
                animateBars();
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".fade-up, .fade-left, .fade-right, .skills")
    .forEach(el => observer.observe(el));

// Expertise click trigger
expertiseLink.addEventListener("click", function () {
    setTimeout(() => {
        animateBars();
    }, 600);
});

// Logo shrink on scroll
window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo img");
    if (window.scrollY > 50) {
        logo.style.width = "35px";
    } else {
        logo.style.width = "45px";
    }
});
