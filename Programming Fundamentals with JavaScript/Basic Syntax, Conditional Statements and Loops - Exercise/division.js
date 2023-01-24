function division (num){
   let divideNum = 0;
   let maxNum = 0;



   if(num % 2 === 0){
    
    divide = 2;
    if(divide > maxNum){
        maxNum = divide;
    }
   } if (num % 3 === 0){
    
    divide = 3;
    if(divide > maxNum){
        maxNum = divide;
    }
   } if (num % 6 === 0){
    
    divide = 6;
    if(divide > maxNum){
        maxNum = divide;
    }
   } if (num % 7 === 0){
    
    divide = 7;
    if(divide > maxNum){
        maxNum = divide;
    }
   } if (num % 10 === 0){
    
    divide = 10;
    if(divide > maxNum){
        maxNum = divide;
    }
   } 
   

if(maxNum > 0){
console.log(`The number is divisible by ${maxNum}`)
} else {
    console.log(`Not divisible`)
}

}



division(30)
division(15)
division(12)
division(1643)
