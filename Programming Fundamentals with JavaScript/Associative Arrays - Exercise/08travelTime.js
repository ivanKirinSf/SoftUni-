function travelTime(input){

let countries = {};

for(let el of input){

  let temp = el.split(" > ");

  let state = temp[0];
  let town = temp[1];
  let cost = temp[2];

  if(!countries.hasOwnProperty(state)){

    countries[state] = {};
  }

  if(!countries[state].hasOwnProperty(town)){

    countries[state][town] = cost;

  }

  if(countries[state][town] > cost){

    countries[state][town] = cost;

  }

  let keys = Object.keys(countries);

  keys.sort((a,b) => a.localeCompare(b));

  for(let item of keys){

    let sortedCities = Object.entries(countries[item]);
    sortedCities.sort((a,b) => a[1] - b[1]);

    let result = [];

    for(let row of sortedCities){

       result.push(row.join(" -> "));

       console.log(`${item} -> ${result.join(" ")}`)

    }

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
