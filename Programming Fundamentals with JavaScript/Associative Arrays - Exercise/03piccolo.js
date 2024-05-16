function piccolo(input){

    let list = [];

   for(let el of input){

    let temp = el.split(", ");

    if(temp[0] === "IN"){

        list.push(temp[1])

    } 

    if(temp[0] === "OUT"){

    let index = list.indexOf(temp[1]);

    if(index !== -1){

       list.splice(index, 1)

    }

    }    

   }

   let numbers = {};

   for(let num of list){

    let carNum = Number(num.slice(2, 6));

    numbers[num] = carNum;

    //console.log(carNum)

   }

   if(numbers.length > 0){

    let entries = Object.entries(numbers);

   let sorted = entries.sort((a,b) => a[1] - b[1]);

   console.table(sorted)

   for(let auto in sorted){

    console.table(auto);

   }

   } else {

    console.log("Parking Lot is Empty")    

   }  

}

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'
])
