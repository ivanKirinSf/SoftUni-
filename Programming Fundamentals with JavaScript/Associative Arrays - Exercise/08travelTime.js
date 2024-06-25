function travelTime(input){

let countries = {};

for(let item of input){

    let temp = item.split(" > ");
    let country = temp[0];
    let city = temp[1];
    let cost = Number(temp[2]);

    if(!country.hasOwnProperty(city)){

        countries[country] = {};
    }

    if(!countries[country].hasOwnProperty(city)){

        countries[country][city] = cost;               

    }

    if(countries[country][city] > cost){

        countries[country][city] = cost;

    }

    let keys = Object.keys(countries);

    keys.sort((a, b) => a.localeCompare(b));

    for(let item of keys){

        let sortedCities = countries[item];

        let data = Object.entries(sortedCities);

        data.sort((a, b) => a[1] - b[1]);

        //console.table(data)

        let result = [];

        result.push(data.join(" -> "));

        console.log(`${item} -> ${data}`);
    }

}

//console.table(countries)

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
