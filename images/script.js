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


// Content for each section
const content = {
    formation: `
        <div class="formation">
            <h4><u>Formation</u></h4><br>
            <p><strong>2022-2026 : BUT Science des données, IUT Grand Ouest Normandie, Lisieux<br><br>
            2022: baccalauréat général (SVT et SES, option mathématiques complémentaire), Bois-Colombes</strong></p>
        </div>
    `,
    experience: `
        <div class="experience">
            <h4><u>Expérience</u></h4><br>
            <p><strong><u>Janvier - Août 2024 : Employé Polyvalent</u><br>McDonald’s Neuilly-sur-Seine<br><br>
            • Ouverture et fermeture du restaurant.<br>
            • Préparation des commandes<br>
            • Gestion des imprévus<br>
            • Travail en équipe tout en étant capable de prendre des initiatives en autonomie.<br><br>
            <u>Juillet - Août 2023 : Adjoint Mécanicien</u><br>Service Garage de la Ville d’Asnières-sur-Seine<br><br>
            • Entretien et maintenance de la flotte de véhicules municipaux<br>
            • Gestion des urgences<br>
            • Travail en équipe et en autonomie</strong></p>
        </div>
    `,
    competences: `
        <div class="competences">
            <h4><u>Compétences</u></h4><br>
            <p><strong>Analyse de données et statistique<br>
            • Analyse de données<br>• Statistique inférentielle<br>• Statistique descriptive<br>
            • Méthodes de sondage<br><br>Programmation et langages informatiques<br>
            • Python, R, SQL, SAS, HTML, CSS, JavaScript<br><br>Outils de business intelligence<br>
            • Power BI, Tableau<br>• Excel</strong></p>
        </div>
    `,
    qualites: `
        <div class="qualites">
            <h4><u>Qualités</u></h4><br>
            <p><strong>• Travail autonome et en équipe<br>• Bonne communication orale et écrite<br>
            • Sociable<br>• Créatif<br>• Dynamique<br>• Esprit critique</strong></p>
        </div>
    `
};

// Track the currently visible section
let currentSection = null;

// Attach event listeners to buttons
const buttons = document.querySelectorAll('.toggle-button');
const dynamicContent = document.querySelector('.dynamic-content');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        
        // If the clicked button corresponds to the currently visible section, hide it
        if (currentSection === section) {
            dynamicContent.classList.remove('show');
            dynamicContent.classList.add('hide');
            currentSection = null;
        } else {
            // Otherwise, show the new section
            dynamicContent.innerHTML = content[section];
            dynamicContent.classList.remove('hide');
            dynamicContent.classList.add('show');
            currentSection = section;
        }
    });
});


