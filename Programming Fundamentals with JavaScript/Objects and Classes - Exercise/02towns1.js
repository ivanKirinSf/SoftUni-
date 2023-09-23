function towns(input){
    
   for(let i = 0; i<input.length; i++){
       let temp = input[i].split(" |");
       let town = temp.shift();
       let Latitude = Number(temp.shift());
       let Longitude = Number(temp.shift());

       let obj = {};

       obj.town = town;
       obj.latitude = Latitude.toFixed(2);
       obj.longitude = Longitude.toFixed(2);  

       console.log(obj)  

       //console.log(town)
       //console.log(latitude)
       //console.log(longitude)
       
   }

}

towns(
    ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
