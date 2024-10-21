// Sélection des éléments du DOM

const projets = document.querySelectorAll('.projet');

const prevBtn = document.getElementById('prev-btn');

const nextBtn = document.getElementById('next-btn');



let currentIndex = 0;



// Fonction pour afficher le projet en fonction de l'index

function afficherProjet(index) {

    projets.forEach((projet, i) => {

        projet.style.display = i === index ? 'block' : 'none';

    });

}



// Navigation vers le projet précédent

prevBtn.addEventListener('click', () => {

    currentIndex = (currentIndex === 0) ? projets.length - 1 : currentIndex - 1;

    afficherProjet(currentIndex);

});



// Navigation vers le projet suivant

nextBtn.addEventListener('click', () => {

    currentIndex = (currentIndex === projets.length - 1) ? 0 : currentIndex + 1;

    afficherProjet(currentIndex);

});



// Afficher le premier projet au chargement de la page

afficherProjet(currentIndex);

    // Ajouter le défilement fluide pour les liens de navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Vérifiez si le lien a un identifiant d'ancre
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Faites défiler vers l'élément cible
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });




