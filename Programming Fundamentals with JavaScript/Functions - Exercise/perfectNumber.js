function perfectNumber(n){

let num = Number(n);
let text = perfectArr(num);
if(text == false){
    console.log("It's not so perfect.")
}else {
let totalSum = sum(text);
let res = isEqual(totalSum, num);

console.log(res) 
}


function perfectArr(a){
arr = [];


index = 1;
while(index < num){

    

    let temp = Number(index);
    if(num % temp === 0){
        
       arr.push(temp);

    }  

    index++;

   
}

if(arr.length > 1){
   // console.log(arr)
    return arr
   }else {
    return false
   }

}


function sum(input){

    let sum = 0;
    
    for(let i = 0; i<input.length; i++){
        let temp = Number(input[i]);

        sum += temp;


    }

    return sum;
}


function isEqual(a,b){
    if(a === b){
        return ("We have a perfect number!")
    } else {
        return ("It's not so perfect.")
    }
}





}

perfectNumber(6)
