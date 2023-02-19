const loginForm = document.querySelector("form");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".password");
const loginBtn = loginForm.querySelector(".login-button");
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const userId = localStorage.getItem(SAVEUSERID);
const userPw = localStorage.getItem(SAVEUSERPW);

if(userId === null) {
  loginForm.addEventListener("submit", saveLogin); //submit으로 하면 안됨?? 왜 안됨??
}

function saveLogin (event) {
  localStorage.setItem(SAVEUSERID, loginId.value);
  localStorage.setItem(SAVEUSERPW, loginPw.value);
  const aa = document.createElement("p");
  aa.appendChild(userId);
  document.body.appendChild(aa);
}