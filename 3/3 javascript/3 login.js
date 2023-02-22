const loginForm = document.querySelector("form");
const loginId = loginForm.querySelector(".id");
const loginPw = loginForm.querySelector(".password");
const loginBtn = loginForm.querySelector(".login-button");
const saveUserId = "saveUserId";
const saveUserpw = "saveUserPw";
const userId = localStorage.getItem(saveUserId);
const userPw = localStorage.getItem(saveUserpw);

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
  userId.value = null;
  userPw.value = null;
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
