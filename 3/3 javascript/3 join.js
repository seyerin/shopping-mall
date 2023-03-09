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
  if (loginId.value === userId) {
      available();
      loginId.value = null;
      loginPw.value = null;
    } 
    else {
      loginPw.addEventListener("focus", reconfirmPassword);
    }
  }

function available (event) {
  alert("이미 가입된 회원입니다.");
  same.innerText = "이미 가입한 아이디입니다."
//  loginUserName.required = false; 인풋 속성 접근은 걍 엘리먼트.속성이름 = 트루/펄스;
//  loginId.required = false;
//  loginPw.required = false;
//  reconfirmPw.required = false;
}


function reconfirmPassword(){
  if(loginPw.value !== reconfirmPw.value) {
    same.innerHTML = "비밀번호가 일치하지 않습니다";
    same.style.color = "red";
    loginBtn.disabled = true;
  } else {
    same.innerHTML = "비밀번호가 일치합니다.";
    same.style.color = "blue";
    loginBtn.disabled = false;
    
    // 회원가입 후 로그인 버튼을 눌렀을 때 바로 메인 페이지로 가게 하고 싶음 어캐함
    loginForm.addEventListener("submit", saveLogin);
    goToLogin();
  }
}
loginPw.onchange = reconfirmPassword;
reconfirmPw.onkeyup = reconfirmPassword;


function saveLogin (event) {
  localStorage.setItem(SAVEUSERNAME, loginUserName.value);
  localStorage.setItem(SAVEUSERID, loginId.value);
  localStorage.setItem(SAVEUSERPW, loginPw.value);
}

function goToLogin () {
  if(localStorage.getItem(SAVEUSERID) !== null) {
    location.href = "/3/html/header/3 login.html";
  }
}
