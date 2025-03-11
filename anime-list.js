// Main Anime API: https://api.jikan.moe/v4/anime
// Top 10 API: https://api.jikan.moe/v4/top/anime
let isModalOpen = false;
let lastScrollY = 0;
const animeRankHTMLEl = document.querySelector(".contents__rank-box");

async function animeRankMain() {
  const animeRank = await fetch(`https://api.jikan.moe/v4/top/anime`);
  const animeRankPortal = await animeRank.json();
  const animeRankData = animeRankPortal.data.slice(0, 10);
  // console.log(animeRankData);
  animeRankHTMLEl.innerHTML = animeRankData.map((data, index) => animeRankHTML(data, index)).join("");
  // console.log(animeRankHTMLEl)
}
animeRankMain();
function animeRankHTML(data, index) {
  return `
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
        ${data.title}
        </div>
      </div>
    </div>
  </div>
  `;
}

const animeHTMLEl1 = document.querySelector(".contents__first-4")
const animeHTMLEl2 = document.querySelector(".content-remains")

async function animeMain() {
  const anime = await fetch(`https://api.jikan.moe/v4/anime`);
  const animePortal = await anime.json();
  const animeData1 = animePortal.data.slice(0, 4);
  const animeData2 = animePortal.data.slice(5, 25)
  console.log(animeData1);
  console.log(animeData2);
  animeHTMLEl1.innerHTML = animeData1.map((data) => animeHTML1(data)).join("");
  animeHTMLEl2.innerHTML = animeData2.map((data) => animeHTML2(data)).join("");
  // console.log(animeHTMLEl1)
}
animeMain();

function animeHTML1(data) {
  return `
            <div class="contents__first-4">
              <div class="contents">
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
                      ${data.title}
                    </div>
                  </div>
                </div>
              </div>              
            </div>              
  `
}

// console.log(animeHTML1)

function animeHTML2(data) {
  return `
              <div class="content2">
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
                    ${data.title}
                  </div>
                </div>
              </div>
              
  `
}






function showAnimeContent(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/anime-list.html`;
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
