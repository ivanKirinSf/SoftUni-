function travelTime(input){

let countries = {};

for(let item of input){

    let currentItem = item.split(" > ");

    let country = currentItem[0];
    let city = currentItem[1];
    let cost = currentItem[2];

    if(!countries.hasOwnProperty(country)){

       countries[country] = {};
    }

    if(!countries[country].hasOwnProperty(city)){

        countries[country][city] = cost;
    }

    if(countries[country][city] > cost){

        countries[country][city] = cost;

    }
    //console.log(country)             

}

let keys = Object.keys(countries);

    let sorted = keys.sort((a,b) => a.localeCompare(b));

    for(let temp of sorted){

        let entries = Object.entries(countries[temp]);

        let sortedCost = entries.sort((a, b) => a[1] - b[1])

        //console.table(sortedCost)

        for(let state of entries){

            console.log(`${state} -> ${countries[state]} -> ${sortedCost.join(" -> ")}`)
        }

    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
