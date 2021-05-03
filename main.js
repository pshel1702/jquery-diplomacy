"use strict";

/******* Functions & event handlers *******/

function changeColor() {
  const colorChangeEls = $('.color-change');

  for (const el of colorChangeEls) {
    $(el).css('color','red');
  }
}

function validateNumber(evt) {
  evt.preventDefault();

  const numberInput = $('input[name="number"]');
  const userNum = parseInt(numberInput.val(), 10);  // typecast to num

  const formFeedback = $('#formFeedback');
  if (!userNum) {
    formFeedback.text('Please enter a number');
  } else if (userNum>10){
    formFeedback.text('Please enter a number smaller than 10!')
  } 
  else {
    formFeedback.text('You are good to go!');
  }
}


/******* Attach event handlers *******/

$('.color-changer').on('click', changeColor);
$('.number-form').on('submit', validateNumber);

