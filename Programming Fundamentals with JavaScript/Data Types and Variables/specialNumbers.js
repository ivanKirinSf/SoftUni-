function solve(num) {
    for (let i = 1; i <= num; i++) {
        let numAsString = i.toString();
        let sum = 0;
        for (let k = 0; k < numAsString.length; k++) {
            let curChar = numAsString[k];
            let charAsNum = Number(curChar);
            sum += charAsNum;
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11) 


            console.log(`${i} -> ${isSpecial ? 'True' : 'False'} `)
        

    }


}
