// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

touches.forEach((touche) => {
    touche.addEventListener("click", (e) => {
        const valeur = e.target.dataset.key;
    });
});


