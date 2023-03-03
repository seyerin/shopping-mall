let names = localStorage.getItem("productName");
let price = localStorage.getItem("productPrice");
let img = localStorage.getItem("productImg");
const wish = document.querySelector(".wish-list");


let priceElement = document.createElement("p");
let priceText = document.createTextNode(price);
let nameElement = document.createElement("sub");
let nameText = document.createTextNode(names);

nameElement.appendChild(nameText);
let nameLi = document.createElement("li");
nameLi.appendChild(document.body.appendChild(nameElement));
wish.appendChild(nameLi);

priceElement.appendChild(priceText);
let priceLi = document.createElement("li");
priceLi.appendChild(document.body.appendChild(priceElement));
wish.appendChild(priceLi);

let productImg = document.createElement("img");
productImg.setAttribute("src", img);
let imgLi = document.createElement("li");
imgLi.appendChild(document.body.appendChild(productImg));
wish.insertBefore(imgLi, wish.firstChild);

//-------------------------login/out-----------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";
const REMOVE = "remove";

const userId = localStorage.getItem(SAVEUSERID);

const login = document.querySelector(".login");
const ul =   document.querySelector(".head-ul");

const logout = document.createElement("li")
const createP = document.createElement("a")

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
  login.classList.add(REMOVE);
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(SAVEUSERNAME);
  localStorage.removeItem(SAVEUSERID);
  localStorage.removeItem(SAVEUSERPW);
  window.location.reload();
}
//------------------------------change name-------------------------------------

const userName = document.querySelector(".user-name");

const createUserName = document.createElement("h3");

createUserName.innerText = "닉네임 : " + localStorage.getItem(SAVEUSERNAME);
userName.appendChild(createUserName);

