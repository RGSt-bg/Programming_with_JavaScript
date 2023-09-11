function encryptingPassword(inputArr) {

    let count = Number(inputArr.shift());
    let pattern = /(?<begin>.+)\>(?<dig>[0-9]{3})\|(?<low>[a-z]{3})\|(?<upp>[A-Z]{3})\|(?<symb>.{3})\<(\k<begin>)/g;
    let inputInfo = {};
    let encryptPassword = "";
    let digits = "";
    let lower = "";
    let upper = "";
    let symbols = "";

    inputArr.forEach(element => {
        let match = pattern.exec(element);
        if (match !== null) {
            inputInfo = match.groups;
            digits = inputInfo["dig"];
            lower = inputInfo["low"];
            upper = inputInfo["upp"];
            symbols = inputInfo["symb"];
            encryptPassword = digits.concat(lower, upper, symbols);
            console.log(`Password: ${encryptPassword}`);
            match = pattern.exec(element);
        }
        else if (match === null) console.log("Try another password!");
    });
}

encryptingPassword(["3","##>00|no|NO|!!!?<###","##>123|yes|YES|!!!<##","$$<111|noo|NOPE|<<>$$"]);
console.log("----------------------------------------------");
encryptingPassword(["5","aa>111|mqu|BAU|mqu<aa","()>111!aaa!AAA!^&*<()","o>088|abc|AAA|***<o","asd>asd|asd|ASD|asd<asd",
                        "*>088|zzzz|ZzZ|123<*"]);