let newObject = {
    fullname: "Victoria Contreras",
    age: 23,
    faveColor: "Green",
    likesPizza: true,
}

let favoriteColor = newObject.faveColor;
//console.log(favoriteColor);

newObject.fullname = "Contreras"
//console.log(newObject.fullname);

delete newObject.likesPizza;

//console.log(newObject);

newObject.likesDesert = true;

console.log(newObject);
