//nameSpace
// const decide = {};


//document ready

document.addEventListener("DOMContentLoaded", function (event) {
  init()
});

//init function

const init = () => {
  answerClick()
  proClick()
  // addFields();

}

//global variables 

// const getById = id => {
//   document.getElementById(id)
// }

//event click listener

const answerClick = () => {
  document.getElementById("decideButton").addEventListener("click", function (event) {
  preventDefault()
  getPro()
  revealAnswer()
}); 
}

//prevent default
const preventDefault = () => {
  event.preventDefault()
}

//reveal answer
const revealAnswer = () => {
  const question = document.getElementById('question').value

  document.getElementById("answer").innerText = "On the matter of " + question + " you tallied " + "number" + " points in the pro column and " + "number" + " points in the con column, so you should";
}

//tally the numbers in the pro column

const getPro = () => {
  const number = document.getElementById('proNum').value
  console.log(number)
}


//add inputs to the form when the user hits enter on pro

//event listener for pro column

const proClick = () => {
  document.getElementById('addPro').addEventListener("click", function (event) {
    preventDefault()
    addProDiv()
  });
}

const addProDiv = () => {
  const newDiv = document.createElement("div");
  const currentDiv = document.getElementById("pro");
  const parentDiv = document.getElementById("decideForm");
  parentDiv.insertBefore(newDiv, currentDiv); 
  newDiv.id = "pro3";
}

//add inputs to the form when the user hits enter on con
//tally pro numbers on click

//tally con numbers on click
//evaluate which is higher and print answer
