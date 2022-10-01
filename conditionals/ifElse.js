let toDoList = [
    "Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let roommatesList = [
    "Dust",
    "Take Trash",
]


function checkChores(arr) {
    const chores = arr.length;

    if (chores < 3) {
        console.log("You can go play some video games!");
    } else {
        console.log("No games! Do some chores");
    };
};

console.log(checkChores(toDoList));
console.log(checkChores(roommatesList));
