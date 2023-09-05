function winningTicket(inputStr) {

    let pattern = /[0-9a-zA-Z]*?(?<win>[@#$\^]{6,10})[0-9a-zA-Z]*?/;
    let inputArr = inputStr.split(",");

    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].trim();
        let leftStr = "";
        let rightStr = "";
        let leftWin = "";
        let rightWin = "";

        if (inputArr[i].length === 20) {
            leftStr = inputArr[i].substr(0, 10);
            rightStr = inputArr[i].substr(10, 20);

            if ((leftWin = pattern.exec(leftStr)) !== null && (rightWin = pattern.exec(rightStr)) !== null) {
                    leftWin = leftWin.groups["win"];
                    rightWin = rightWin.groups["win"];
                    if (leftWin === rightWin) {
                        if (leftWin.length >= 6 && leftWin.length <= 9) console.log(`ticket "${inputArr[i]}" - ${leftWin.length}${leftWin[0]}`);
                        else console.log(`ticket "${inputArr[i]}" - ${leftWin.length}${leftWin[0]} Jackpot!`);
                    }
                }
            else console.log(`ticket "${inputArr[i]}" - no match`);
        }
        else console.log("invalid ticket");
    }
}

winningTicket("Cash$$$$$$Ca$$$$$$sh");
console.log("---------------------------------");
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey");
console.log("---------------------------------");
winningTicket("validticketnomatch:(");