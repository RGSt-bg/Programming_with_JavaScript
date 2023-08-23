function race(inputArr) {

    let nameArr = inputArr.shift().split(", ");
    let pilotInfo = inputArr.shift();
    let pilotObj = {};
    let patternName = /[A-Za-z]/g;
    let patternDist = /\d/g;
    let name = "";
    let distances = 0;
    let wholeDistance = 0;

    nameArr.forEach(element => {
        if (!pilotObj.hasOwnProperty(element)) pilotObj[element] = 0;
    });

    while (pilotInfo !== "end of race") {

        name = (pilotInfo.match(patternName)).join("");
        distances = pilotInfo.match(patternDist);
        
        distances.forEach(dist => {
            wholeDistance += Number(dist);
        });
        // distances.map(d => wholeDistance += Number(d)); // Решението на Иво.

        if (pilotObj.hasOwnProperty(name)) pilotObj[name] += wholeDistance;
    
        pilotInfo = inputArr.shift();
        wholeDistance = 0;
    }
    let sortedPilots = Object.keys(pilotObj).sort((a, b) => pilotObj[b] - pilotObj[a]);

    console.log(`1st place: ${sortedPilots[0]}`);
    console.log(`2nd place: ${sortedPilots[1]}`);
    console.log(`3rd place: ${sortedPilots[2]}`);
}

race(['George, Peter, Bill, Tom','G4e@55or%6g6!68e!!@ ','R1@!3a$y4456@',
      'B5@i@#123ll','G@e54o$r6ge#','7P%et^#e5346r','T$o553m&6','end of race']);
console.log("---------------------------------");
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne','Mi*&^%$ch123o!#$%#nne787) ','%$$B(*&&)i89ll)*&) ',
      'R**(on%^&ald992) ','T(*^^%immy77) ','Ma10**$#g0g0g0i0e','end of race']);