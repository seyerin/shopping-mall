const category = document.querySelector(".category");
const category_box = document.querySelector(".category_box");
const REMOVE_CLASSNAME = "remove";

const banner_box = document.querySelector('.banner_box');
const banner_list = document.querySelector('.banner_list');
const banners = document.querySelectorAll('.banner');
let current_index = 0; 
//-------------------------------------------------------------/

banners.forEach((banner) => {
  banner.style.width = `${banner_box.clientWidth}px`; 
})

banner_list.style.width = `${banner_box.clientWidth * banners.length}px`;

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  current_index--;
  //current_index = (current_index < 0) ? 0 : current_index;
  if(current_index < 0) {
    current_index = 0;
  } 
  else {
    current_index = current_index;
  }
  banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  clearInterval(interval); 
  interval = get_interval(); 
});

buttonRight.addEventListener('click', () => {
  current_index++;
  current_index = current_index >= banners.length ? banners.length - 1 : current_index; 
  banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  clearInterval(interval); 
  interval = get_interval(); 
});


const get_interval = () => {
  return setInterval(() => {
    current_index++;
    current_index = current_index >= banners.length ? 0 : current_index;
    banner_list.style.marginLeft = `-${banner_box.clientWidth * current_index}px`;
  }, 1000);
}

let interval = get_interval(); 


















function clip(){

  var url = '';    // <a>태그에서 호출한 함수인 clip 생성
  var textarea = document.createElement("textarea");  
  //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성
  
  document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
  url = window.document.location.href;  //url에는 현재 주소값을 넣어줌
  textarea.value = url;  // textarea 값에 url를 넣어줌
  textarea.select();  //textarea를 설정
  document.execCommand("copy");   // 복사
  document.body.removeChild(textarea); //extarea 요소를 없애줌
  
  alert("URL이 복사되었습니다.")  // 알림창
}