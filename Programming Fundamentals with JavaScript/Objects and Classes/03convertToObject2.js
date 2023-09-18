function convertToObj(input){

let obj = JSON.parse(input);

let entries = Object.entries(obj);

for(let [key, value] of entries){
    console.log(`${key}: ${value}`)
}

}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')
