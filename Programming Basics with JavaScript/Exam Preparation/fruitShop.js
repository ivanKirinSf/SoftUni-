function fruitShop(input){

    let strawberryPrice = Number(input[0]);
    let bananasAmount = Number(input[1]);
    let orangesAmount = Number(input[2]);
    let raspberriesAmount = Number(input[3]);
    let strawberriesAmount = Number(input[4]);

    let raspberriesPrice = strawberryPrice/2;
    let orangesPrice = raspberriesPrice*0.6;
    let bananasPrice = raspberriesPrice*0.2;

    let totalCost = (strawberryPrice*strawberriesAmount) + (bananasAmount*bananasPrice)+(orangesAmount*orangesPrice)+
    (raspberriesAmount*raspberriesPrice);

    console.log(totalCost)



}

fruitShop([
48,
10,
3.3,
6.5,
1.7
])
