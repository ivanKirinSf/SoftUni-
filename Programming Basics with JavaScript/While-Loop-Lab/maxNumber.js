function maxNumber(input){
   let num = input[0];
   index = 1;
   let maxNum = Number.MIN_SAFE_INTEGER;

   while(num!=="Stop"){
    let current = Number(num);
    if(current>maxNum){
        maxNum=current;
    }

    num = input[index];
    index++
   }

   console.log(maxNum)
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
