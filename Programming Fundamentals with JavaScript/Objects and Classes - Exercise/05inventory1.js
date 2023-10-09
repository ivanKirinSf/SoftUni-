function inventory(input){

let res = [];

for(let line of input){
    let [name, level, items] = line.split(" / ");
    let heroes = {
        heroes: name,
        heroes: Number(level),
        heroes: items,
    }
    res.push(heroes)
}

res.sort((heroesA, heroesB) => heroesA - heroesB);

for(let heroes of res){
    console.log(`Hero: ${heroes[`name`]}`);
    console.log(`level : ${heroes.level}`);
    console.log(`items: ${heroes.items}`);
}


}

inventory([
    'Batman / 18 / Banana, Gun',
    'Superman / 0 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]    
    )
