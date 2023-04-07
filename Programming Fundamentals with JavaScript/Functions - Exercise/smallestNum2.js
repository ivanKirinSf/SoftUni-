function smallestOfThreeNumbers(num1, num2, num3){

    let res = smallestNum(num1, num2, num3)

    console.log(res);


    function smallestNum(a, b, c){
        let smallestN = a;

        if(b < smallestN){
            smallestN = b;
        }
        
        if(c < smallestN){
            smallestN = c;
        }

      
        return smallestN;

        
    }

    

}
