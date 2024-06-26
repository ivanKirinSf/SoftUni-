function travelTime(input){

let countries = {};

for(let el of input){

    let temp = el.split(" > ");

    let country = temp[0];
    let city = temp[1];
    let price = Number(temp[2]);

    if(!countries.hasOwnProperty(country)){

        countries[country] = {};

    }

    if(!countries[country].hasOwnProperty(city)){

        countries[country][city] = price;

    }

    if(countries[country][price] > price){

        countries[country][price] = price;

    }

    let keys = Object.keys(countries);

    let sortedKeys = keys.sort((a,b) => a.localeCompare(b));

    for(let item of sortedKeys){

        let sortedCities = Object.entries(countries[item]);

        let sorted = sortedCities.sort((a, b) => a[1] - b[1]);

        console.table(sorted);

    }

    //console.log(sortedKeys)

}

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
