/**
 * 
 */

var ape = document.querySelector('.moving-object'),
    apeHome = document.querySelector('.object-home');

var down = false;

var originX = 0, 
    originY = 0;

// Funktion
ape.addEventListener('mousedown', (e) => {
    down = true;

    // ape.style.left = 0 + e.clientX;
    // ape.style.top = 0 + e.clientY;

    console.log("Gedrückt");
})

apeHome.addEventListener('mousemove', (e) => {
    if(down) {   
        ape.style.left = 
                    originX + (e.clientX - 75) + "px";
        ape.style.top = originY + (e.clientY - 75) + "px";
    }
})

apeHome.addEventListener('mouseup', (e) => {
    down = false;

    console.log("Losgelassen");
})