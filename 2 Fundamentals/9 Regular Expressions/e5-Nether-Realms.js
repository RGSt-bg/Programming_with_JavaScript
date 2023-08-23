function netherRealms(inputStrOriginal) {

    let patternHealth = /[A-Za-z ]*?[^0-9+\-\/*.]*?[A-Za-z ]*?[^0-9+\-\/*.][, ]*?/g;
    let patternDamage = /([+|-]?[0-9]*\.?[0-9])/g;
    let patternSign = /[\*\/]*/g;
    let demonsHealthString = "";
    let demonsHealthArray = [];
    let demonsDamageArray = [];
    let signArray = [];
    let demonsHealth = 0;
    let demonsDamage = 0;
    let signs = "";

    let inputArr = inputStrOriginal.split(",");

    inputArr.forEach(inputStr => {

        if ((signArray = inputStr.match(patternSign)) !== null) 
            for (let i = 0; i < signArray.length; i++) {
                if (signArray[i] !== "")
                    signs += signArray[i];
            }

        if ((demonsDamageArray = inputStr.match(patternDamage)) !== null)
            for (let i = 0; i < demonsDamageArray.length; i++) {
                if (demonsDamageArray[i] !== "") {
                    demonsDamage += Number(demonsDamageArray[i]);
                }
            }
        else demonsDamageArray = [];

        if (signs.length !== 0) {
            for (let i = 0; i < signs.length; i++) {
                if (signs[i] === "*") demonsDamage *= 2;
                else if (signs[i] === "/") demonsDamage /= 2;
            }
        }

        if (patternHealth.test(inputStr) !== null) {
            demonsHealthString = (inputStr.match(patternHealth).join("").trim());
            for (let j = 0; j < demonsHealthString.length; j++) {
                demonsHealth += demonsHealthString.charCodeAt(j);
            }
            let demonsName = inputStr.trim();
            demonsHealthArray.push({demonsName, demonsHealth, demonsDamage});
            demonsHealth = 0;
            demonsDamage = 0;
            signs = "";
        }
    });

    demonsHealthArray.sort((a, b) => a.demonsName.localeCompare(b.demonsName));
    demonsHealthArray.forEach(demon => {
        console.log(`${demon.demonsName} - ${demon.demonsHealth} health, ${(demon.demonsDamage).toFixed(2)} damage`);
    }); 
}

netherRealms("M3ph-0.5s/*-0.5t0.0**");
console.log("------------------------------------------");
netherRealms("M3ph1st0**, Azazel");
console.log("------------------------------------------");
netherRealms("Gos/ho");