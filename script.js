//création de l'animation de mon menu
ScrollReveal({
  distance: '80px',
  duration: 1700,
  delay: 200
});

document.addEventListener("DOMContentLoaded", function () {
  //création de mes section de "Si j'étais ... Je serais..."
  //lier le data.json
  fetch('./data.json').then(function (response) {
    response.json().then(function (data) {
      data.forEach(function afficheAnalogie(resultat) {
        document.querySelector('#list-analogies').innerHTML += "<section class=\"sec\" id=" + resultat.id + "><h1 class='titre' >Si j’étais " +
          resultat.theme + ", je serais " +
          resultat.name + ".</h1><img id=" + resultat.id + " src=" + resultat.image + " alt=\"\"class=\"image\"><p class=\"justify\"> " +
          resultat.content + " </p><a href=" + resultat.image + "  class=\"down\"><img src=\"img/down.png\"/></a></section>";
      })
      // Création de l'animation de mes analogies 
      //pour mes images
      ScrollReveal().reveal('.sec #litchi, .sec #sweatshirt , .sec #printemps , .sec #bleu , .sec #rose , .sec #loup , .sec #feu ', {
        origin: 'right'
      });
      //pour les titres
      ScrollReveal().reveal('.titre', {
        origin: 'top'
      });
      //pour les paragraphes
      ScrollReveal().reveal('.justify', {
        origin: 'left'
      });
    })
  })
})

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
  if (legalParagraph.style.display === 'none') {
    legalParagraph.style.display = 'block';
  } else {
    legalParagraph.style.display = 'none';
  }
}