const category = document.querySelector(".category");
const category_box = document.querySelector(".category_box");
const REMOVE_CLASSNAME = "remove";
const best_item = document.querySelector(".best_item");
const title_best_item = document.querySelector(".title_best_item");


category.addEventListener("click", remove_banner);

function remove_banner (event){
  banner_box.classList.add(REMOVE_CLASSNAME);
}