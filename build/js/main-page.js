"use strict";

//show input on search_icon click
const searchIcon = document.querySelector('.search__icon');
const searchInput = document.querySelector('.search__input');


if (window.matchMedia("(max-width: 600px)").matches){
    searchIcon.onclick = function(){
    	if(searchInput.style.display == 'none'){
    		searchInput.style.display = 'inline-block';
    	} else{
    		searchInput.style.display = 'none';
    	}
    }
}

// open close modal

const modal = document.querySelector('.overlay');
const orderBtn = document.querySelector('.order-btn');
const closeModal = document.querySelector('.popup__close');

orderBtn.onclick = function(){
	modal.style.visibility = 'visible';
	closeModal.onclick = function(){
		modal.style.visibility = 'hidden';
	}
	setTimeout(function(){
		modal.style.visibility = 'hidden';
	}, 3000)
}

// check radio on cart-page-stage-2 .delivery-option

// const deliveryOption = document.querySelector('.delivery-option');
// const deliveryRadio = deliveryOption.querySelectorAll('input[type=radio]')

// deliveryOption.onclick = function(){
// 	deliveryRadio.checked = true;
// }

// const paymentMethod = document.querySelector('.payment-method');
// const paymentRadio = deliveryOption.querySelectorAll('input[type=radio]')

// paymentMethod.onclick = function(){
// 	paymentRadio.checked = true;
// }