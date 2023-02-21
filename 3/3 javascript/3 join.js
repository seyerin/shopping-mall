const loginForm = document.querySelector("form");
const loginUserName = loginForm.querySelector(".name");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".pw");
const reconfirmPw = loginForm.querySelector(".re-pw");
const loginBtn = loginForm.querySelector(".btn");
const SAVEUSERNAME = "saveUserName";
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const userName = localStorage.getItem(SAVEUSERNAME);
const userId = localStorage.getItem(SAVEUSERID);
const userPw = localStorage.getItem(SAVEUSERPW);
const same = document.querySelector(".same");

document.addEventListener("keydown", eneterEvent);

function eneterEvent (event) {
if (event.keyCode === 13) {
  event.preventDefault();
}
  if (userName !== null) {
  
} 
else {
  joinMembership();
}
}
function available (event) {
  alert("이미 가입된 회원입니다.")

}

function joinMembership(){
  if(loginPw.value != reconfirmPw.value) {
    same.innerHTML = "비밀번호가 일치하지 않습니다";
    same.style.color = "red";
  } else {
    same.innerHTML = "비밀번호가 일치합니다.";
    same.style.color = "blue";
    loginForm.addEventListener("submit", saveLogin);
  }
}
loginPw.onchange = joinMembership;
reconfirmPw.onkeyup = joinMembership;

function saveLogin (event) {
  localStorage.setItem(SAVEUSERNAME, loginUserName.value);
  localStorage.setItem(SAVEUSERID, loginId.value);
  localStorage.setItem(SAVEUSERPW, loginPw.value);
}
