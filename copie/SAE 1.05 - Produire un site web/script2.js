document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
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