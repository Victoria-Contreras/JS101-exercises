const aboutMe = {
    firstName: "Victoria",
    lastName: "Contreras",
    programLang: "Java Script",
    currentDay: 29,
    favColor: "green",
}
/*
function introduceYourself(obj) {
    console.log(`Hi! My name is ${obj.firstName}. Im learning ${obj.programLang}. My favorite color is ${obj.favColor} `);
}

introduceYourself(aboutMe);
*/

aboutMe.currentMonth = "September";

aboutMe.currentYear = 2022;

function introduceAgain(obj) {
    console.log(`Hi my name is ${obj.firstName} ${obj.lastName}. The date is ${obj.currentDay} of ${obj.currentMonth}. I am currently learning how to program in ${obj.programLang}`)
    delete aboutMe.favColor;
}
introduceAgain(aboutMe);

aboutMe.programLang = "CSS";
console.log(`Im learning ${aboutMe.programLang}`);

console.log(aboutMe);

// What is the value of currentMonth key? 
//      "September"

//Using obj variable created at the beginning, bracket notation and the string variable with a value of "firstName" you made at the begin of the script what would the output be if we combined them?
//      You can access the same key value pairs using bracket notation or dot notation
//      aboutMe["firstName"] is the same as aboutMe.firstName both return "Victoria"

//What would be the output of the random key/value pair that we deleted inside of the function?
//      undefined 