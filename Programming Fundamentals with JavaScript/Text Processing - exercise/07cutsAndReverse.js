function cutsAndReverse (str){

    let length = str.length;

    let half = length/2

    let first = str.slice(0, half);

    let second = str.slice(half, length);

    let reversedFirst = first.split("").reverse().join("");

    let reversedSecond = second.split("").reverse().join("");

    console.log(reversedFirst);
    console.log(reversedSecond);



}

cutsAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
