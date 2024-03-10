function inventory(input){

    let hero = {};

    let arr = [];

    for(let i = 0; i < input.length; i++){

        let temp = input[i].split(" / ");

        let heroName = temp.shift();

        let heroLevel = temp.shift();

        let heroItems = temp.shift()

        hero.name = heroName;

        hero.level = heroLevel;

        hero.items = heroItems;

        arr.push(hero);

        hero = {};
        //console.log(heroName, heroLevel, heroItems)
    }

    arr.reverse();

    for(let k = 0; k < arr.length; k++){
        
        console.log(`Hero: ${arr[k][`name`]}`);
        console.log(`level => ${arr[k][`level`]}`);
        console.log(`items => ${arr[k][`items`]}`);

    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
