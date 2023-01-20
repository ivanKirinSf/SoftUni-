function triangleOfNumbers (n){
 for ( let row = 1; row <= n; row++){
    let currentNum = "";
    for(let col = 0; col<row; col++){
        currentNum += row + " ";
    }

    console.log(currentNum)
 }
}

triangleOfNumbers ( 3)
console.log("------------------------")
triangleOfNumbers ( 5)
console.log("------------------------")
triangleOfNumbers ( 8)
