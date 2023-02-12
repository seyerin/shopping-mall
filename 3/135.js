const minus_button = document.querySelector(".minus");
const plus_button = document.querySelector(".plus");
let product_numbers = document.querySelector(".product_numbers");
let price =document.querySelector(".number_price");

plus_button.addEventListener("click", plus_number);

function plus_number (event) {
  let n = product_numbers;
  let p = Number(price.innerText);
  console.log(p);
  //replace(바꿀 인자, 바꿀 값)--replace는 처음 발견한 하나만 바꾸기 때문에 보통 replaceAll을 씀 replaceAll은 전부 다 바꿈
  price.innerText = p + p;   
// 숫자 뒤에 "원"을 붙이고 싶어서  + "원" 했는데 두번째 부터 nan 뜸 이유는 알것 같은데 다른 방법이 없을까?

//  console.log(p.toLocaleString("ko-KR")); 하면 콤마 제대로 들어가는데
//price.innerText = p.toLocaleString("ko-KR"); 하면 2번째 부터 nan 뜸 우째서??

n.innerText = Number(n.innerText) + 1;
}

minus_button.addEventListener("click", minus_number);

function minus_number (event) {
  let n = Number(product_numbers.innerText);
  if(n>1) {
  product_numbers.innerText = n - 1;
  }
  let p = Number(price.innerText);
  if(n !== 1 ) {
    price.innerText = p * 0.5;
  }
}

