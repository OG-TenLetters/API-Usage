

let constrastToggle = false;

function toggleContrast() {
    constrastToggle = !constrastToggle;
    if (constrastToggle) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}

changeIcon = (icon) => icon.classList.toggle('fa-sun')

function toggleClass(fa) {
    if (fa.classList == "fa-solid fa-moon") {
        fa.classList = "fa-solid fa-sun";
    } else {
        fa.classList = "fa-solid fa-moon"
    }
}
