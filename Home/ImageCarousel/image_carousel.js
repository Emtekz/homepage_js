// Animation des Bilder Karusells

// ---- Variablen ----
// Alle Bilder auswählen
const allPictures = document.getElementsByClassName('carousel-item');

// Verzögerung + Zähler
const delay = 6 * 1000;
let count = 0;

// ---- Funktion ----
// Erstes Element wird Sichtbar
allPictures[count].style.opacity = 1;

// Intervall, in welchem die Bilder gewechselt werden (6s)
setInterval(Carousel, delay);

// Funktion: Bildwechsel
function Carousel() {
    // "Altes" Bild wird ausgeblendet
    allPictures[count].style.opacity = 0;

    // Zähler wird erhöht
    count += 1;

    // Zähler wird auf 0 gesetzt, wenn er größer als die Anzahl
    // der Bilder ist
    if (count == allPictures.length){
        count = 0;
    }
    
    // "Neues" Bild wird eingeblendet
    allPictures[count].style.opacity = 1;
}