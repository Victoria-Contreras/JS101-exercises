const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

function canWeGoToTheMovies() {
    let whatDaysCanWeGoToTheMovies = []
    let dayOfWeek = ""
    for (let i = 0; i < days_of_week.length; i++) {
        dayOfWeek = `${days_of_week[i]}`
        //console.log(dayOfWeek);
        console.log(myFriendsSchedule[i])
        console.log(myFriendsSchedule[dayOfWeek])

        //testing: when i try to reference the objects it comes back undefined. meaning all the loops return the last else condition
        if(myFriendsSchedule[dayOfWeek] == true && myMoneySchedule[dayOfWeek] >= 30){
            whatDaysCanWeGoToTheMovies.push(dayOfWeek);
            console.log(`On ${dayOfWeek}? Yes, lets go to the movies!!`)
        }else if(myFriendsSchedule[dayOfWeek] == false && myMoneySchedule[dayOfWeek] < 30){
            console.log(`On ${dayOfWeek}? We can't go to the movies :(`)
        }else{
            console.log(`On ${dayOfWeek}?  One of us can go to the movies`)
        }
        
    }
    //console.log(`These are the days we can go to the movies: ${whatDaysCanWeGoToTheMovies.join(", ")}`)

}

canWeGoToTheMovies()
