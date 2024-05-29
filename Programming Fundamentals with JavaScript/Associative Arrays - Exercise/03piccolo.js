function piccolo(input) {

    let parking = {};

    for (let el of input) {

        let commnad = el.split(", ");

        //console.log(commnad);
        let action = commnad[0];

        let carNum = commnad[1];

        //parking[carNum] = action;

        //parking[carNum] = carNum;

        if(action === "IN"){

            parking[carNum] = "parked"

        }else{

            parking[carNum] = "OUT"

        }
        
    }

    console.table(parking);

    let sorted = Object.entries(parking).filter(([carNum, action] => action === "parked"));

    console.log(sorted)

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
