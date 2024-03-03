function towns(input){

    let city = {}

    for(let i = 0 ; i < input.length; i++){
        let temp = input[i].split(" | ")

        let cityName = temp.shift();
        let num1 = Number(temp.shift());
        let num2 = Number(temp.shift());

        //console.log(num1);

        city.town = cityName;
        city.latitude = num1.toFixed(2);
        city.longitude = num2.toFixed(2);

        console.log(city);

    }

}

towns([
'Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'
])
