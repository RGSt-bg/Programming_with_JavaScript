function arenaTier(inputArr) {

    let gladiatorsObj = {};
    let gladiatorOneArr = [];
    let gladiatorTwoArr = [];
    let skillsArr = [];
    let nameOne = "";
    let nameTwo = "";
    let skill = "";
    let points = 0;

    inputArr.forEach(element => {

        [nameOne] = element.split(" -> ");

        if (nameOne === "Ave Cesar") return;

        if (element.includes("vs")) {

            [nameOne, nameTwo] = element.split(" vs ");
            if (gladiatorsObj.hasOwnProperty(nameOne) && gladiatorsObj.hasOwnProperty(nameTwo)) {

                gladiatorOneArr = Object.entries(gladiatorsObj[nameOne]);
                gladiatorTwoArr = Object.entries(gladiatorsObj[nameTwo]);

                for (let i = 0; i < gladiatorOneArr.length; i++) {
                    
                    for (let j = 0; j < gladiatorTwoArr.length; j++) {

                        if (gladiatorOneArr[i][0] === gladiatorTwoArr[j][0]) {

                            if (gladiatorOneArr[i][1] > gladiatorTwoArr[j][1]) delete gladiatorsObj[nameTwo];
                            else delete gladiatorsObj[nameOne];
                        }
                    }
                    
                }
            }

        }
        else if (element.includes(" -> ")) {

            [nameOne, skill, points] = element.split(" -> ");
            points = Number(points);

            if (!gladiatorsObj.hasOwnProperty(nameOne)) gladiatorsObj[nameOne] = {};

            if (!gladiatorsObj[nameOne].hasOwnProperty(skill)) gladiatorsObj[nameOne][skill] = points;
        
            if (gladiatorsObj[nameOne].hasOwnProperty(skill)) {
                if (Number(gladiatorsObj[nameOne][skill]) < points) gladiatorsObj[nameOne][town] = points;
            }
        }
    });

    gladiatorOneArr = [];
    let allPoints = 0;


    for (const name in gladiatorsObj) {

let skillToPrint = "";
for (const skill in gladiatorsObj[name]) allPoints += gladiatorsObj[name][skill];
console.log(`${name}: ${allPoints} skill`);

        // let sortedByPoints = Object.keys(gladiatorsObj[name])
        //                             .sort((p1, p2) => gladiatorsObj[name][p2] - gladiatorsObj[name][p1])
        //                             .sort((a, b) => a - b);

        gladiatorOneArr.push(name);
        for (const skill in gladiatorsObj[name]) {

            skillsArr.push(skill);
            skillsArr.push(gladiatorsObj[name][skill]);

skillToPrint += "- " + skill + " <!> " + gladiatorsObj[name][skill] + "\n";
        }

        skillsArr.push("next");
        gladiatorOneArr.push(allPoints);
        allPoints = 0;

console.log(skillToPrint.trim());
    }

    
}

arenaTier(['Peter -> BattleCry -> 400',
           'Alex -> PowerPunch -> 300',
           'Stefan -> Duck -> 200',
           'Stefan -> Tiger -> 250',
           'Ave Cesar']);
console.log("--------------------------");
arenaTier(['Peter -> Duck -> 400',
           'Julius -> Shield -> 150',
           'Gladius -> Heal -> 200',
           'Gladius -> Support -> 250',
           'Gladius -> Shield -> 250',
           'Peter vs Gladius',
           'Gladius vs Julius',
           'Gladius vs Maximilian',
           'Ave Cesar']);