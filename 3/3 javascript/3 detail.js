const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
let productNumbers = document.querySelector(".product-numbers");
let price = document.querySelector(".number-price");
let wholePrice = document.querySelector(".whole-price");
const originPrice = document.querySelector(".price");

//-------------------------------price-----------------------

plusButton.addEventListener("click", plusNumber);

function plusNumber (event) {
  let n = Number(productNumbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  ORIGINRICE = Number(originPrice.innerText.replaceAll(/(원|,)/g, ""));
  //replace(바꿀 인자, 바꿀 값)--replace는 처음 발견한 하나만 바꾸기 때문에 보통 replaceAll을 씀 replaceAll은 전부 다 바꿈
  let plus =  price.innerText = p + ORIGINRICE

  price.innerText = plus.toLocaleString("ko-KR") + "원";
  wholePrice.innerText = price.innerText; 
  productNumbers.innerText = n + 1;
}
// 가장 위에 있는 절 대 바뀌지 않을 price 클래스를 가진 요소를 const로 변수 선언하고 그를 이용해 상품 수량별 가격을 더하고 뺌
minusButton.addEventListener("click", minusNumber);

function minusNumber (event) {
  let n = Number(productNumbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  ORIGINRICE= Number(originPrice.innerText.replaceAll(/(원|,)/g, ""));
  if(n >1 ) {
  productNumbers.innerText = n - 1;
  }
  if (n !== 1) {
  let minus = price.innerText = p - ORIGINRICE;
  price.innerText = minus.toLocaleString("ko-KR") + "원";
  wholePrice.innerText = price.innerText; 
}
}

//--------------------wish-----------------------------------
const heart = document.querySelector(".heart");
const wishHeart = document.querySelector(".full-heart");
const REMOVE = "remove";
const WISH = "wish";
const wishBox = document.querySelector(".wish-list");
let productPrice = document.querySelector(".price");
let productName = document.querySelector(".product-name");
let category = document.querySelector(".category");
const PRODUCTNAME = "productName";
const PRODUCTPRICE = "productPrice";
const PRODUCTIMG = "productImg";
const productImg = document.querySelector(".product-img").src;
const ONLOGIN = "onLogin";

if (localStorage.getItem(ONLOGIN) !== null) {
  heart.addEventListener("click", onWishList);
}
else {
  alert("로그인이 필요한 서비싑니다.")
  location.href = "/3/html/header/3 login.html";
}

function onWishList () {
  localStorage.setItem(PRODUCTNAME, productName.innerText);
  localStorage.setItem(PRODUCTPRICE, productPrice.innerText);
  localStorage.setItem(PRODUCTIMG, productImg);

  if (localStorage.getItem(PRODUCTNAME) === productName.innerText) {
    heart.classList.add(REMOVE);
    wishHeart.classList.remove(REMOVE);
    wishHeart.classList.add(WISH);

  }
}
  wishHeart.addEventListener("click", offWishList);
function offWishList (event) {
  localStorage.removeItem(PRODUCTIMG);
  localStorage.removeItem(PRODUCTNAME);
  localStorage.removeItem(PRODUCTPRICE);
  
    if (localStorage.getItem(PRODUCTNAME) === null ) {
    heart.classList.remove(REMOVE);
    wishHeart.classList.add(REMOVE);
    wishHeart.classList.remove(WISH);
  }
  }

  console.log(localStorage.getItem(PRODUCTNAME) === productName.innerText);
//-----------------------link copy----------------------
const copyButton = document.querySelector(".share");

copyButton.addEventListener("click", copy);

function copy (event) {
  let url = "";
  let textArea = document.createElement("textarea");

  document.body.appendChild(textArea);
  url = window.document.location.href;
  textArea.value = url;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("URL이 복사 되었습니다");
}

//-----------------------login/out---------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";

const userId = localStorage.getItem(ONLOGIN);

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
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}