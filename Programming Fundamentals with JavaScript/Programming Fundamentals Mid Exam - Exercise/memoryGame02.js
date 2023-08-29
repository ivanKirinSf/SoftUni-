function memoryGame(input){

    let sequinceOfElements = input.shift().split(" ");
    let indexes = input;
    //let firstIndexes = input[0];
    let moves = 0;
    //console.log(firstIndexes)
    while(input[0] !== "end"){
        moves += 1;
        let temp = input[0].split(" ");
        let index1 = Number(temp.shift());
        let index2 = Number(temp.shift());

        if(index1 === index2 || 
           index1 < 0 || index1 > sequinceOfElements.length-1 ||
           index2 < 0 || index2 > sequinceOfElements.length -1){

            let mid = Math.floor(sequinceOfElements.length / 2);
            sequinceOfElements.splice(mid, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
            //console.log(mid)
           }else{

            let el1 = sequinceOfElements[index1];
            let el2 = sequinceOfElements[index2];
 
            if(el1 === el2){
             sequinceOfElements.splice(Math.min(index1,index2), 1);
             sequinceOfElements.splice(Math.max(index1,index2)-1, 1);
             console.log(`Congrats! You have found matching elements - ${el1}!`)
            }else{
             console.log("Try again!");
            }

           }           

           if(sequinceOfElements.length === 0){

            return console.log(`You have won in ${moves} turns!`)

           }

        //console.log(sequinceOfElements)


        input.shift();

    }
    
    console.log("Sorry you lose :("+`\n`+`${sequinceOfElements.join(" ")}`)

    //console.log(sequinceOfElements)

}
