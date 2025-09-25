console.log("Company Bassem Soilem 🚀");

// Botón hero
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        alert("¡Botón clickeado!");
    });
});

// Fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const scrollFade = () => {
    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(top < screenHeight - 100){
            fader.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollFade);
window.addEventListener('load', scrollFade); // Para que algunos ya visibles se animen

