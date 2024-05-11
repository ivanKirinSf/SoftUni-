function companyUsers(input){

    let corpList = {};

    for(let info of input){

        let compInfo = info.split(" -> ");

        let firm = compInfo.shift();

        let personId = compInfo.shift();

        if(corpList.hasOwnProperty(firm)){

            if(!corpList[firm].includes(personId)){

                corpList[firm].push(personId);

            }


        }else{

            corpList[firm] = [personId];

        }     

        //console.log(personId)       

    }

    let entries = Object.entries(corpList);

    let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]));

    for(let el of sorted){

       console.log(el[0]);

       for(let temp of el[1]){

        console.log(`-- ${temp}`)

       }
    }
    
    //console.table(sorted)

    //console.table(corpList)  

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])
