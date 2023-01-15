function histogram(input) {
    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let curNum = 0;

    for(let i = 1; i <= num; i++){
        curNum = Number(input[i]);
        
        if(curNum<200){
            p1++;
        } else if(curNum >=200 && curNum <=399){
            p2++;
        } else if(curNum >=400 && curNum <=599){
            p3++;
        } else if(curNum >=600 && curNum <=799){
            p4++;
        } else if(curNum >=800){
            p5++;
        }
    }

    console.log(`${(p1/num*100).toFixed(2)}%`)
    console.log(`${(p2/num*100).toFixed(2)}%`)
    console.log(`${(p3/num*100).toFixed(2)}%`)
    console.log(`${(p4/num*100).toFixed(2)}%`)
    console.log(`${(p5/num*100).toFixed(2)}%`)
    
    }
