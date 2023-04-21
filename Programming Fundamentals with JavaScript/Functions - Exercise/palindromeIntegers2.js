function palindromeIntegers(arr) {









  let num = "";

  index = 0;
  while (index < arr.length) {
    let temp = Number(arr[index]);
    num = temp.toString()





    jNum = "";

    for (let j = num.length - 1; j >= 0; j--) {
      let jTemp = num[j];
      jNum += jTemp;


    }








    if (jNum == num) {
      console.log("true")
    } else {
      console.log("false")
    }



    index++

  }






}

palindromeIntegers([123, 323, 421, 121])
