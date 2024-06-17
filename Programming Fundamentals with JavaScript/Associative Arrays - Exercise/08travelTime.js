function travelTime(input){

    let destinations = new Map();

 for(let line of input){

   let temp = line.split(" > ");

   console.log(temp);

 }   

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])
