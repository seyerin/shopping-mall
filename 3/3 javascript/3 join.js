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


const a = document.querySelector(".aa");

localStorage.setItem("aaa", a.innerHTML);

if(userName === null && userId === null && userPw === null) {
  localStorage.setItem(SAVEUSERNAME, loginUserName.value);
  loginForm.addEventListener("submit", saveLogin); //submit으로 하면 안됨?? 왜 안됨??
  savePw();
} else {
  alert("이미 있는 회원입니다.")
}

function saveId (event) {
  localStorage.setItem(SAVEUSERID, loginId.value);
}

function savePw (event) {
  if(reconfirmPw.value === loginPw.value) {
    localStorage.setItem(SAVEUSERPW, loginPw.value);
  } else {
    alert("비밀번호가 다릅니다.")
  }
}