// Main Anime API: https://api.jikan.moe/v4/anime
// Top 10 API: https://api.jikan.moe/v4/top/anime
let isModalOpen = false;
let lastScrollY = 0;
const animeHTMLEl = document.querySelector(".content__rank-box");

async function main() {
  const anime = await fetch("https://api.jikan.moe/v4/top/anime");
  const animeData = await anime.json();
  console.log(animeData);
  animeHTMLEl.innerHTML = animeData.map((data) => animeHTML(data)).join("");
}

main();

function showAnimeContent(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/user.html`;
}

function animeHTML(data) {
  return `      
    <div class="content__rank--wrapper" (${data.id})>
      <figure class="content__rank--img--wrapper">
        <img
          src="${data.images.webp.image_url}"
          class="content__rank--img"
        />
        <div class="content__rank">1</div>
      </figure>
      <div class="content__rank--title">
        <div class="content__rank--title-text">
          The Aristocrat's Otherworldly Adventure
        </div>
      </div>
      </div>
  `;
}

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const navbar = document.querySelector(".nav2");

  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
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
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;

  //toggle modal
  document.body.classList += " modal--open";
}

let constrastToggle = false;

function toggleContrast() {
  constrastToggle = !constrastToggle;
  if (constrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

changeIcon = (icon) => icon.classList.toggle("fa-sun");

function toggleClass(fa) {
  if (fa.classList == "fa-solid fa-moon") {
    fa.classList = "fa-solid fa-sun";
  } else {
    fa.classList = "fa-solid fa-moon";
  }
}
