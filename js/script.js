"use strict";

let count_cart = document.querySelector('.count_cart p');
let cart = document.querySelector('.icon-navigation-group li:last-child a');
let count = 12;
count_cart.innerHTML = count;
if(count==0){
    cart.style.background = "url(images/cart.png) 25px 5px / 30% no-repeat";
}
else cart.style.background = "url(images/cart-hover.png) 25px 5px / 30% no-repeat";