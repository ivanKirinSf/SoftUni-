function catalogue(input){

  let obj = {};

  for(let i = 0; i < input.length; i++){
    
    let temp = input[i].split(" : ");

    let name = temp.shift();

    let price = Number(temp.shift());

    obj[name] = price;

    //obj.price = price;

    //console.log(price)

  }

  let sorted = Object.keys(obj).sort((a,b) => a.localeCompare(b))

  let firstChar = "";

  for(let key of sorted){

    if(firstChar !== key[0]){

        console.log(key[0]);

        firstChar = key[0];

    }    

    console.log(`  ${key}: ${obj[key]}`); 
} 

}
