function travelTime(input){

let countries = {};

for(let row of input){

  let temp = row.split(" > ");

  let country = temp[0];
  let city = temp[1];
  let price = temp[2];

  if(!countries.hasOwnProperty(country)){
    countries[country] = {};
  }

  if(!countries[country].hasOwnProperty(city)){
    countries[country][city] = price;
  }

  if(countries[country][city] > price){

    countries[country][city] = price;

  }
}

let keys = Object.keys(countries);
keys.sort((a,b) => a.localeCompare(b));

for(let item of keys){
  let sortedCities = Object.entries(countries[item]);
  sortedCities.sort((a,b) => a[1] - b[1]);

  let result = [];

  for(let city of sortedCities){

      result.push(city.join(" -> "));
      //console.log(`${item} -> ${result.join(" ")}`)
  }

  console.log(`${item} -> ${result.join(" ")}`)
}


}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
