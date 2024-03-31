function wildZoo(input){

    let animal = {};

    let arr = [];

    for(let i = 0; i < input.length; i++){
        let temp = input[i].split(": ");

        let command = temp.shift();

        if(command === "EndDay"){
            break;
        }else if(command === "Add"){

            let info = temp.shift().split("-");

            let name = info.shift();

            let food = Number(info.shift());

            let area = info.shift();

            animal.name = name;

            animal.food = food;

            animal.area = area;

            let res = arr.find(e => e.name === name);

            let index = arr.indexOf(res);

            if(index !== -1){

                if(arr[index].area === area){

                    arr[index].food += food

                }
                
            }else{

                arr.push(animal);
            }            

            animal = {}

            //console.log(animal)

        }else if(command === "Feed"){
            let info = temp.shift().split("-")

            let animalName = info.shift();

            let animalMeal = info.shift();

            let res = arr.find(a => a.name === animalName)
            
            let index = arr.indexOf(res);

            if(index !== -1){

                arr[index].food -= animalMeal;

                if(arr[index].food <= 0){

                    arr.splice(index, 1);

                    console.log(`${animalName} was successfully fed`);              

                }

            }else{
                continue;
            }

            //console.log(animalMeal)
        }        

        //console.table(arr)
    }

    if(arr.length > 0){

        console.log("Animals:");

    for(let el of arr){

        console.log(`${el.name} -> ${el.food}g`)
    }

    console.log(`Areas with hungry animals:`);

    let areaArr = [];
    
    let final = [];

    for(let j = 0; j<arr.length; j++){

        let tempJ = arr[j];

        areaArr.push(tempJ.area);

         
    }

    for(let k = 0; k < areaArr.length; k++){

        let temp = areaArr[k];

        let index = final.indexOf(temp);

        if(index === -1){

            final.push(temp);

            final.push(1)

        }else if(index !== -1){

            let num = final[index+1] + 1;

            let n = index + 1;

            

            final.splice(n, 1, num)
        }
    }

    for(let l = 0; l<final.length; l+=2){
        let tempL = final[l];

        console.log(`${tempL}: ${final[l+1]}`)


    }

    }

    //console.table(final)

    //console.table(arr)

}

wildZoo([
"Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"
])
