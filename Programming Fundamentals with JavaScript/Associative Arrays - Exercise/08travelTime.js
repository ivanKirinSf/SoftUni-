function travelTime(input){

let countries = {};

for(let item of input){

  let temp = item.split(" > ");
  let state = temp[0];
  let town = temp[1];
  let cost = Number(temp[2]);

  if(!countries.hasOwnProperty(state)){
     countries[state] = {};
  }

  if(!countries[state].hasOwnProperty(town)){
    countries[state][town] = cost
  }

  if(countries[state][town] > cost){
    countries[state][town] = cost
  }

  let keys = Object.keys(countries);

  keys.sort((a,b) => a.localeCompare(b));

  for(let key of keys){

     let sortedCities = Object.entries(countries[keys]);

     sortedCities.sort((a,b) => a[1] - b[1]);

    //console.table(sortedCities);

    let result = [];

    for(let town of sortedCities){

       result.push(town.join(" -> "))

    }

    console.log(`${item} -> ${result.join(" ")}`);

  }

  //console.log(sortedCities)

}
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
