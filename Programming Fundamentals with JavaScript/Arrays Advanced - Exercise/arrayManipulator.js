function arrayManipulator(arr1, arr2){

 for(let i = 0; i<arr2.length; i++){
    let temp = arr2[i].split(" ");

    if(temp[0] === "add"){
        let index = Number(temp[1]);
        let element = Number(temp[2]);
        arr1.splice(index, 0, element);       
    } else if(temp[0] === "addMany"){
        let index = Number(temp[1]);
        temp.splice(0,2);
        let numToAdd = temp.map(Number)
        arr1.splice(index, 0, ...numToAdd);        
    } else if(temp[0] === "contains"){

        let element = temp[1];

        let index = arr1.indexOf(element);

        console.log(index)
    }
 } 

}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['contains 1', 'print']        
    )
