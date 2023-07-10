function buildAWall(arr){

    let minHeigh = 0;
    let minNum = Number.MAX_SAFE_INTEGER
    let concrete = [];

   for(let i = 0; i<arr.length; i++){
    
    let temp = Number(arr[i]);

    minHeigh = minNum
    
    if(temp < minNum){
        minNum = temp
        if(minNum < minHeigh){
            minHeigh = minNum;
        }
    }
    
   }

   let daysLeft = 30-minHeigh;

   //console.log(daysLeft)

   index = 1;
   while(index <= daysLeft){

    let concreteVolume = 0;

    for(let k = 0 ; k <= arr.length; k++){
        let temp = Number(arr[k]);
        let newTemp = arr[k] + index;
        

        if(newTemp <= 30){

            concreteVolume += 195;

        }
    }

    concrete.push(concreteVolume)

      index++
   }

   console.log(concrete.join(", "))

   let sum = 0;
   

   for(let c = 0; c < concrete.length; c++){

    let tempC = Number(concrete[c]);

    sum += tempC; 

   }

   let totalPrice = sum*1900;

   console.log(`${totalPrice} pesos`)

}
