function pirates(inputArr) {

    let townArr = [];  // Отказ от обекта, да се пробва с масив.
    let action = "";
    let town = "";
    let population = 0;
    let gold = 0;

    [town, population, gold] = inputArr.shift().split("||");
        
    while (town !== "Sail") {

        population = Number(population);
        gold = Number(gold);

        if (townArr.indexOf(town) !== -1) {
            townArr[townArr.indexOf(town) + 1] += population;
            townArr[townArr.indexOf(town) + 2] += gold;
        }
        else {
            townArr.push(town);
            townArr.push(population);
            townArr.push(gold);
        }

        [town, population, gold] = inputArr.shift().split("||");
    }

    [action, town, population, gold] = inputArr.shift().split("=>");

    while (action !== "End") {

        population = Number(population);
        gold = Number(gold);

        switch (action) {

            case "Plunder": {
                townArr[townArr.indexOf(town) + 1] -= population;
                townArr[townArr.indexOf(town) + 2] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                if (townArr[townArr.indexOf(town) + 1] <= 0 || townArr[townArr.indexOf(town) + 2] <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    townArr.splice(townArr.indexOf(town) + 2, 1);
                    townArr.splice(townArr.indexOf(town) + 1, 1);
                    townArr.splice(townArr.indexOf(town), 1);
                }
                break;
            }
            case "Prosper": {
                if (population < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                else {
                    townArr[townArr.indexOf(town) + 2] += population;
                    gold = townArr[townArr.indexOf(town) + 2];
                    console.log(`${population} gold added to the city treasury. ${town} now has ${gold} gold.`);
                }
                break;
            }
        }
        [action, town, population, gold] = inputArr.shift().split("=>");
    }

    if (townArr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        return;
    }

    console.log(`Ahoy, Captain! There are ${townArr.length / 3} wealthy settlements to go to:`);

    for (let i = 0; i < townArr.length; i += 3) {
        town = townArr[i];
        population = townArr[i + 1];
        gold = townArr[i + 2];
        console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`)
    }
}

pirates((["Tortuga||345000||1250","Santo Domingo||240000||630","Havana||410000||1100","Sail",
          "Plunder=>Tortuga=>75000=>380","Prosper=>Santo Domingo=>180","End"]));
console.log("----------------------------------------------");
pirates(["Nassau||95000||1000","San Juan||930000||1250","Campeche||270000||690","Port Royal||320000||1000","Port Royal||100000||2000",
         "Sail","Prosper=>Port Royal=>-200","Plunder=>Nassau=>94000=>750","Plunder=>Nassau=>1000=>150","Plunder=>Campeche=>150000=>690","End"]);