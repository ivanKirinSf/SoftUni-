function inventory(input){

    let hero = {};

    let heroes = [];

    for(let i = 0 ; i < input.length; i++){

        let temp = input[i].split(" / ");

        let heroName = temp.shift();

        let heroLevel = temp.shift();

        let heroItems = temp.shift();

        hero.name = heroName;

        hero.level = heroLevel;

        hero.items = heroItems;

        heroes.push(hero);
        
        hero = {};

    }

    let sorted = heroes.sort((a,b) => a.level - b.level);

    for(let el of sorted){
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
