function integerAndFloat(firstNum, secondNum, thirdNum){

    let sumNum = firstNum + secondNum + thirdNum;
    let typeNum = ""

    if(sumNum % 1 === 0){
        typeNum += "Integer";
    }else {

        typeNum += "Float"

    }

    console.log(`${sumNum} - ${typeNum}`)



}

integerAndFloat(9, 100, 1.1)
