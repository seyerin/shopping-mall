const category = document.querySelector(".category");
const categoryBox = document.querySelector(".category-box");
const REMOVECLASSNAME = "remove";
const bestItem = document.querySelector(".best-item");
const titleBestItem = document.querySelector(".title-best-item");


category.addEventListener("click", removeBanner);

function removeBanner (event){
  bannerBox.classList.add(REMOVE-CLASSNAME);
}