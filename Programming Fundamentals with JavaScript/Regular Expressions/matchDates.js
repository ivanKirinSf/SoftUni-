function matchDates(input){

let pattern = /\bd{2}[.-/][A-Z][a-z]\2\[.-/]d{4}\b/g;

let validDates = [];

let dates = null;

while((dates = pattern.exec(input)) !== null){

   let day = pattern[`day`];
   let month = pattern[`month`];
   let year = pattern[`year`];

}

console.log(validDates.join(" "))
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
