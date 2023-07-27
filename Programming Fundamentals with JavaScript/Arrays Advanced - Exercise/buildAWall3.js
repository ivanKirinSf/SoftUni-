function buildAWall(input){

    let arr = input;
    let num = arr.length
    let newArr = [];
    for(let i = 0; i<num; i++){
        newArr.push(30)
    }

    //console.log(newArr)
    
    let days = 0;
    let concretePerDay = 0;
    let arrConcrete = [];
    let concreteTotal = 0;
    let cost = 0;

    index = 0;
    while(arr.toString() !== newArr.toString()){

        for(let i = 0; i<arr.length; i++){
            let temp = Number(arr[i]);

            if(temp < 30){
                arr.splice(i,1, temp+1);
                concretePerDay += 195;
            }     

        }

        arrConcrete.push(concretePerDay);        

        concreteTotal += concretePerDay;

        concretePerDay = 0;

        days+= 1;

        index++;

        cost = concreteTotal*1900       

    }

    console.log(arrConcrete.join(", "))
    console.log(`${cost} pesos`)

    //console.log(arr)
    //console.log(days)    

}

buildAWall([17, 22, 17, 19, 17])
