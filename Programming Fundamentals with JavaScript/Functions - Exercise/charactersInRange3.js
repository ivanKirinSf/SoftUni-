function charactersInRange(a, b){
    
    
    let codeA = a.charCodeAt(0);
    let codeB = b.charCodeAt(0)


    let temp = codeA;
    if(codeA > codeB){
        codeA = codeB;
        codeB = temp;
    }

    let res = char(codeA, codeB)

    console.log(res)


    function char(num1, num2){

    newArr = [];
   
        index = Number(num1)+1;
        while(num2 > index){

            let el = String.fromCharCode(index)

            

            newArr.push(el)

            index++
        }

        return newArr.join(" ")
    
}

}
