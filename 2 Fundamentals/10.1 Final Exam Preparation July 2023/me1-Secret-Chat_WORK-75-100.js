function secretChat(inputArr) {

    let tempArr = JSON.parse(JSON.stringify(inputArr));
    let message = tempArr.shift();
    let [command, strOne, strTwo] = tempArr.shift().split(":|:");

    while (command !== 'Reveal') {

        switch (command) {

            case 'ChangeAll': {

                if (message.includes(strOne) !== false) {
                    while (message.includes(strOne) !== false) message = message.replace(strOne, strTwo);
                    console.log(message);
                };
                [command, strOne, strTwo] = tempArr.shift().split(":|:");
                break;
            }

            case 'Reverse': {

                if (message.includes(strOne) !== false) {
                    message = message.replace(strOne, "");
                    let tmpArr = [];
                    let tmpStr = "";
                    for (let i = 0; i < strOne.length; i++) {
                        tmpArr.push(strOne[i]);
                    }
                    tmpArr = tmpArr.reverse();
                    tmpStr = tmpArr.join("");
                    message += tmpStr;
                    console.log(message);
                }
                else console.log("error");

                [command, strOne, strTwo] = tempArr.shift().split(":|:");
                break;
            }

            case 'InsertSpace': {

                strOne = Number(strOne);
                if (strOne >= 0 && strOne < message.length)
                    if (strOne >= 0 && strOne < message.length) {
                        let tmpStr = "";
                        tmpStr += " " + message.charAt(strOne);
                        message = message.replace(message.charAt(strOne), tmpStr);
                        console.log(message);
                    };
                [command, strOne, strTwo] = tempArr.shift().split(":|:");
                break;
            }
        }
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat(['heVVodar!gniV','ChangeAll:|:V:|:l','Reverse:|:!gnil','InsertSpace:|:5','Reveal']);
console.log("-------------------------------------------------------------------------------");
secretChat(['Hiware?uiy','ChangeAll:|:i:|:o','Reverse:|:?uoy','Reverse:|:jd','InsertSpace:|:3','InsertSpace:|:7','Reveal']);