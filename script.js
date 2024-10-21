// JavaScript pour gérer l'ouverture et la fermeture des modales
const cards = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');


// Fermer la modale quand on clique à l'extérieur du contenu
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Ouvrir la modale associée à une carte avec l'animation
cards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('show'); // Ajoute la classe show pour l'animation
        modal.style.display = 'flex';
    });
});



// Fermer la modale quand on clique à l'extérieur du contenu
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show'); // Retire la classe show pour fermer
            setTimeout(() => {
                modal.style.display = 'none'; // Ferme après l'animation
            }, 300); // Délai pour laisser l'animation se terminer
        }
    });
});

// Ouvrir la modale et désactiver le défilement
cards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Désactive le défilement de la page
    });
});

// Fermer la modale et réactiver le défilement
closeButtons.forEach(close => {
    close.addEventListener('click', function() {
        const modal = this.parentElement.parentElement;
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactive le défilement de la page
        }, 300); // Laisser l'animation se terminer avant de réactiver le défilement
    });
});

// Fermer la modale en cliquant à l'extérieur et réactiver le défilement
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Réactive le défilement de la page
            }, 300);
        }
    });
});


