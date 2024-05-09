function companyUsers(input){

    let obj = {};

    let firms = [];

    for(let el of input){

        let info = el.split(" -> ");

        let firm = info[0];

        let id = info[1];

        obj.firmName = firm;

        obj.info = id;

        if(!firms[obj.firmName].hasOwnProperty(id)){

            firms.push(obj);
        }

        //firms.push(obj);

        obj = {};

        //if(obj[firm] !== id){

            //obj[firm] = id;
        //}

        //obj[firm] = id;

        //console.log(info)
    }

    console.table(firms)

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])
