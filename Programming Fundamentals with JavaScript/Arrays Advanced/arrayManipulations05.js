function arrayManipulations(input){

    let arr = input.shift().split(" ");

    for(let i = 0; i<input.length; i++){
        
        let temp = input[i].split(" ");

        let command = temp.shift();

        let value = temp

        

        if(command === "Add"){
            let num = Number(value.shift()); 
            
            //console.log(num)

            arr.push(num);
            
        }else if(command === "Remove"){

            let num = value.shift();

            while(arr.indexOf(num) !== -1){

                let index = arr.indexOf(num)

            if(index !== -1){

                arr.splice(index, 1)
            }

            }       
            
        }else if(command === "RemoveAt"){
            let index = Number(value.shift());

            arr.splice(index, 1)

            //console.log(arr)
        }else if(command === "Insert"){
            let num = value.shift();
            let index = Number(value.shift());

            arr.splice(index, 0, num);

            //console.log(arr)
        }        

    }

    console.log(arr.join(" "))

}

arrayManipulations([
'6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'
]
)
