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
  login.classList.add("remove");
  logout.addEventListener("click", doLogout);
}

function doLogout (event){
  localStorage.removeItem(SAVEUSERNAME);
  localStorage.removeItem(SAVEUSERID);
  localStorage.removeItem(SAVEUSERPW);
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}
//------------------------------change name-------------------------------------

const userName = document.querySelector(".user-name");
const nameChange = document.querySelector(".change-name");

const createUserName = document.createElement("h3");

createUserName.innerText = "닉네임 : " + localStorage.getItem(SAVEUSERNAME);
userName.insertBefore(createUserName, userName.firstChild);

nameChange.addEventListener("click", changeName);

function changeName(event) {
    let name = prompt("변경 할 닉네임을 입력 해주세요.");
    createUserName.innerText = "닉네임 : " + name;
    localStorage.setItem(SAVEUSERNAME, name);
}

//--------------------------------my page in--------------------------------------//

if (localStorage.getItem(SAVEUSERID)) {

} else {
  alert("로그인이 필요한 서비스 입니다.")
  location.href = "/3/html/header/3 login.html";
}