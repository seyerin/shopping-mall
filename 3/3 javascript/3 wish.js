let names = localStorage.getItem("product_name");
let price = localStorage.getItem("product_price");
let img = localStorage.getItem("product_img");



let price_element = document.createElement("p");
let price_text = document.createTextNode(price);
let name_element = document.createElement("sub");
let name_text = document.createTextNode(names);


price_element.appendChild(price_text);
document.body.appendChild(price_element);

name_element.appendChild(name_text);
document.body.appendChild(name_element);
