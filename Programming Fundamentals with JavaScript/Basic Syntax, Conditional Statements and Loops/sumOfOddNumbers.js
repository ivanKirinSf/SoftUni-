function solve(n){
    let num = 0;
    for( let i =1; i<n*2; i++){
        
        if(i % 2 !== 0 ){
            let current = i;
            num += current;
            console.log(i)
            
        }

        
    }

    console.log(`Sum: ${num}`)
}




solve(5)
solve(3)
