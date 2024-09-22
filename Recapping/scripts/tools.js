let input1 = document.getElementById("box1");
let input2 = document.getElementById("box2");
let input3 = document.getElementById("box3");
let input4 = document.getElementById("box4");
let input5 = document.getElementById("box5");
let input6 = document.getElementById("box6");
let input7 = document.getElementById("box7");
let input8 = document.getElementById("box8");
let input9 = document.getElementById("box9");
let inputTip = document.getElementById("input tip");
let gameOutcome = document.getElementById("game outcome");

function textFormat () {
  if(input1.value.length >1){
    inputTip.textContext = "Please only input O or X into the field";
  } else {
    inputTip.textContent = "Thats fine";
  }
}

function gameResult (){
    let crossesRegExp = /X/i;
    if(input1.value.match(crossesRegExp));{
    gameOutcome.textContent = "Thats an X"; 
    }
    console.log(input1.value, input2.value); 
    }

input1.addEventListener('blur', textFormat); 
input2.addEventListener('blur', gameResult); 
input6.addEventListener('blur', gameResult); 




function addNumbers (firstNumber, secondNumber) {
    let total = firstNumber * secondNumber
    let relay = document.getElementById("operator");
    relay.textContent = total; 
}

let displayTotal = addNumbers (56,145); 

function animalAges (dog, cat) {
    let dogAge = dog *6;
    dogAge.textContent = document.getElementById("dog age")
    let catAge = cat *7;
    catAge.textContent = document.getElementById("cat age");
    console.log(dogAge, catAge);
    console.log(dog, cat);
}

animalAges(4,6); 
animalAges(10,15); 

function conditionalTest(int) {
    if(int>0){
    let result = "positive";
    console.log(result);
    }
    else if(int<0){
    let result = "negative";
    console.log(result);
    }
}
