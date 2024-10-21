// Sélection des éléments du DOM
const projets = document.querySelectorAll('.projet');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const projetContainer = document.getElementById('projet-container');

let currentIndex = 0;

// Fonction pour afficher le projet en fonction de l'index avec effet de slide complet
function afficherProjet(index) {
    projetContainer.classList.remove('slide-in', 'slide-out'); // Supprime les animations précédentes
    projetContainer.classList.add('slide-out'); // Animation de sortie

    setTimeout(() => {
        projets.forEach((projet, i) => {
            projet.style.display = i === index ? 'block' : 'none';
        });

        projetContainer.classList.remove('slide-out');
        projetContainer.classList.add('slide-in'); // Animation d'entrée
    }, 500); // Durée de l'animation

    // Gérer les boutons de navigation
    if (currentIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
    }

    if (currentIndex === projets.length - 1) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }
}

// Navigation vers le projet précédent
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        afficherProjet(currentIndex);
    }
});

// Navigation vers le projet suivant
nextBtn.addEventListener('click', () => {
    if (currentIndex < projets.length - 1) {
        currentIndex++;
        afficherProjet(currentIndex);
    }
});

// Afficher le premier projet au chargement de la page
afficherProjet(currentIndex);

// Ajouter le défilement fluide pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Vérifie si le lien a un identifiant d'ancre
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Faites défiler vers l'élément cible avec une transition fluide
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
