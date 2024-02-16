function arrayModifier(input){

 let numbers = input.shift().split(" ").map(Number);
 
 let commands = input;

 //console.log(commands[0])

 for(let i = 0 ; i < commands.length; i++){
    
    let temp = commands[i].split(" ");

    console.log(temp)
 }

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
