// Funktion: Bildwechsel bei bestimmter Breite
// Wechselt angezeigtes Bild (im Karusell) von einem Querformat Bild
// zu einem im Hochformat, wenn der Bildschirm zu Eng für das Quere ist

// ---- Variablen ----
// Alle Bilder (einzeln) wählen
const wedding = document.getElementById('wedding');
const portrait = document.getElementById('portrait');
const events = document.getElementById('event');
const others = document.getElementById('others');

// ---- Funktion ----
function changePictures() { 

    // Tauscht die Querformat Bilder mit denen im Hochformat aus
    wedding.src = 'Images/ImageCarousel/Vertikal/Wedding.webp';
    portrait.src = 'Images/ImageCarousel/Vertikal/Portrait.webp';
    events.src = 'Images/ImageCarousel/Vertikal/Event.webp';
    others.src = 'Images/ImageCarousel/Vertikal/Others.webp';
}

// Wenn die Breite des Fensters kleiner als 750px ist,
// wird die Funktion ausgeführt
if(window.innerWidth <= 950) {
    changePictures();
}