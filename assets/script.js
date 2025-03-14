const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments du DOM
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

let currentIndex = 0; // L'index de la slide actuelle

// Fonction pour mettre à jour le slider
function updateSlider(index) {
    // Mise à jour de l'image
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

    // Mise à jour du texte
    bannerText.innerHTML = slides[index].tagLine;

    // Mise à jour des bullet points
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

// Fonction pour initialiser les bullet points
function initializeDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}

// Gestion des clics sur les flèches
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Boucle au début après la dernière slide
    updateSlider(currentIndex);
});

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle à la fin avant la première slide
    updateSlider(currentIndex);
});

// Initialisation du carrousel
initializeDots();
updateSlider(currentIndex);
