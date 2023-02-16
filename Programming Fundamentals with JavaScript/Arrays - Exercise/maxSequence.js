function maxSequence(arr) {

  let newArr = [];
  let maxArr = [];
  let leftArr = [];
  let length = 0;
  let maxLength = 1;

  for (let i = 0; i < arr.length; i++) {

    let tempI = arr[i];


    for (let k = i + 1; k < arr.length; k++) {
      let tempK = arr[k]

      if (tempI == tempK) {
        newArr.push(tempK);
        length = newArr.length;
        if (length > maxLength) {
          maxArr = newArr;
          if (length < arr.length) {
            maxArr.push(tempI);
          } else {
            break;
          }



        }
        
        
        

      } else {
        newArr = [];
        break;
      }




      maxLength = length;

    }

    






  }


  console.log(maxArr)
  


}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
