function travelTime(input) {

    let countries = {};

    for(let el of input){

        let temp = el.split(" > ");

        let country = temp[0];

        let town = temp[1];

        let price = Number(temp[2]);


        if(!countries.hasOwnProperty(country)){
            countries[country] = {};
        }

        if(!countries[country].hasOwnProperty(town)){
            countries[country][town] = price;
        }

        if(countries[country][town] > price){

            countries[country][town] = price;

        }

    }

    let keys = Object.keys(countries);
    keys.sort((a,b) => a.localeCompare(b));

    for(let line of keys){

        let sortedCities = Object.entries(countries[line]);
        sortedCities.sort((a,b) => a[1] - b[1]);

        let result = [];

        for(let el of sortedCities){
            result.push(el.join(" -> "))
        }

        console.log(`${line} -> ${result.join(" ")}`);

    }
    
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
