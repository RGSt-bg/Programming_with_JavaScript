function inventory(inputArr) {

    let heroArr = [];

    inputArr.forEach(heroData => {

        let [Hero, level, items] = heroData.split(" / ");
        level = Number(level);
        heroArr.push({Hero, level, items});
        
    });

    heroArr.sort((a, b) => a.level - b.level);

    heroArr.forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword',
            'Hes / 1 / Desolator, Sentinel, Antara']);
console.log("-----------------------------------------------------------------------------------");
inventory(['Batman / 2 / Banana, Gun','Superman / 18 / Sword','Poppy / 28 / Sentinel, Antara']);