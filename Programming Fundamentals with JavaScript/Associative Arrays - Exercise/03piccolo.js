function piccolo(input){

   let parking = {};

   for(let item of input){

    let commands = item.split(", ");

    let [action, carNum] = commands;

    if(action === "IN"){


        parking[carNum] = 'parked';

    }else if(action === "OUT"){

        parking[carNum] = 'out';
    }

    let sorted = parking.filter(el => el {
        if(parking[carNum] === "parked" ){

            return parking[carNum];
        }
    })

    console.log(commands)

   }

}

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
])
