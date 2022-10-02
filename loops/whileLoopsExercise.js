const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const myFriendsSchedule = {
    Sunday: true,
    Monday: true,
    Tuesday: false,
    Wednesday: false,
    Thursday: true,
    Friday: true,
    Saturday: true,
}

const myMoneySchedule = {
    Sunday: 50,
    Monday: 5,
    Tuesday: 30,
    Wednesday: 10,
    Thursday: 10,
    Friday: 10,
    Saturday: 30,
}

function canWeGoToTheMovies() {
    let whatDaysCanWeGoToTheMovies = []
    let dayOfWeek = ""
    let i = 0;
    while (i < days_of_week.length) {
        dayOfWeek = `${days_of_week[i]}`
        if (myFriendsSchedule[dayOfWeek] && myMoneySchedule[dayOfWeek] >= 30) {
            whatDaysCanWeGoToTheMovies.push(dayOfWeek);
            console.log(`On ${dayOfWeek}? Yes, lets go to the movies!!`)
        } else if (!myFriendsSchedule[dayOfWeek] && myMoneySchedule[dayOfWeek] < 30) {
            console.log(`On ${dayOfWeek}? We can't go to the movies :(`)
        } else {
            console.log(`On ${dayOfWeek}?  One of us can go to the movies`)
        }

        i++;
    }
    console.log(`We can go to the movies together on ${whatDaysCanWeGoToTheMovies.join(", ")}`);

}

canWeGoToTheMovies()
