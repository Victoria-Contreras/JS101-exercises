const myFriendsSchedule = {
    sunday: true,
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: true,
    friday: true,
    saturday: false,
}

const myMoneySchedule = {
    sunday: 50,
    monday: 5,
    tuesday: 30,
    wednesday: 10,
    thursday: 10,
    friday: 10,
    saturday: 30,
}

function canWeGoToTheMovies(day) {
    const friend = myFriendsSchedule[day];
    const myself = myMoneySchedule[day];

    if (friend == true && myself >= 30) {
        console.log("yes we can go");
    } else if (friend == false && myself < 30) {
        console.log("no we cannot go");
    } else {
        console.log("one of us can go");
    };
}

//should return yes
canWeGoToTheMovies("sunday");
//should return one can
canWeGoToTheMovies("monday");
//should return no
canWeGoToTheMovies("wednesday");
