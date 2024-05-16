function odd(input){

    let list = {};

let arr = input.split(" ").map(e => e.toLowerCase());

for(let i = 0; i < arr.length; i++){

    if(!list.hasOwnProperty(arr[i])){

        list[arr[i]] = [];
    }

    list[arr[i]].push(i);
}

let entries = Object.entries(list);

let sorted = entries.sort((a, b) => a[1][0] - b[1][0]);

let res = [];

for(let el of sorted){

    if(el[1].length % 2 !== 0){

        res.push(el[0]);
    }  

}

console.log(res.join(" "))

//console.table(sorted)

}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
