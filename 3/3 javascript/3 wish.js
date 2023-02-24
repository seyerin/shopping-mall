let names = localStorage.getItem("productName");
let price = localStorage.getItem("productPrice");
let img = localStorage.getItem("productImg");



let priceElement = document.createElement("p");
let priceText = document.createTextNode(price);
let nameElement = document.createElement("sub");
let nameText = document.createTextNode(names);

priceElement.appendChild(priceText);
document.body.appendChild(priceElement);

nameElement.appendChild(nameText);
document.body.appendChild(nameElement);

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
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(SAVEUSERNAME);
  localStorage.removeItem(SAVEUSERID);
  localStorage.removeItem(SAVEUSERPW);
  window.location.reload();
}