function houseParty(input){


    let list = [];


   for(let i = 0; i< input.length; i++){

       let temp = input[i].split(" ");
       let name = temp[0];
       let text = "";
       

       for(let k = 1; k < temp.length; k++){
        let tempK = temp[k];
        text += tempK;
       }

       if(text === "isgoing!"){

        if( list.indexOf(name) != -1 ){
            console.log(`${name} is already in the list!`)
        }else{
            list.push(name)
        }
        //check if the name is in the list and print ...
        //if it is not in the list push it in...
           
       } else {
         //check the name in the list and remove it
         //if the name is not in the list print...

         if(list.indexOf(name) !== -1){

            let index = list.indexOf(name);
            list.splice(index,1);

         } else {

            console.log(`${name} is not in the list!`)

         }        

       }          

   }

   console.log(list.join(`\n`))

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
