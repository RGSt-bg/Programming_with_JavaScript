function starEnigma(inputArr) {

    let countLetters = 0;
    let countMess = Number(inputArr.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < countMess; i++) {

        let tmpStr = "";
        let pattern = /[STARstar]+/g;
        countLetters = inputArr[i].match(pattern).join("").length;

        for (let j = 0; j < inputArr[i].length; j++) {
            let tmpChar = inputArr[i].charCodeAt(j);
            tmpStr += String.fromCharCode(tmpChar - countLetters);
        }

        pattern = /@(?<planet>[A-Za-z]+)\w?[^@\-!:>]*:(?<population>\d+)\w?[^@\-!:>]*!(?<attack>[AD])!\w?[^@\-!:>]*->(?<soldiers>\d+)/g;

        let attackInfo = {};
        let match = pattern.exec(tmpStr);
        while (match !== null) {
            attackInfo = match.groups;
            let planetName = attackInfo["planet"];
            let attackStatus = attackInfo["attack"];
    
            if (attackStatus === "A") attackedPlanets.push(planetName);
            else if (attackStatus === "D") destroyedPlanets.push(planetName);

            match = pattern.exec(tmpStr);
        }
    }
    attackedPlanets.sort();
    destroyedPlanets.sort();
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(element => console.log(`-> ${element}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(element => console.log(`-> ${element}`));    
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log("----------------------------------------------");
starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);