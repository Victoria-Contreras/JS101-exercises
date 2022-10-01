function marinaraSauce(cookName) {
    const two = 2;
    const oneFourth = "1/4";

    console.log(`Hey, ` + cookName + `! This is my marinara sauce recipe!`)
    console.log("-Heat a medium-large saucepan over medium heat.");
    console.log("-Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes.");
    console.log("-Add " + oneFourth + " cup water, " + two + " cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log("-Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log("-Stir in " + oneFourth + " cup roughly chopped fresh basil, salt and pepper as needed.");
}

marinaraSauce("Chef Wonderful");

// JS 101 exercises 1-14
function makeANumber() {
    const myNum = 12;
    return myNum;
}

function makeAnInteger() {
    const myInt = 7;
    return myInt;
}

function makeAFloat() {
    const myFloat = 2.1;
    return myFloat;
}

function makeZero() {
    const zilch = 0
    return zilch;
}

// is it supposed to throw an error? Nope needed to be defined with let. 
//makes sense bc the program was probably expecting that ill reassign the value later.
function makeNothing() {
    let huh;
    return huh;
}
console.log(makeNothing());


function myBoolean() {
    const makeBoolean = false;
    return makeBoolean;
}

function makeTrue() {
    const yep = true;
    return yep;
}

function makeFalse() {
    const nope = fale;
    return nope;
}

function makeNull() {
    const nothingMuch = null;
    return nothingMuch;
}
console.log(makeNull());

function helloWorld() {
    return "Hello World";
}

function helloName(name) {
    return `Hello ${name}!`;
}

function abstractLength() {
    const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
        'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
        'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
        'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'

    return tarPitAbstract.length;
}
//console.log(abstractLength());    

function makeLoud() {
    const chorus = "Who let the dogs out?"
    return chorus.toUpperCase();
}

function makeQuiet(str) {
    return str.toLowerCase();
}
//console.log(makeQuiet("HAPPY"));

// JS 101 - Math exercises 15 -20
function add99(num) {
    return num + 99;
}
//console.log(add99(100));

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}
console.log("The remainder of 5 divided by 4 is " + mod(5, 4));

//JS 101 - Arrays exercises 21-27
function threeFruits() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    return fruits;
}

function multipleTypes() {
    const diverseArray = ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null]
    return diverseArray;
}

function indexAccess() {
    const people = ["Jim", "Pam", "Michael", "Dwight", "Toby", "Stanley"]
    return people[2];
}

function useLength() {
    const arr = ["a", "b", "c"]
    return arr.length;
}
console.log("the array length is " + useLength());

function usePush() {
    let arr = ["a", "b", "c"]
    arr.push("d");
    return arr;
}
console.log(usePush());

function useIndexOf(str) {
    let arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T']
    return arr.indexOf(str);
}
console.log(useIndexOf("T"));
//The spelling matters! its case sensitive.
console.log(useIndexOf("t"));
// returns -1 meaning its not there 

function useJoin() {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f']
    return arr.join("-");
}
console.log("Joined array is " + useJoin());


//JS 101 - Objects exercises 
function threeNumbers() {
    const numbers = { numberOne: 1, numberTwo: 2, numberThree: 3 }
    return numbers;
}
console.log(threeNumbers());


function manyTypes() {
    const diverseObject = { name: 'banana', count: 42, isDelicious: true }
    return diverseObject;
}
console.log(manyTypes());

function keyAccess() {
    const bestFruit = { name: 'banana', count: 42, isDelicious: true }
    return bestFruit.name;
}
console.log(keyAccess());

function addKey() {
    const bestFruit = { name: 'banana', count: 42 }
    bestFruit.color = 'Yellow';
    return bestFruit;
}
console.log(addKey());

