let toDoList = [
    "Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom",
    "Take Out Trash"
]

const numberOfChores = toDoList.length;

/*
for (let i=0; i < numberOfChores; i++ ) {
    toDoList.pop();
}

console.log(toDoList);
*/

for (let i = numberOfChores; i > 2; i--) {
    toDoList.pop();
}

console.log(toDoList);

