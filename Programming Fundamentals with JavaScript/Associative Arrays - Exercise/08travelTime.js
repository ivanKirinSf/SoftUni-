function travelTime(input){

let countries = {};

for(let el of input){

    let temp = el.split(" > ");

    let country = temp[0];
    let city = temp[1];
    let cost = Number(temp[2]);

    if(!country.hasOwnProperty(country)){

       countries[country] = {};
 
    }

    if(!countries[country].hasOwnProperty(city)){

        countries[country][city] = cost;

    }

    if(countries[country][city] > cost){

        countries[country][city] = cost;

    }
}

let countriesKeys = Object.keys(countries);

let sortedKeys = countriesKeys.sort((a,b) => a.localeCompare(b));

let cities = [];

for(let item of sortedKeys){

    //let cities = [];

    cities.push(countries[item]);

    
}

console.table(cities)

//console.log(sortedKeys)




}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
