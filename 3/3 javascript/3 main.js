const bannerBox = document.querySelector(".banner-box");
const bannerList = document.querySelector(".banner-list");
const banners = document.querySelectorAll(".banner");
let currentIndex = 0;
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

//---------------------------------login/out----------------------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";
const REMOVE = "remove";

const userId = localStorage.getItem(SAVEUSERID);

const login = document.querySelector(".login");
const ul =   document.querySelector(".head-ul");

const logout = document.createElement("li")
const createP = document.createElement("p")

createP.innerText = "로그아웃";
logout.appendChild(createP);
ul.insertBefore(logout, ul.firstChild);
logout.classList.add("logout")

if(userId === null) {
  login.classList.remove(REMOVE);
  logout.classList.add(REMOVE);
}
else {
  logout.classList.remove(REMOVE);
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(SAVEUSERNAME);
  localStorage.removeItem(SAVEUSERID);
  localStorage.removeItem(SAVEUSERPW);
  window.location.reload();
}