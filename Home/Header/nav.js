// Funktion des Nav Menüs

// ---- Variablen ----
// Navbar + Nav Icon wählen
const navbar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navContent = document.getElementById('nav-content');

// Ist Navbar offen?
let open = false;

// ---- Funktion ----
// Wenn auf das Icon gedrückt wird:
navIcon.addEventListener('click', () => {
   
    // Wenn die Navbar offen ist:
    if(open){
        // Navbar schließen + Änderung des Icons zu Default
        navbar.style.display = 'none';
        navIcon.src = "Home/Header/Graphics/Nav_Menu.svg";

        // Ist Navbar offen? -> Nein
        open = false;
    }
    // Wenn die Navbar geschlossen ist:
    else if(!open){
        // Navbar öffnen + Änderung des Icons zu Schließen
        navbar.style.display = 'inline-table';
        navIcon.src = "Home/Header/Graphics/Nav_Close.svg";

        // Ist Navbar offen? -> Ja
        open = true;
    }
} 
);
