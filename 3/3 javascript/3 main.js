const bannerBox = document.querySelector(".banner-box");
const bannerList = document.querySelector(".banner-list");
const banners = document.querySelectorAll(".banner");
let currentIndex = 0; 

const category = document.querySelector(".category");
const categoryBox = document.querySelector(".category-box");
const REMOVECLASSNAME = "remove";

category.addEventListener("click", removeBanner);

function removeBanner (event){
  bannerBox.classList.add(REMOVECLASSNAME);
}

//----------------------------------------------------------------/
banners.forEach((banner) => {
  banner.style.width = `${bannerBox.clientWidth}px`; 
})

bannerList.style.width = `${bannerBox.clientWidth * banners.length}px`;

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  //current-index = (current-index < 0) ? 0 : current-index;
  if(currentIndex < 0) {
    currentIndex = 0;
  } 
  else {
    currentIndex = currentIndex;
  }
  
  bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  clearInterval(interval); 
  interval = getInterval(); 
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= banners.length ? banners.length - 1 : currentIndex; 
  bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  clearInterval(interval); 
  interval = getInterval(); 
});


const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
      currentIndex = currentIndex >= banners.length ? 0 : currentIndex;
      bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
}, 3000);
  
  function rotation() {
    currentIndex++;
    currentIndex = currentIndex >= banners.length ? 0 : currentIndex;
    bannerList.style.marginLeft = `-${bannerBox.clientWidth * currentIndex}px`;
  }
  return setInterval(rotation, 4000);
}

let interval = getInterval(); 
//-------------------------------------------------------------------------------

