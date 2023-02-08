// Funktion des Nav Menüs

// ---- Variablen ----
// Navbar + Nav Icon wählen
const navbar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');

// Ist Navbar offen?
let open = false;

// ---- Funktion ----
navIcon.addEventListener('click', () => {
   
    if(open){
        // Navbar schließen
        navbar.style.display = 'none';
        navIcon.src = "Home/Header/Graphics/Nav_Menu.svg";

        open = false;
    }
    else if(!open){
        // Navbar öffnen
        navbar.style.display = 'inline-table';
        navIcon.src = "Home/Header/Graphics/Nav_Close.svg";

        open = true;
    }
} 
);