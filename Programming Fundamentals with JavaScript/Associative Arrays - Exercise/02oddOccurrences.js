function oddOccurrences(input){

    let obj = {};

    let list = input.shift().split(" ");

    let lowerC = list.map(e => e.toLowerCase());

    //console.log(lowerC)

    for(let el of lowerC){

        let str = el;

        if(!obj.hasOwnProperty(str)){

            obj[str] = 1;

        }else{

            obj[str] += 1;

        }

        
    }

    let entries = Object.entries(obj);

    let res = [];

    for(let item of entries){

        let quantity = Number(item[1]);

        if(quantity % 2 !== 0){

            res.push(item[0])

        }

        //console.log(quantity)
    }

    console.log(res.join(" "))



}

oddOccurrences(['Java C# Php PHP Java PhP 3 C# 3 1 5 C#'])
