let names = localStorage.getItem("productName");
let price = localStorage.getItem("productPrice");
let img = localStorage.getItem("productImg");
const cart = document.querySelector(".cart-list");


let priceElement = document.createElement("p");
let priceText = document.createTextNode(price);
let nameElement = document.createElement("sub");
let nameText = document.createTextNode(names);
let productImg = document.createElement("img");
productImg.setAttribute("src", img);
priceElement.appendChild(priceText);
nameElement.appendChild(nameText);

let productLi = document.createElement("li");
let productDiv = document.createElement("div");
let removeDiv = document.createElement("div")
let removeButton = document.createElement("p")

removeButton.innerText = "x";
removeDiv.appendChild(removeButton);
removeDiv.classList.add("remove-button");

productDiv.appendChild(removeDiv);
productDiv.appendChild(document.body.appendChild(productImg));
productDiv.appendChild(priceElement);
productDiv.appendChild(nameElement)

productDiv.classList.add("product-box");

productLi.appendChild(productDiv);

cart.appendChild(productLi);



//-----------------------login/out---------------------------
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const SAVEUSERNAME = "saveUserName";
const ONLOGIN = "onLogin";
const REMOVE = "remove";

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
  login.classList.add(REMOVE);
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}