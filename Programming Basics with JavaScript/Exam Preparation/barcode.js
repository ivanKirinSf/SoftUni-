function barcode(input){

    let start = input[0];

    let end = input[1];

    let index0 = "";

    let index1 = "";

    let index2 = "";

    let index3 = "";

    let code = "";

    let final = "";

    for(let a = start[0]; a<=end[0]; a++){
        let temp = a;

        if(temp % 2 !== 0){

            index0 += temp;

        }
        

    }

    for(let b = start[1]; b<=end[1]; b++){
        let temp = b;

        if(temp % 2 !== 0){

            index1 += temp;

        }
        

    }

    for(let c = start[2]; c<=end[2]; c++){
        let temp = c;

        if(temp % 2 !== 0){

            index2 += temp;

        }        

    }

    for(let d = start[3]; d<=end[3]; d++){
        let temp = d;

        if(temp % 2 !== 0){

            index3 += temp;

        }        

    }

    for(let e = 0; e < index0.length; e++){
        let tempE = index0[e];

        code += tempE;

        for(let f = 0; f < index1.length; f++){
            let tempF = index1[f];

            code  += tempF;

            for(let j = 0; j < index2.length; j++){
                let tempJ = index2[j];
                code += tempJ;

                for(let h = 0; h < index3.length; h++){
                    let tempH = index3[h];
                    code += tempH;

                    final += code;
                    code = "";

                    if(code.length === 0){
                        break;
                    }
                }

                if(code.length === 0){
                    break;
                }
            }

            if(code.length === 0){
                break;
            }

            if(code.length === 0){
                break;
            }
        }
    }

    }

barcode(["2345", "6789"])
