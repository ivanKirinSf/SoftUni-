function meetings(input){

    let meetings = {};

    input.forEach(info => {

        let [day, name] = info.split(" ");

        //meetings[day] = name;

        if(!meetings.hasOwnProperty(day)){

            meetings[day] = name;

            console.log(`Scheduled for ${day}`);

        }else{

            console.log(`Conflict on ${day}`)

        }
    })

    let objInfo = Object.entries(meetings);

    for (let el of objInfo) {

        console.log(`${el[0]} -> ${el[1]}`);

    }

}

meetings([
'Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
])
