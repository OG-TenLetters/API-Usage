// Main Anime API: https://api.jikan.moe/v4/anime
// Top 10 API: https://api.jikan.moe/v4/top/anime

const animeRankHTMLEl = document.querySelector(".contents__rank-box");
const animeHTMLEl1 = document.querySelector(".contents__first-4");
const animeHTMLEl2 = document.querySelector(".content-remains");
const animeHeaderHTMLEl1 = document.querySelector()
const getAnimehome = document.querySelector(".getAnimeHome")
const getAnimeMovies = document.querySelector(".getAnimeMovies")
const getManga = document.querySelector("getManga")
// const theSpread = {search, anime, animePortal, animeData1, animeData2, animeDataArrays, animeElements}




let isModalOpen = false;
let lastScrollY = 0;

async function onSearchChange(event) {
  const search = event.target.value
  const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw=true`);
  const animePortal = await anime.json();
  const animeData1 = animePortal.data.slice(0, 4);
  const animeData2 = animePortal.data.slice(5, 25);
  const animeDataArrays = [animeData1, animeData2];
  const animeElements = [animeHTMLEl1, animeHTMLEl2];
  
  animeElements.forEach((elem, index) => {
    elem.innerHTML = animeDataArrays[index].map((data) => 
      animeTemplateHTML(data)).join("");
  })
  
}


// function animeHeaderTemplateHTML(event) {
// }



async function renderMovies(event) { 
  console.log(event)
  const anime = await fetch(`https://api.jikan.moe/v4/anime?type=movie&sfw=true`);
  const animePortal = await anime.json();
  const animeData1 = animePortal.data.slice(0, 4);
  const animeData2 = animePortal.data.slice(5, 25);
  const animeDataArrays = [animeData1, animeData2];
  const animeElements = [animeHTMLEl1, animeHTMLEl2];
  
  // if (event.target.classList.value === "menu__link getAnimeMovies link__hover-effect nope") {
  //   return console.log("Outstanding")
  // }

  animeElements.forEach((elem, index) => {
    elem.innerHTML = animeDataArrays[index].map((data) => 
      animeTemplateHTML(data)).join(""); 
  })
}
async function renderManga(data) { 
  const anime = await fetch(`https://api.jikan.moe/v4/manga`);
  const animePortal = await anime.json();
  const animeData1 = animePortal.data.slice(0, 4);
  const animeData2 = animePortal.data.slice(5, 25);
  const animeDataArrays = [animeData1, animeData2];
  const animeElements = [animeHTMLEl1, animeHTMLEl2];
  
  // if (event.target.classList.value === "menu__link getAnimeMovies link__hover-effect nope") {
  //   return console.log("Outstanding")
  // }

  animeElements.forEach((elem, index) => {
    elem.innerHTML = animeDataArrays[index].map((data) => 
      animeTemplateHTML(data)).join(""); 
  })
}






async function renderAnime() {
  const anime = await fetch(`https://api.jikan.moe/v4/anime`);
  const animePortal = await anime.json();
  const animeData1 = animePortal.data.slice(0, 4);
  const animeData2 = animePortal.data.slice(5, 25);
  const animeDataArrays = [animeData1, animeData2];
  const animeElements = [animeHTMLEl1, animeHTMLEl2];

  animeElements.forEach((elem, index) => {
    elem.innerHTML = animeDataArrays[index].map((data) => animeTemplateHTML(data)).join("");
  })
}
renderAnime();




function animeTemplateHTML(data) {
  return` 
  <div class="content">
  <div class="content__wrapper">
  <figure class="content__img--wrapper">
  <img
  class="content__img"
  src= ${data.images.webp.image_url}
  alt=""
  />
  </figure>
  <div class="content__wrapper--bg"></div>
  <p class="content__description">
  ${data.synopsis}
  </p>
  </div>
  <div class="content__title">
  <div class="content__title-text">
  ${data.title_english || data.title}
  </div>
  </div>
  </div>
  `
}






async function renderAnimeRank() {
  const animeRank = await fetch(`https://api.jikan.moe/v4/top/anime`);
  const animeRankPortal = await animeRank.json();
  const animeRankData = animeRankPortal.data.slice(0, 10);
  // console.log(animeRankData);
  animeRankHTMLEl.innerHTML = animeRankData
    .map((data, index) => `
  <div class="content__rank-box" ${data.id}>
  <div class="content__rank--wrapper">
  <figure class="content__rank--img--wrapper">
  <img
  src="${data.images.webp.image_url}"
  class="content__rank--img"
  />
  <div class="content__rank">${index + 1}</div>
  </figure>
  <div class="content__rank--title">
  <div class="content__rank--title-text">
  ${data.title_english || data.title}
  </div>
  </div>
  </div>
  </div>
  `).join("");
}
renderAnimeRank();




// function showAnimeContent(id) {
//   localStorage.setItem("id", id);
//   window.location.href = `${window.location.origin}/anime-list.html`;
// }
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
