function sumNumbers(input){

    let n = Number(input[0]);
    let sum = 0;

    let index = 1;
    while(sum < n){
        let current = Number(input[index]);
        sum += current;
        index++; 
        
    }

    console.log(sum)
   
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])
