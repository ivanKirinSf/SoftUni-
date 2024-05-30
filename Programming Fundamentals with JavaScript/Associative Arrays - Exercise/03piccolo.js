function picolo(input){

    let parking = {};

    for(let el of input){

        let temp = el.split(", ");

        //console.log(temp);

        let action = temp[0];

        let carNum = temp[1];

        if(action === "IN"){

            parking[carNum] = "parked";

        }else {

            parking[carNum] = "out";
        }

    }

let sorted = Object.entries(parking).filter(([carNum, status]) => {

           if(status === "parked"){

              return carNum

           }

    }).map(el => el[0]).sort((a,b) => a.localeCompare(b));


    if(sorted.length > 0){

        for(let el of sorted){

            console.log(el)
    
        }
    }else {

        console.log(`Parking Lot is Empty`)

    }
}

picolo([
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
