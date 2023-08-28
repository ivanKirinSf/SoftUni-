function memoryGame (input) {

    let arr = input.shift().split(" ");
    let listIndexes = input;
    let firstCouple = listIndexes.shift();
    let moves = 0;
    //let hit = false;
    
    while(firstCouple !== "end"){

        moves += 1;
        
        let temp = firstCouple.split(" ").map(Number);

        let index1 = temp.shift();
        let index2 = temp.shift();

        if(index1 === index2 || index1 < 0 || index1 >= arr.length || index2 >= arr.length || index2 < 0){
            //hit = false;
            let mid = Math.floor(arr.length / 2);
            let el = `-${moves}a`;
            arr.splice(mid, 0, el);
            arr.splice(mid+1, 0, el);

            

            //console.log(el)
            //console.log(`-${moves}`)
            console.log("Invalid input! Adding additional elements to the board")
        }else {

            let num1 = arr[index1];
            let num2 = arr[index2];

            if(num1 === num2){
                //hit = true;
                if(index1 === 0){
                    arr.splice(0,1);
                }else{
                    arr.splice(index1,1); 
                }
                
                if(index2 === 0){
                    arr.splice(0,1);
                }else{
                    arr.splice(index2-1,1); 
                }
                
                console.log(`Congrats! You have found matching elements - ${num1}!`)
            }else{
                //hit = false;
                console.log("Try again!")
            }

            //console.log(num1);
            //console.log(num2);

        }

        if(arr.length === 0){
            return console.log(`You have won in ${moves} turns!`)
        }

        //console.log(index1);
        //console.log(index2);
        //moves += 1;

        firstCouple = listIndexes.shift();
        
    }

    if(firstCouple === "end"){
        console.log("Sorry you lose :(" + "\n"+
            `${arr.join(" ")}`)
    }




    //console.log(arr)

}

memoryGame ( [
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )
