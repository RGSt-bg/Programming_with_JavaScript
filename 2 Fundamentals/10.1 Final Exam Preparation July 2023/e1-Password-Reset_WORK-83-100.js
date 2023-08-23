function passwordReset(inputArr) {

    let encriptedPass = inputArr.shift();
    let [command, strOne, strTwo] = inputArr.shift().split(" ");
    let tmpStr = "";

    while (command !== "Done") {

        switch (command) {

            case "TakeOdd": {
                for (let i = 1; i < encriptedPass.length; i += 2) {
                    tmpStr += encriptedPass[i];
                }
                encriptedPass = tmpStr;
                console.log(encriptedPass);
                break;
            }

            case "Cut": {
                strOne = Number(strOne);
                strTwo = Number(strTwo);
                tmpStr = encriptedPass.substring(strOne, strOne + strTwo);
                encriptedPass = encriptedPass.replace(tmpStr, "");
                console.log(encriptedPass);
                break;
            }

            case "Substitute": {
                if (encriptedPass.includes(strOne) !== false) {
                    while (encriptedPass.includes(strOne) !== false) encriptedPass = encriptedPass.replace(strOne, strTwo);
                    console.log(encriptedPass);
                }
                else console.log("Nothing to replace!");
                break;
            }
        }
        
        [command, strOne, strTwo] = inputArr.shift().split(" ");
    }

    console.log(`Your password is: ${encriptedPass}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd",
               "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]);
console.log("------------------------------------------------------");
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy","TakeOdd",
               "Cut 18 2","Substitute ! ***","Substitute ? .!.","Done"]);