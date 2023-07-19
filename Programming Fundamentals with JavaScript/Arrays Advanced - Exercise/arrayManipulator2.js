function arrayManipulator(numbers, commands){

    for(let command of commands){
        let temp = command.split(" ");

        if(temp[0] === "add"){
            let index = Number(temp[1]);
            let element = Number(temp[2]);

            numbers.splice(index, 0, element);            
        }else if(temp[0] === "addMany"){

            let index = Number(temp[1]);
            temp.splice(0,2);
            let numsToAdd = temp.map(Number);
            numbers.splice(index, 0, ...numsToAdd);          

        }
    }

    console.log(numbers)

    
}

arrayManipulator(
    [1, 2, 3, 4, 5],
[
 //'add 1 8',
 "addMany 3 9 8 7 6 5",
  "print"])
