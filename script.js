//création de l'animation de mon menu
ScrollReveal({
  distance: '80px',
  duration: 1700,
  delay: 200
});

document.addEventListener("DOMContentLoaded", function () {
  // Création de mes sections "Si j'étais ... Je serais..."
  // Lier le data.json
  fetch('./data.json').then(function (response) {
    response.json().then(function (data) {
      data.forEach(function afficheAnalogie(resultat) {
        // Créer un conteneur div pour chaque section
        var sectionContainer = document.createElement('section');
        sectionContainer.classList.add('sec');

        // Utiliser l'id de l'image pour l'id de la section
        sectionContainer.id = "section-" + resultat.id;

        // Créer une div pour contenir l'image et le texte
        var contentContainer = document.createElement('div');
        contentContainer.classList.add('content-container');

        // Construire le contenu de la section
        var sectionContent = "<h1 class='titre'>Si j’étais " +
          resultat.theme + ", je serais " +
          resultat.name + ".</h1>";

        // Ajouter le contenu à la section container
        sectionContainer.innerHTML = sectionContent;

        // Ajouter l'image à la div contentContainer
        contentContainer.innerHTML = "<img id=\"" + resultat.id + "\" src=" + resultat.image + " alt=\"\" class=\"image\">";

        // Ajouter le contenu après l'image
        contentContainer.innerHTML += "<p class=\"justify\">" + resultat.content + "</p>";

        // Ajouter la div contentContainer à la section
        sectionContainer.appendChild(contentContainer);

        // Ajouter la section container à #list-analogies
        document.querySelector('#list-analogies').appendChild(sectionContainer);
      });
      
      // Création de l'animation de mes analogies 
      // pour mes images
      ScrollReveal().reveal('.sec .image', {
        origin: 'left'
      });
      // pour les titres
      ScrollReveal().reveal('.titre', {
        origin: 'top'
      });
      // pour les paragraphes
      ScrollReveal().reveal('.justify', {
        origin: 'right'
      });
    });
  });
});





//création de l'animation de mon titre 
const typed = new Typed('.simple-text', {
  strings: ['Victoria Heddad'],
  typeSpeed: 50,
  backSpeed: 100,
  backdelay: 1500,
  loop: true
});

//animation d'affichage des mentions légales
function toggleLegal() {
  var legalParagraph = document.getElementById('legal');
  legalParagraph.classList.toggle('visible');
  
  if (legalParagraph.classList.contains('visible')) {
      legalParagraph.style.display = 'block';
      legalParagraph.style.maxHeight = legalParagraph.scrollHeight + 'px';
      legalParagraph.scrollIntoView({ behavior: 'smooth' });
  } else {
      legalParagraph.style.maxHeight = '0';
      legalParagraph.addEventListener('transitionend', function () {
          legalParagraph.style.display = 'none';
      }, { once: true });
  }
}