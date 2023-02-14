const minus_button = document.querySelector(".minus");
const plus_button = document.querySelector(".plus");
let product_numbers = document.querySelector(".product_numbers");
let price = document.querySelector(".number_price");
let whole_price = document.querySelector(".whole_price");
const origin_price = document.querySelector(".price");

plus_button.addEventListener("click", plus_number);

function plus_number (event) {
  let n = Number(product_numbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  OP = Number(origin_price.innerText.replaceAll(/(원|,)/g, ""));
  //replace(바꿀 인자, 바꿀 값)--replace는 처음 발견한 하나만 바꾸기 때문에 보통 replaceAll을 씀 replaceAll은 전부 다 바꿈
  let plus =  price.innerText = p + OP;

  price.innerText = plus.toLocaleString("ko-KR") + "원";
  whole_price.innerText = price.innerText; 
  product_numbers.innerText = n + 1;
}
// 가장 위에 있는 절 대 바뀌지 않을 price 클래스를 가진 요소를 const로 변수 선언하고 그를 이용해 상품 수량별 가격을 더하고 뺌
minus_button.addEventListener("click", minus_number);

function minus_number (event) {
  let n = Number(product_numbers.innerText);
  let p = Number(price.innerText.replaceAll(/(원|,)/g, ""));
  const  OP = Number(origin_price.innerText.replaceAll(/(원|,)/g, ""));
  if(n >1 ) {
  product_numbers.innerText = n - 1;
  }
  if (n !== 1) {
  let minus = price.innerText = p - OP ;
  price.innerText = minus.toLocaleString("ko-KR") + "원";
  whole_price.innerText = price.innerText; 
}
}