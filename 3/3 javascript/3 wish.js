let names = localStorage.getItem("productName");
let price = localStorage.getItem("productPrice");
let img = localStorage.getItem("productImg");



let priceElement = document.createElement("p");
let priceText = document.createTextNode(price);
let nameElement = document.createElement("sub");
let nameText = document.createTextNode(names);

priceElement.appendChild(priceText);
document.body.appendChild(priceElement);

nameElement.appendChild(nameText);
document.body.appendChild(nameElement);
