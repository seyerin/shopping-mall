//----------------------login/out----------------------------------
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
  localStorage.removeItem(ONLOGIN);
  window.location.reload();
}