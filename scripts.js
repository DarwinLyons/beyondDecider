//document ready

document.addEventListener("DOMContentLoaded", function (event) {
  init()
});

//init function

const init = () => {
  answerClick()
  proClick()
  conClick()
}

//prevent default
const preventDefault = () => {
  event.preventDefault()
}

//event click listener for the answer

const answerClick = () => {
  document.getElementById("decideButton").addEventListener("click", function (event) {
  preventDefault()
  revealAnswer()
  getPro()
  getCon()
}); 
}

//reveal answer
const revealAnswer = () => {
  const question = document.getElementById('question').value

  document.getElementById("answer").innerText = "On the matter of " + question + " you tallied " + finalPro + " points in the pro column and " + "number" + " points in the con column, so you should";
}

//get the numbers in the pro column

const talliedPro = []
const finalPro = talliedPro[0]

const getPro = () => {
  const proValues = []
  const parentElement = document.getElementById('proContainer')
  const proClasses = parentElement.getElementsByClassName('proNum')

  for (let i = 0; i < proClasses.length; i++) {
    const element = proClasses[i].value;
    const proIntegers = parseInt(element)
    proValues.push(proIntegers)
  }
  const addedValues = proValues.reduce((a, b) => a + b, 0)
  talliedPro.push(addedValues)
}

//get the numbers in the con column

const talliedCon = []

const getCon = () => {
  const conValues = []
  const parentElement = document.getElementById('conContainer')
  const conClasses = parentElement.getElementsByClassName('conNum')

  for (let i = 0; i < conClasses.length; i++) {
    const element = conClasses[i].value;
    const conIntegers = parseInt(element)
    conValues.push(conIntegers)
  }
  const addedValues = conValues.reduce((a, b) => a + b, 0)
  talliedCon.push(addedValues)
}




//add as many pro or con options as the user wants

const addElement = (cloneID, container) => {
  const item = document.getElementById(cloneID)
  const clone = item.cloneNode(true)
  document.getElementById(container).appendChild(clone);
}

//event listener for pro column

const proClick = () => {
  document.getElementById('addPro').addEventListener("click", function (event) {
    preventDefault()
    addElement("pro", "proContainer")
  
  });

}

//event listener for Con

const conClick = () => {
  document.getElementById('addCon').addEventListener("click", function (event) {
    preventDefault()
    addElement("con", "conContainer")

  });

}


//tally pro numbers on click

//tally con numbers on click
//evaluate which is higher and print answer
