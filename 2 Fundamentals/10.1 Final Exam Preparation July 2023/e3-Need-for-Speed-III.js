function needForSpeedIII(inputArr) {

    let tempArr = JSON.parse(JSON.stringify(inputArr));
    let carsArr = [];
    let numberCars = Number(tempArr.shift());
    let patternCars = /(?<car>[\w ]+)\|(?<mileage>\d+)\|(?<fuel>\d+)/;
    let patternDrive = /[\w ]+ : (?<car>[\w ]+) : (?<distance>\d+) : (?<fuel>\d+)/;
    let patternRefuel = /[\w ]+ : (?<car>[\w ]+) : (?<fuel>\d+)/;
    let command = "";
    let car = "";
    let distance = 0;
    let fuel = 0;

    for (let i = 0; i < numberCars; i++) {

        if ((carsInfo = patternCars.exec(tempArr[0])) !== null) {
            carsArr.push(carsInfo.groups["car"]);
            carsArr.push(Number(carsInfo.groups["mileage"]));
            carsArr.push(Number(carsInfo.groups["fuel"]));
            tempArr.shift();
        }
    }

    command = tempArr[0].split(" : ")[0];
    while (command !== "Stop") {

        switch (command) {

            case "Drive": {

                if ((carsInfo = patternDrive.exec(tempArr[0])) !== null) {
                    car = carsInfo.groups["car"];
                    distance = Number(carsInfo.groups["distance"]);
                    fuel = Number(carsInfo.groups["fuel"]);
                    tempArr.shift();
                }
                i = carsArr.indexOf(car);
                if (carsArr[i+2] < fuel) console.log("Not enough fuel to make that ride");
                else {
                    carsArr[i+2] -= fuel;
                    carsArr[i+1] += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                }
                if (carsArr[i+1] >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    carsArr.splice(i, 3);
                }
                command = tempArr[0].split(" : ")[0];
                break;
            }

            case "Refuel": {

                if ((carsInfo = patternRefuel.exec(tempArr[0])) !== null) {
                    car = carsInfo.groups["car"];
                    fuel = Number(carsInfo.groups["fuel"]);
                    tempArr.shift();
                }
                i = carsArr.indexOf(car);
                if (carsArr[i+2] + fuel > 75) {
                    let tmpFuel = 75 - carsArr[i+2];
                    console.log(`${car} refueled with ${tmpFuel} liters`);
                    carsArr[i+2] = 75;
                }
                else {
                    console.log(`${car} refueled with ${fuel} liters`);
                    carsArr[i+2] += fuel;
                }
                command = tempArr[0].split(" : ")[0];
                break;
            }

            case "Revert": {

                if ((carsInfo = patternRefuel.exec(tempArr[0])) !== null) {
                    car = carsInfo.groups["car"];
                    fuel = Number(carsInfo.groups["fuel"]);
                    tempArr.shift();
                }
                let kilometers = fuel;
                i = carsArr.indexOf(car);
                if (carsArr[i+1] - kilometers < 10000) carsArr[i+1] = 10000;
                else {
                    carsArr[i+1] -= kilometers;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                command = tempArr[0].split(" : ")[0];
                break;
            }
        }
    }
    for (i = 0; i < carsArr.length; i += 3) {

        console.log(`${carsArr[i]} -> Mileage: ${carsArr[i+1]} kms, Fuel in the tank: ${carsArr[i+2]} lt.`);
    }
}

needForSpeedIII(['3','Audi A6|38000|62','Mercedes CLS|11000|35','Volkswagen Passat CC|45678|5',
                 'Drive : Audi A6 : 543 : 47','Drive : Mercedes CLS : 94 : 11','Drive : Volkswagen Passat CC : 69 : 8',
                 'Refuel : Audi A6 : 50','Revert : Mercedes CLS : 500','Revert : Audi A6 : 30000','Stop']);
console.log("-----------------------------------------------------------------------------------");
needForSpeedIII(['4','Lamborghini Veneno|11111|74','Bugatti Veyron|12345|67','Koenigsegg CCXR|67890|12',
                 'Aston Martin Valkryie|99900|50','Drive : Koenigsegg CCXR : 382 : 82',
                 'Drive : Aston Martin Valkryie : 99 : 23','Drive : Aston Martin Valkryie : 2 : 1',
                 'Refuel : Lamborghini Veneno : 40','Revert : Bugatti Veyron : 2000','Stop']);