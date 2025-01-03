function lunchBreak(input) {
    const tvS= input[0];
    const epDur= input[1];
    const brT = input[2];
    const lunT = brT / 8;
    const restT = brT / 4;
    const leftT = Math.abs(brT - lunT -restT);
    const freeT = Math.abs(leftT - epDur);

    if (leftT >= epDur) {
        console.log(`You have enough time to watch ${tvS} and left with ${Math.ceil(freeT)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvS}, you need ${Math.ceil(freeT)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",
"60",
"96"])

lunchBreak(["Teen Wolf",
"48",
"60"])
