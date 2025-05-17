function worldTour(input){

let str = input.shift();

for(let el of input){

    let temp = el.split(":");

    let com = temp.shift();

    if(com === "Add Stop"){

        let index = Number(temp.shift());

        if(index >= 0 && index <= str.length-1){

            let string = temp.shift();

            let sub1 = str.substring(0, index);
    
            let sub2 = str.substring(index, str.length);
    
            str = sub1 + string + sub2;   
        }
        
        console.log(str);

    }else if(com === "Remove Stop"){

        let startIndex = Number(temp.shift());

        let endIndex = Number(temp.shift());

        if(startIndex >= 0 && endIndex <= str.length-1){

        let sub1 = str.substring(0, startIndex);

        let sub2 = str.substring(endIndex+1, str.length);

        str = sub1+sub2;        

        }  
        
        console.log(str);
        
    }else if(com === "Switch"){

        let oldString = temp.shift();

        let newString = temp.shift();

        if(str.includes(`${oldString}`)){

        str = str.replace(oldString, newString);        

        }        

        console.log(str)

    }else if(com === "Travel"){

        console.log(`Ready for world tour! Planned stops: ${str}`);
        break;
    }
}    

}

worldTour([
"Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"
])
