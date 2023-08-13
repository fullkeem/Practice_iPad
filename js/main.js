const basketLogoEl = document.querySelector("header .basket-logo");
const basketEl = basketLogoEl.querySelector(".basket");

// 장바구니
function showBasket() {
  basketEl.classList.add("show");
}

function hideBasket() {
  basketEl.classList.remove("show");
}

basketLogoEl.addEventListener("click", function (event) {
  //화면 전체를 클릭했을 때 토글을 숨기는 이벤트에서 제외시키는 메서드
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("click", function () {
  hideBasket();
});

// 검색

const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-logo");
const searchCloserEl = headerEl.querySelector(".search-closer");
const searchShadowEl = headerEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEl = [...searchWrapEl.querySelectorAll("li")];

function showSearch() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.3) / headerMenuEls.length + "s";
  });
  searchDelayEl.forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.3) / searchDelayEl.length + "s";
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
  searchInputEl.value = "";
}

function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.3) / headerMenuEls.length + "s";
  });
  searchDelayEl.reverse().forEach(function (el, index) {
    el.style.transitionDelay = (index * 0.3) / searchDelayEl.length + "s";
  });
  searchDelayEl.reverse();
}

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

// 요소의 가시성 관찰

const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
});

const infoEls = document.querySelectorAll(".info");

infoEls.forEach(function (el) {
  io.observe(el);
});

// 비디오 재생

const video = document.querySelector(".stage video");
const playBtn = document.querySelector(".stage .controller--play");
const pauseBtn = document.querySelector(".stage .controller--pause");

playBtn.addEventListener("click", function () {
  video.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
});

pauseBtn.addEventListener("click", function () {
  video.pause();
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});
