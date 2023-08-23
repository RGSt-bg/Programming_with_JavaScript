function plantDiscovery(inputArr) {

    let commandsArr = JSON.parse(JSON.stringify(inputArr));
    let plantCount = Number(commandsArr.shift());
    let plantArr = [];
    let plantName = "";
    let plantRarity = 0;

    for (let i = 0; i < plantCount; i++) {
        [plantName, plantRarity] = commandsArr.shift().split("<->");
        plantRarity = Number(plantRarity);
        if (plantArr.includes(plantName) === false) {
            plantArr.push(plantName);
            plantArr.push(plantRarity);
            plantArr.push(0);
            plantArr.push(0);
        }
        else plantArr[plantArr.indexOf(plantName)+1] = plantRarity;
    }

    let [command, tmpStr] = commandsArr.shift().split(": ");
    while (command !== 'Exhibition') {

        if (command !== 'Reset') {
            [plantName, plantRarity] = tmpStr.split(" - ");
            plantRarity = Number(plantRarity);
        }
        else plantName = tmpStr;

        if (plantArr.includes(plantName) === false && plantName !== undefined) {
            console.log("error");
            break;
        }
        else {
            switch (command) {

                case 'Rate': {

                    plantArr[plantArr.indexOf(plantName)+2] += plantRarity;
                    plantArr[plantArr.indexOf(plantName)+3]++;
                    [command, tmpStr] = commandsArr.shift().split(": ");
                    break;
                }

                case 'Update': {

                    plantArr[plantArr.indexOf(plantName)+1] = plantRarity;
                    [command, tmpStr] = commandsArr.shift().split(": ");
                    break;
                }

                case 'Reset': {

                    plantArr[plantArr.indexOf(plantName)+2] = 0;
                    plantArr[plantArr.indexOf(plantName)+3] = 0;
                    [command, tmpStr] = commandsArr.shift().split(": ");
                    break;
                }
            }
        }
    }

    console.log("Plants for the exhibition:");
    for (let i = 0; i < plantArr.length; i += 4) {
        if (plantArr[i+2] === 0)
        console.log("- " + plantArr[i] + "; Rarity: " + plantArr[i+1] + "; Rating: " + (0).toFixed(2));
        else 
        console.log("- " + plantArr[i] + "; Rarity: " + plantArr[i+1] + "; Rating: " + (plantArr[i+2]/plantArr[i+3]).toFixed(2));
    }
}

plantDiscovery(["3","Arnoldii<->4","Woodii<->7","Welwitschia<->2",
                "Rate: Woodii - 10","Rate: Welwitschia - 7","Rate: Arnoldii - 3","Rate: Woodii - 5",
                "Update: Woodii - 5","Reset: Arnoldii","Exhibition"]);
console.log("-------------------------------------------------------------------------------------------");
plantDiscovery(["2","Candelabra<->10","Oahu<->10","Rate: Oahu - 7","Rate: Candelabra - 6","Exhibition"]);