function meetings(input){

    let meeting = {};

    input.forEach( e => {

         let [day, person] = e.split(" ");         

         if(!meeting.hasOwnProperty(day)){

            meeting[day] = person;

            console.log(`Scheduled for ${day}`);            

         }else{

            console.log(`Conflict on ${day}!`);

         }

    })

    let entries = Object.entries(meeting);

    for(let el of entries){

        console.log(`${el[0]} -> ${el[1]}`)
    }    

}

meetings([
'Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'
])
