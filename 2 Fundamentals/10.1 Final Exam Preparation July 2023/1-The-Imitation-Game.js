function theImitationGame(inputArr) {

    let encryptedText = inputArr.shift();
    let [command, index, string] = inputArr.shift().split("|");

    while (command !== "Decode")

        switch (command) {

            case "ChangeAll": {
                while (encryptedText.indexOf(index) !== -1)
                    encryptedText = encryptedText.replace(index, string);
                [command, index, string] = inputArr.shift().split("|");
                break;
            }
            case "Insert": {
                index = Number(index);
                let tmpArr = encryptedText.split("");
                tmpArr.splice(index, 0, string);
                encryptedText = tmpArr.toString();
                while (encryptedText.indexOf(",") !== -1)
                    encryptedText = encryptedText.replace(",", "");
                [command, index, string] = inputArr.shift().split("|");
                break;
            }
            case "Move": {
                index = Number(index);
                let tmpStrBegin = encryptedText.slice(0, index);
                let tmpStrEnd = encryptedText.slice(index);
                encryptedText = tmpStrEnd + tmpStrBegin;
                [command, index, string] = inputArr.shift().split("|");
                break;
            }
    }
    console.log(`The decrypted message is: ${encryptedText}`)
}

theImitationGame(['zzHe','ChangeAll|z|l','Insert|2|o','Move|3','Decode']);
console.log("------------------------------------");
theImitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode']);