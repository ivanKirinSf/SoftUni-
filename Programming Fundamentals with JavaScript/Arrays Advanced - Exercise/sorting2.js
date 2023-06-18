function sorting(input){

let sortArr = input.sort((a,b)=> b - a);

let res = [];

for(let i = 0; i < sortArr.length / 2; i++){
    res.push(sortArr[i]);
    if(sortArr.length % 2 === 1 && !((sortArr.length - 1) / 2 === i)){

        res.push(sortArr[sortArr.length - 1 - i])

    }else if(sortArr.length % 2 === 0) {

        res.push(sortArr[sortArr.length - 1 - i])

    }
   
}

console.log(res.join(" "))


}







//sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log("--------------------------------------")
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
