function companyUsers(input){

    let corpList = {};

   for(let el of input){

         let info = el.split(" -> ");

         let firm = info.shift();

         let personId = info.shift();

         if(firm in corpList){

            if(!corpList[firm].includes(personId)){

                 corpList[firm].push(personId);

            }

         }else{

             corpList[firm] = [personId];

         }

         //console.log(corpList);

   }

   let entries = Object.entries(corpList).sort((a, b) => a[0].localeCompare(b[0]));

   //console.table(entries);

   for(let [firm, arrId] of entries) {

    console.log(firm);

    for(let empId of arrId){

        console.log(`-- ${empId}`);

    }
   }

   //console.table(sorted);

}

companyUsers([
    'SoftUni -> AA12345',    
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])
