"use strict";

const Html = {
    element: function(id) {
        return document.getElementById(id) || document.getElementsByClassName(id)[0];
    },
    elements: function(className) {
        return document.getElementsByClassName(className);
    }
};

// model
const cart = (function(){
    // do something
    let cartItems = 0;

    return {
        increment: function() {
            cartItems++;
        },
        decrement: function() {
            cartItems--;
        },
        reset: function() {
            cartItems = 0;
        },
        set: function(value) {
            cartItems = parseInt(value) || 0;
        },
        get: function() {
            return cartItems;
        }
    };
})();

// view

function incrementHandler() {
    cart.increment();
    // render
    Html.element('counter-value').innerText = cart.get();
}
function decrementHandler() {
    if(cart.get() <= 1) {
        Html.element('counter-value').innerText = cart.get();
        return;
    }

    cart.decrement();
    Html.element('counter-value').innerText = cart.get();
}

function initCart() {
    const countInCart = Html.element('counter-value').innerText;
    cart.set(countInCart);
}

initCart();

// events
Html.element('cartIncrement').addEventListener('click', incrementHandler);
Html.element('cartDecrement').addEventListener('click', decrementHandler);
