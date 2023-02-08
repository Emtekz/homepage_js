// Animation des Bilder Karusells

// ---- Variablen ----
// Alle Bilder auswählen
const allPictures = document.getElementsByClassName('carousel-item');

// Verzögerung + Zähler
const delay = 6000;
let count = 0;

// ---- Funktion ----
// Erstes Element wird Sichtbar
allPictures[count].style.opacity = 1;

// Intervall, in welchem die Bilder gewechselt werden
setInterval(Carousel, delay);

// Funktion: Bildwechsel
function Carousel() {
    allPictures[count].style.opacity = 0;

    count += 1;

    if (count == allPictures.length){
        count = 0;
    }
    
    allPictures[count].style.opacity = 1;
}