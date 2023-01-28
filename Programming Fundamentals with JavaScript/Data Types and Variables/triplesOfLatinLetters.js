function solve(num){
    for(let i = 0; i<num; i++){
        for(let j = 0; j < num; j++){
            for(let k = 0; k<num; k++){
                char1 = String.fromCharCode('a'.charCodeAt(0)+i);
                char2 = String.fromCharCode('a'.charCodeAt(0)+j);
                char3 = String.fromCharCode('a'.charCodeAt(0)+k);
                console.log(`${char1}${char2}${char3}`) 
            }
        }

        
    }

}

solve(3)
