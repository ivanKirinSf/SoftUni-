function godzillaVsKingKong(input) {
const budget = Number (input[0]);
const stunts = Number (input[1]);
const pricePerClothes = Number (input[2]);

const decor = budget *0.1;
let priceForClothes = stunts * pricePerClothes;

if (stunts > 150) {
    priceForClothes *= 0.9; 
}

const totalPrice = priceForClothes + decor;

if (totalPrice > budget) {
    let neededMoney = totalPrice - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
} else {
    let moneyLeft = budget - totalPrice;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

godzillaVsKingKong(["20000",
"120",
"55.5"]);
godzillaVsKingKong(["15437.62",
"186",
"57.99"]);
godzillaVsKingKong(["9587.88",
"222",
"55.68"]);
