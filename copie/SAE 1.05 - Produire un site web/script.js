  document.addEventListener("DOMContentLoaded", function () {
    //création de mes section de "Si j'étais ... Je serais..."
        //lier le data.json
        // fetch("data.json")
        //   .then(function (response) {
        //     console.log(data);
        //     response.json().then(function (data) {
        //         data.forEach(function afficheAnalogie(resultat) {
        //             document.querySelector('#list-analogies').innerHTML += "<section class=\"sec\" id=" + resultat.id + "><h1>Si j’étais " + resultat.theme + ", je serais" + resultat.Name + ".</h1><img src=" + resultat.img + " alt=\"\"class=\"image\"><p class=\"justify\"> " + resultat.content + " </p><a href=" + resultat.down + "  class=\"down\"><img src=\"img/down.png\"/></a></section>";
        //           })
        //         })
        //       })*
    fetch('./data.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        data.forEach(function (resultat) {
          document.querySelector('#list-analogies').innerHTML += "<section class=\"sec\" id=" + resultat.id + "><h1>Si j’étais " + resultat.theme + ", je serais" + resultat.Name + ".</h1><img src=" + resultat.img + " alt=\"\"class=\"image\"><p class=\"justify\"> " + resultat.content + " </p><a href=" + resultat.down + "  class=\"down\"><img src=\"img/down.png\"/></a></section>";
        })
      })
  });
  





        //     //création de l'animation de mon titre 
        //     const typed = new Typed('.simple-text', {
        //       strings: ['Victoria Heddad'],
        //     typeSpeed: 50,
        //     backSpeed: 100,
        //     backdelay: 1500,
        //     loop: true
        //   });
          
        //   //animation d'affichage des mentions légales
        //   function toggleLegal() {
        //     var legalParagraph = document.getElementById('legal');
        //     if (legalParagraph.style.display === 'none') {
        //         legalParagraph.style.display = 'block';
        //     } else {
        //         legalParagraph.style.display = 'none';
        //     }
        // }

     