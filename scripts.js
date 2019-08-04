//nameSpace
// const decide = {};


//document ready

document.addEventListener("DOMContentLoaded", function (event) {
  init()
});

//init function

const init = () => {
  listenClick()
  // addFields();

}

//event click listener

const listenClick = () => {
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
  const proNum = document.getElementById('proNum').value
  console.log('proNum')
}


//add inputs to the form when the user hits enter on pro

// 

// function addFields() {
//   // Number of inputs to create
//   const number = document.getElementById("pro").value;
//   // Container <div> where dynamic content will be placed
//   var container = document.getElementById("decideForm");
 
//   for (i = 0; i < number; i++) {
//     // Append a node with a random text
//     decideForm.appendChild(document.createTextNode("Member " + (i + 1)));
//     // Create an <input> element, set its type and name attributes
//     const input = document.createElement("input");
//     input.type = "text";
//     input.name = "member" + i;
//     container.appendChild(input);
//     // Append a line break 
//     container.appendChild(document.createElement("br"));
//   }
// }

//add inputs to the form when the user hits enter on con
//tally pro numbers on click

//tally con numbers on click
//evaluate which is higher and print answer
