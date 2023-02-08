// Funktion: Bildwechsel bei bestimmter Breite
// Wechselt angezeigtes Bild (im Karusell) von einem Querformat Bild
// zu einem im Hochformat, wenn der Bildschirm zu Eng für das Quere ist

// ---- Variablen ----
// Alle Bilder (einzeln) wählen
const wedding = document.getElementById('wedding');
const portrait = document.getElementById('portrait');
const event = document.getElementById('event');
const others = document.getElementById('others');

// ---- Funktion ----
function changePictures() {
    if (screen.width < 750){
        wedding.src = "Images/Placeholder_ver/wedding.jpg";

        console.log(screen.width);
    }
}

changePictures();