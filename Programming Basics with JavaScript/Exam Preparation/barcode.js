function barcode(input){

    let start = input[0];

    let end = input[1];

    let index0 = "";

    let index1 = "";

    let index2 = "";

    let index3 = "";

    //let index3 = "";

    let code = "";

    let final = "";

    //let final = "";

   for(let a = start[0]; a <= end[0]; a++){
    let temp = a;

    if(temp % 2 !== 0){
        index0 += a; 
    }
    
    
   }

   for(let b = start[1]; b <= end[1]; b++){
    let temp = b;

    if(temp % 2 !== 0){
        index1 += b; 
    }
    
   }

   for(let c = start[2]; c <= end[2]; c++){
    let temp = c;

    if(temp % 2 !== 0){
        index2 += c; 
    }
    
   }

   for(let d = start[3]; d <= end[3]; d++){
    let temp = d;

    if(temp % 2 !== 0){
        index3 += d; 
    }
    
   }

   //console.log(index0)
   //console.log(index1)

   
   

   for(let i = 0; i < index0.length; i++){

    let tempI = index0[i];

    //code += tempI;

    for(let j = 0; j < index1.length; j++){
        let tempJ = index1[j];

        //code += tempJ;

        for(let k = 0; k < index2.length; k++){
            let tempK = index2[k];

            for(let l = 0; l <index3.length; l++){

                let tempL = index3[l];
                

                code += tempI;

                code += tempJ;
        
                code += tempK;

                code += tempL;

                final += code + " ";
        
                //console.log(code)
        
                code = "";

            }
        
        }
        
    }

   }

   console.log(final)
      
}
