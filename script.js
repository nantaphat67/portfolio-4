// ==========================
// Typing Effect
// ==========================

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

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0, charIndex++);
        
        if(charIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){
            deleting = false;
            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn){

    menuBtn.onclick = ()=>{

        menu.classList.toggle("show");

    }

}


// ==========================
// Navbar Shadow
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow="0 15px 40px rgba(22,163,74,.25)";

    }else{

        navbar.style.boxShadow="0 15px 35px rgba(34,197,94,.15)";

    }

});


// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

});

document.querySelectorAll(".hero-text,.hero-image,.card,.timeline-item")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});
