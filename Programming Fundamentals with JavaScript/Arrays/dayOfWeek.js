function dayOfWeek(day){

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = 0

    if(day >= 1 && day <= 7){
        i = day;
        currentDay = days[i-1];
        console.log(currentDay)
    } else {

        console.log('Invalid day!')

    }

    

}

dayOfWeek(11)
