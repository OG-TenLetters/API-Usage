let isModalOpen = false;

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function contact(event) {
    event.preventDefault();
  
    const loading = document.querySelector(".modal__overlay--loading");
  
    const success = document.querySelector(".modal__overlay--success");
  
    loading.classList += " modal__overlay--visible";
  
    emailjs
  
      .sendForm(
        "service_dmf4e7a",
        "template_acfbkmf",
        event.target,
        "qVGgK80-uMkkItvbU"
      )
  
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
  
        success.classList += " modal__overlay--visible";
      })
  
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
  
        alert(
          "The email service is temporarily unavailable. Please contact me directly at 1tenletters0@gmail.com"
        );
      });
  }

function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
  
    //toggle modal
    document.body.classList += " modal--open";
  }
  

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
