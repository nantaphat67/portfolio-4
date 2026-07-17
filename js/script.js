// ======================================
// Typing Effect
// ======================================

const words = [
    "Front-End Developer",
    "Web Designer",
    "UI / UX Designer",
    "Student"
];

const typing = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ======================================
// Mobile Menu
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}


// ======================================
// Navbar Shadow
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 20px 40px rgba(22,163,74,.25)";

    } else {

        navbar.style.boxShadow =
            "0 15px 35px rgba(22,163,74,.15)";

    }

});


// ======================================
// Scroll Reveal
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    "section,.about-card,.service-card,.project-card,.stat-box,.skill-box"
).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ======================================
// Back To Top Button
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ======================================
// Active Menu
// ======================================

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


// ======================================
// Close Mobile Menu
// ======================================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (menu) {

            menu.classList.remove("show");

        }

    });

});


// ======================================
// Smooth Hover Effect
// ======================================

const cards = document.querySelectorAll(
    ".about-card,.service-card,.project-card,.stat-box"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${-(y - rect.height / 2) / 25}deg)
             rotateY(${(x - rect.width / 2) / 25}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// ======================================
// Current Year (ถ้ามี element)
// ======================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
