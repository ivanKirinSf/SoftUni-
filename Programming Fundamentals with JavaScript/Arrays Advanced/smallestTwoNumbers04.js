function smallestTwoNumbers(arr){

    let sortInAscending = arr.sort();

    let smallestTwo = smallests(sortInAscending);

    function smallests(input){

        let twoNum = []

      for(let i = 0; i < 2 ; i++){

        let temp = input[i];

        twoNum.push(temp);
        
      }   
      
      return twoNum.join(" ")

    }

    console.log(smallestTwo)

    //console.log(sortInAscending)

}

smallestTwoNumbers([30, 15, 50, 5])
