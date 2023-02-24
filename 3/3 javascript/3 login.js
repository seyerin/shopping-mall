const loginForm = document.querySelector("form");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".password");
const loginBtn = loginForm.querySelector(".login-button");
const SAVEUSERID = "saveUserId";
const SAVEUSERPW = "saveUserPw";
const userId = localStorage.getItem(SAVEUSERID);
const userPw = localStorage.getItem(SAVEUSERPW);

document.addEventListener("keydown", eneterEvent);

function eneterEvent (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
  console.log(userId == loginId.value);
  console.log(userPw == loginPw.value);
}
  loginBtn.addEventListener("click", checkUserMembership);
  
  function checkUserMembership (event) {
  if (userId === loginId.value) {
    if(userPw === loginPw.value) {
    success();
  }
}
else if (userId === null) {
  alert("없는 회원입니다.");
  loginId.value = null;
  loginPw.value = null;
}
else{
  fail();
  loginId.value = null;
  loginPw.value = null;
}
}

function success (event) {
  location.href = "/3/html/main/index.html";
}

function fail (event) {
  alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
}