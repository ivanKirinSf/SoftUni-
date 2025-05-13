function worldTour(input){

let str = input.shift();

for(let el of input){

    let temp = el.split(":");

    let com = temp.shift();

    if(com === "Add Stop"){

        let index = Number(temp.shift());

        if(index >= 0 && index <= str.length){

            let string = temp.shift();

            let sub1 = str.substring(0, index);
    
            let sub2 = str.substring(index, str.length);
    
            str = sub1 + string + sub2;   
        }
        
        console.log(str)
    }
}
    

}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:20:Rome",
    //"Remove Stop:11:16",
    //"Switch:Hawai:Bulgaria",
    "Travel"
])
