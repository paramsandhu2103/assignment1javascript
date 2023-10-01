// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Variables for pre-defined arrays
const subjects = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher','The elephant','The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like','kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking','a fat'];
const objects = ['goat', 'monkey', 'fish', 'cow', 'frog','bug','worm'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass','in my shoes'];

// Variables for count to grab array elements
let textCompleted='';
let subject = '';
let verb = '';
let adjective = '';
let object = ''
let place = '';

/* Functions
-------------------------------------------------- */
function getRandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function noun1_on_click() {
    // variable to get array element and displaying it
	subject = getRandomWord(subjects);
	document.getElementById("choosenNoun1").textContent = subject;
    // if-else to change count setting
}

function verb_on_click() {
    verb = getRandomWord(verbs);
	document.getElementById("choosenVerb").textContent = verb;
}

function adjective_on_click() {
   adjective = getRandomWord(adjectives);
	document.getElementById("choosenAdjective").textContent = adjective;
}
function noun2_on_click() {
    object = getRandomWord(objects);
	document.getElementById("choosenNoun2").textContent =object ;
}

function setting_on_click() {
     place = getRandomWord(places);
	document.getElementById("choosenSetting").textContent =place ;
}

// concatenate the user story and display
function playback_on_click() {

   textCompleted = `${subject} ${verb} ${adjective} ${object} ${place}`; 
document.getElementById("story").textContent =textCompleted ;
document.getElementById("studentId").textContent ="Student Name: Parampreet singh Student ID: 200530599" ;

}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
subject = getRandomWord(subjects);
verb = getRandomWord(verbs);
adjective = getRandomWord(adjectives);
object = getRandomWord(objects);
place = getRandomWord(places);
 textCompleted = `${subject} ${verb} ${adjective} ${object} ${place}`; 
document.getElementById("story").textContent =textCompleted ;
document.getElementById("studentId").textContent ="Student Name: Parampreet singh Student ID: 200530599" ;

}

/* Event Listeners
-------------------------------------------------- */
