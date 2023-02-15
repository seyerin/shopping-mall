const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.remove("login-form");
  paintGreeting();
} 

function onLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove("login-form");
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = "Nice Day! " + userName;
  // `hello ${변수명}` <---이것도 문자열이랑 변수를 합쳐서 문자열로 표기 `이건 백틱이라고 함
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//------------------------greeting---------------------------

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); //현재 시간
  const hours = String(date.getHours()).padStart(2, "0"); //string()--> 숫자를 문자로 변환
     // padstart(자릿수, 추가할 숫자)--> 기존 숫자에 다른 숫자를 추가해 원하는 자릿수로 만듬
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()// setinterval로 1초마다 코드를 반복하지만 페이지를 들어왔을 때 바로 현재 시간을 보여주기 위해 함수를 바로 실행시킴
setInterval(getClock, 1000); // setinterval--> 특정코드를 일정 시간마다 반복 1000이 1초

//--------------------------clock-----------------------------

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt-",
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "-Oprah Winfrey-",
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron-",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon-",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "-Franklin D. Roosevelt-",
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "-Margaret Mead-",
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "-Robert Louis Stevenson-",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "-Eleanor Roosevelt-",
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "-Benjamin Franklin-",
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "-Helen Keller-",
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "-Aristotle-",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "-Anne Frank-",
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "-Ralph Waldo Emerson-",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[ Math.floor(Math.random() * quotes.length)];
  // mate.round--반올림  mate.ceil--올림  mate.floor--내림])

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//---------------------------quote-----------------------------

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg"
];
const randomImg =  images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

const bgImge = `url(img/${randomImg})`;
document.body.appendChild(bgImg);
document.body.style.backgroundImage = bgImge;
//----------------------------bgimg------------------------------

const API_KEY = "971a8503e8c8b43abf89eeaa393a0642";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name + "_";
    weather.innerText = `${data.weather[0].main}_${data.main.temp}`;
  });
}

function onGeoError(text) {
  alert("위치를 찾지 못했습니다.");
  console.log(text);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition 은 2개의 인자를 필요로 함 하나는 모든게 잘 됐을 때 실행 될 함수, 다른 하나는 에러가 발생했을 때 실행 될 함수

//------------------------------weather--------------------------------

const toDoForm = document.querySelector("#todo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"

let toDos = [];//이전 todo 리스트도 기억해야 하기 때문에 const 대신 let을 써줌

function onToDoList(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  paintToDoList(newToDoObject);
  saveToDos();
}
toDoForm.addEventListener("submit", onToDoList);

function paintToDoList(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;//텍스트가 아닌 오브젝트를 받았기 때문에 .text 해주어 innertext를 텍스트로 변환
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span); 
  list.appendChild(button);
  toDoList.appendChild(list);
}

function deleteToDo() {
  const removeList = event.target.parentElement;
  removeList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(removeList.id));
  saveToDos();
}
//^^ 코드는 forEach처럼 화사료 함수를 쓴거임 .함수((함수명) => 조건);
//function 함수명 (이름을 넣는 데 이름은 뭘 넣든 상관없고 배열의 첫번째 아이템이 함수의 첫번째 인자가 된다는 것만 알면 됨){조건}
// 변수명.filter(함수명)------>filter는 배열의 아이템을 삭제하는게 아니라 조건에 맞는 아이템 제외하고 새 배열을 반환함

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JASON.stringify() = 배열이나 텍스트를 string으로 만듬
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);//JASON.parse()--->string을 배열로 만듬
  toDos = parseToDos;//todo가 로컬 스토리지에 저장 되면 parseToDos 함수를 toDos에 넣어 전에 있던 todo를 복원
  parseToDos.forEach(paintToDoList);
  //forEach는 말 그대로 배열의 각 아이템에 대해 함수를 실행시켜줌
  //function 이름 (item) {함수내용} === forEach((item) => console.log("hi! , item");)----> 함수를 짧게 쓴 것 풀어보면 item을 "hi! item"이라고 console.log 할거란 뜻 '화살표 함수'라고 함 
}


let n = Number(product_numbers.innerHTML);

if(n>0) {
product_numbers.innerHTML = n - 1;
} else {
console.log("0 밑으로는... 어쩌고");
}

console.log(n);
console.log(product.numbers);