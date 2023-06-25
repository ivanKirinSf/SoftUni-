function train(input){

    let arr = input.shift().split(" ");

    let capacity = input.shift();

    

    for(let i = 0; i < input.length; i++){

         let temp = input[i].split(" ");

         if(temp.length > 1){

                             
            let command = temp[0];            
            let amount = Number(temp[1]);

            if(command === "Add"){
                arr.push(amount)
            }
            
         }

         if(temp.length == 1){
            let amount = Number(temp[0]);

            for(let k = 0; k<arr.length; k++){
                let tempK = Number(arr[k]);
                
                if(tempK + amount <= capacity){

                    let sum = tempK + amount;

                    arr.splice(k,1,sum);

                    break;

                }
               
            }
         }



    }



    console.log(arr.join(" "))

   

}
