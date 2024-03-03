function storeProvision(arr1, arr2){

    let store = {};

    let list = [];

    for(let i = 0; i < arr1.length; i++){
        let temp1 = arr1[i];
        let temp2 = arr2[i];

        let index1 = arr2.indexOf(temp1);
        let index2 = arr1.indexOf(temp2);




        if(i % 2 === 0){

        let index1 = arr2.indexOf(temp1);
        let index2 = arr1.indexOf(temp2);

           if(index1 !== -1){
            let res = Number(arr1[i+1]) + Number(arr2[index1+1]);
            store.product = temp1;
            store.quantity = res;
           }else if(index1 === -1){
            store.product = temp1;
            store.quantity = Number(arr1[i+1])
           }

           list.push(store)

           store = {};

           //console.log(`${store.product} -> ${store.quantity}`)
           
           if(index2 !== -1){
            let res = Number(arr2[i+1]) + Number(arr1[index2+1]);
            store.product = temp2;
            store.quantity = res;
           }else if(index2 === -1){
            store.product = temp2;
            store.quantity = Number(arr2[i+1])
           }

           list.push(store)
            
        }

        //console.log(`${store.product} -> ${store.quantity}`)
    }


    //console.log(list)

    for(let el of list){
        console.log(`${el.product} -> ${el.quantity}`)
    }
    //console.log(store)

}
