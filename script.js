document.addEventListener("DOMContentLoaded", function() {
    let currentProject = 0;
    const projects = document.querySelectorAll('.projet');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = (i === index) ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', function() {
        currentProject = (currentProject > 0) ? currentProject - 1 : projects.length - 1;
        showProject(currentProject);
    });

    nextBtn.addEventListener('click', function() {
        currentProject = (currentProject < projects.length - 1) ? currentProject + 1 : 0;
        showProject(currentProject);
    });

    // Afficher le premier projet au chargement
    showProject(currentProject);

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
})



