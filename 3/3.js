const category = document.querySelector(".category");
const category_box = document.querySelector(".category_box");
const REMOVE_CLASSNAME = "remove";
const best_item = document.querySelector(".best_item");
const title_best_item = document.querySelector(".title_best_item");

const banner_box = document.querySelector(".banner_box");
const banner_list = document.querySelector(".banner_list");
const banners = document.querySelectorAll(".banner");
let current_index = 0; 
//-------------------------------------------------------------/
category.addEventListener("click", remove_banner);

function remove_banner (event){
  category_box.classList.remove(REMOVE_CLASSNAME);
  best_item.style.cssText = "position: relative; top: 30px; left: 170px;";
  title_best_item.style.cssText = "top: 50px; left: 170px";
  banner_box.classList.add(REMOVE_CLASSNAME);
}
//----------------------------------------------------------------/
banners.forEach((banner) => {
  banner.style.width = `${banner_box.clientWidth}px`; 
})

banner_list.style.width = `${banner_box.clientWidth * banners.length}px`;

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  current_index--;
  //current_index = (current_index < 0) ? 0 : current_index;
  if(current_index < 0) {
    current_index = 0;
  } 
  else {
    current_index = current_index;
  }
  
  banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  clearInterval(interval); 
  interval = get_interval(); 
});

buttonRight.addEventListener('click', () => {
  current_index++;
  current_index = current_index >= banners.length ? banners.length - 1 : current_index; 
  banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  clearInterval(interval); 
  interval = get_interval(); 
});


const get_interval = () => {
  return setInterval(() => {
    current_index++;
      current_index = current_index >= banners.length ? 0 : current_index;
      banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
}, 3000);
  
  function rotation() {
    current_index++;
    current_index = current_index >= banners.length ? 0 : current_index;
    banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  }
  return setInterval(rotation, 4000);
}

let interval = get_interval(); 
//-------------------------------------------------------------------------------
