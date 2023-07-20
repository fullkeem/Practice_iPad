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
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-logo");
const searchCloserEl = headerEl.querySelector(".search-closer");
const searchShadowEl = headerEl.querySelector(".shadow");

function showSearch() {
  headerEl.classList.add("searching");
}

function hideSearch() {
  headerEl.classList.remove("searching");
}

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);
