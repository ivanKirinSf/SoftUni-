function minNumber(input){
  let num = input[0];
 
  index = 1;
  let minNum = Number.MAX_SAFE_INTEGER;

  while(num !== "Stop"){
    let current = Number(num);
    if(minNum>current){
       minNum = current;

       num = input[index];
       index++;

      
    }
  }

  console.log(minNum)






}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
