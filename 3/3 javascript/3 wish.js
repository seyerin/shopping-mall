let names = localStorage.getItem("product-name");
let price = localStorage.getItem("product-price");
let img = localStorage.getItem("product-img");



let priceElement = document.createElement("p");
let priceText = document.createTextNode(price);
let nameElement = document.createElement("sub");
let nameText = document.createTextNode(names);


priceElement.appendChild(priceText);
document.body.appendChild(priceElement);

nameElement.appendChild(nameText);
document.body.appendChild(nameElement);
