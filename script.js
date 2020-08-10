//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var newYorkScore = 0;
var losAngelesScore = 0;
var chicagoScore = 0;
var atlantaScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// variables for answer choice buttons for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", newYork);
q1a2.addEventListener("click", losAngeles);
q1a3.addEventListener("click", chicago);
q1a4.addEventListener("click", atlanta);

q2a1.addEventListener("click", newYork);
q2a2.addEventListener("click", losAngeles);
q2a3.addEventListener("click", chicago);
q2a4.addEventListener("click", atlanta);

q3a1.addEventListener("click", newYork);
q3a2.addEventListener("click", losAngeles);
q3a3.addEventListener("click", chicago);
q3a4.addEventListener("click", atlanta);

q4a1.addEventListener("click", newYork);
q4a2.addEventListener("click", losAngeles);
q4a3.addEventListener("click", chicago);
q4a4.addEventListener("click", atlanta);
//#TODO: Define quiz functions here
function newYork() {
  newYorkScore += 1;
  questionCount += 1;
  //alert("One Point to New York!");
  if (questionCount >= 4){
      updateResult();
  }
}

function losAngeles() {
  losAngelesScore += 1;
  questionCount += 1;
  //alert("One Point to Los Angeles");
  if (questionCount >= 4){
      updateResult();
  }
}

function chicago() {
  chicagoScore += 1;
  questionCount += 1;
  //alert("One Point to Chicago");
  if (questionCount >= 4){
      updateResult();
  }
}

function atlanta() {
  atlantaScore += 1;
  questionCount += 1;
  //alert("One Point to Atlanta");
  if (questionCount >= 4){
      updateResult();
  }
}

var result = document.getElementById("result");

function updateResult(){
 if (newYorkScore >= 2){
  result.innerHTML = "New York!";
 }
 else if(losAngelesScore >=2){
  result.innerHTML = "Los Angeles!";
 }
 else if(chicagoScore >=2){
  result.innerHTML = "Chicago";
 }
 else if (atlantaScore>= 2){
  result.innerHTML = "Atlanta";
 }
 else{
  result.innerHTML = "Hmm... you are tied between a few areas, try again later!";
 }
}
