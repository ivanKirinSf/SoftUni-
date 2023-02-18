function maxSequence(arr) {
    let newArr = [];
    let maxArr = [];
    
  
    for(let i = 0; i<arr.length; i++){
      let tempI = arr[i];
      
      
      index = i;
      while(tempI === arr[index]){
        newArr.push(tempI);
        index++
        
      }
  
  
      if(newArr.length > maxArr.length){
      maxArr=newArr
      }
  
      newArr = [];
  
      
      
  
      
    }
  
    console.log(maxArr.join(" "))
  
  }

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
