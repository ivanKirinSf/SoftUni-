function dayOfWeek(input){

 let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 let day = Number(input);

 if( day >= 1 && day <= 7){
    console.log(days[day-1])
 }else {

    console.log(`Invalid day!`)

 }

}

dayOfWeek(7)
