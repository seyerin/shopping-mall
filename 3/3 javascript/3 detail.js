const minus_button = document.querySelector(".minus");
const plus_button = document.querySelector(".plus");
let product_numbers = document.querySelector(".product_numbers");
let price = document.querySelector(".number_price");
let whole_price = document.querySelector(".whole_price");
const origin_price = document.querySelector(".price");

//-------------------------------price-----------------------

plus_button.addEventListener("click", plus_number);

function plus_number (event) {
  let n = Number(product_numbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  ORIGIN_PRICE = Number(origin_price.innerText.replaceAll(/(원|,)/g, ""));
  //replace(바꿀 인자, 바꿀 값)--replace는 처음 발견한 하나만 바꾸기 때문에 보통 replaceAll을 씀 replaceAll은 전부 다 바꿈
  let plus =  price.innerText = p + ORIGIN_PRICE;

  price.innerText = plus.toLocaleString("ko-KR") + "원";
  whole_price.innerText = price.innerText; 
  product_numbers.innerText = n + 1;
}
// 가장 위에 있는 절 대 바뀌지 않을 price 클래스를 가진 요소를 const로 변수 선언하고 그를 이용해 상품 수량별 가격을 더하고 뺌
minus_button.addEventListener("click", minus_number);

function minus_number (event) {
  let n = Number(product_numbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  ORIGIN_PRICE = Number(origin_price.innerText.replaceAll(/(원|,)/g, ""));
  if(n >1 ) {
  product_numbers.innerText = n - 1;
  }
  if (n !== 1) {
  let minus = price.innerText = p - ORIGIN_PRICE ;
  price.innerText = minus.toLocaleString("ko-KR") + "원";
  whole_price.innerText = price.innerText; 
}
}

//--------------------wish-----------------------------------
const heart = document.querySelector(".heart");
const wish_heart = document.querySelector(".full_heart");
const REMOVE = "remove";
const WISH = "wish";
const wish_box = document.querySelector(".wish_list");

heart.addEventListener("click", on_wish_button);

function on_wish_button (event) {
  heart.classList.add(REMOVE);
  wish_heart.classList.remove(REMOVE);
  wish_heart.classList.add(WISH);
  let product_price = document.querySelector(".price");
  let product_name = document.querySelector(".product_name");
  let product_img = document.querySelector(".product_img");
  console.log(product_name);

  
  localStorage.setItem("product_name", product_name.innerText);
  localStorage.setItem("product_price", product_price.innerText);
  localStorage.setItem("product_img", product_img);

}

wish_heart.addEventListener("click", off_wish_button);

function off_wish_button (event) {
  heart.classList.remove(REMOVE);
  wish_heart.classList.remove(WISH);
  wish_heart.classList.add(REMOVE);
}

//-----------------------link copy----------------------
const copy_button = document.querySelector(".share");

copy_button.addEventListener("click", copy);

function copy (event) {
  let url = "";
  let text_area = document.createElement("textarea");

  document.body.appendChild(text_area);
  url = window.document.location.href;
  text_area.value = url;
  text_area.select();
  document.execCommand("copy");
  document.body.removeChild(text_area);
  alert("URL이 복사 되었습니다");
}
