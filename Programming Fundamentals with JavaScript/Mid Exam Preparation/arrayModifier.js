function arrayModifier(input){

 let numbers = input.shift().split(" ").map(Number);
 
 let commands = input;

 //console.log(commands[0])

 for(let i = 0 ; i < commands.length; i++){
    
    let temp = commands[i].split(" ");

    let command = temp.shift();

    if(command === "swap"){

      let index1 = Number(temp.shift());

      let index2 = Number(temp.shift());

      let el1 = numbers[index1]; 
      
      let el2 = numbers[index2];

      numbers.splice(index1, 1, el2);

      numbers.splice(index2, 1, el1);     

      //console.log(el2)

    }else if(command === "multiply"){

      let index1 = Number(temp.shift());

      let index2 = Number(temp.shift());

      let el1 = Number(numbers[index1]);

      let el2 = Number(numbers[index2]);

      let res = el1*el2;

      numbers.splice(index1, 1, res)

    }else if(command === "decrease"){

       for(let a = 0; a < numbers.length; a++){

           let tempEl = Number(numbers[a]);

           let res = tempEl - 1;
           
           numbers.splice(a, 1, res)
           
       }

    }else if(command === "end"){

      console.log(numbers.join(", "))

    }

    //console.log(numbers)
 }

 //console.log(numbers)

}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])
