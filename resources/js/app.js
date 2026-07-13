import './bootstrap';

// ==========================
// Menú móvil
// ==========================
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

}

// ==========================
// Ocultar / Mostrar Navbar
// ==========================
const navbar = document.getElementById("navbar");

if (navbar) {

    function controlarNavbar() {

        // En todas las páginas menos el inicio
        if (window.location.pathname !== "/") {

            navbar.classList.remove(
                "opacity-0",
                "-translate-y-full",
                "pointer-events-none"
            );

            return;
        }

        // Si estamos en el Hero
        if (window.scrollY < window.innerHeight - 100) {

            navbar.classList.add(
                "opacity-0",
                "-translate-y-full",
                "pointer-events-none"
            );

        } else {

            navbar.classList.remove(
                "opacity-0",
                "-translate-y-full",
                "pointer-events-none"
            );

        }

    }

    controlarNavbar();

    window.addEventListener("scroll", controlarNavbar);

}