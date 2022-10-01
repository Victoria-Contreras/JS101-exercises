const aboutMe = ["Victoria", "Contreras", "JavaScript"]
const date = [9, 30, 2022]

function introduce(strArr, numArr) {
    aboutMe[3] = "green";
    date[3] = 2;
    console.log(`Hello! My name is ${strArr[0]} ${strArr[1]}. The date is ${numArr[0]}/${numArr[1]}/${numArr[2]}. n/
    My favorite color is ${strArr[3]}. I have been learning ${strArr[2]} for ${numArr[3]} weeks. `);
    aboutMe[2] = "CSS"
    console.log(`Later I will learn ${strArr[2]}`)

}

//introduce(aboutMe, date);

// What would be the length of the string array?
//      aboutMe.length would return 3 


const languages = ["HTML", "CSS", "JavaScript", "React", "Bananas"]

function imLearning(arr) {
    arr.pop();
    arr.push("Node");

    introduce(aboutMe, date);

    console.log(`Im learning ${arr.join(", ").replace(/, ([^,]*)$/, ', and $1')}`);
}
imLearning(languages);
