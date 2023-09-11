function passwordValidator(inputArr) {

    let password = inputArr.shift();

    for (let rows of inputArr) {
        if (rows === 'Complete') {
            break;
        }

        let [command, arg1, arg2] = rows.split(" ");
        if (arg1 === "Upper" || arg1 === "Lower") {
            command += " " + arg1;
            arg1 = arg2;
        }

        switch (command) {

            case 'Make Upper': {
                let index = Number(arg1);
                let searchChar = password.charAt(index);
                let upperChar = searchChar.toUpperCase();
                password = password.replace(searchChar, upperChar);
                console.log(password);
                break;
            }

            case 'Make Lower': {
                let index = Number(arg1);
                let searchChar = password.charAt(index);
                let lowerChar = searchChar.toLowerCase();
                password = password.replace(searchChar, lowerChar);
                console.log(password);
                break;
            }

            case 'Insert': {
                let index = Number(arg1);
                if (index >= 0 && index < password.length) {
                    password = password.slice(0, index) + arg2 + password.slice(index);
                    console.log(password);
                }
                break;
            }

            case 'Replace': {
                let value = Number(arg2);
                value += password.charCodeAt(password.indexOf(arg1)); // Тук не бях добавил password.indexOf(),
                if (value >= 0 && value < 128) {                      // а ползвах само arg1!!! ТИКВА!!!
                    let charNew = String.fromCharCode(value);
                    if (password.includes(arg1) !== false) {
                        arg1 = escapeRegExp(arg1);
                        let regex = new RegExp(arg1, 'g');
                        password = password.replace(regex, charNew);
                    }
                    else break;
                console.log(password);
                }
                break;
            }

            case 'Validation': {
                if (password.length < 8) console.log("Password must be at least 8 characters long!");
                let pattern = /[^\w+][ ]?/g;
                if (pattern.test(password) === true) console.log("Password must consist only of letters, digits and _!");
                pattern = /[A-Z]+/g;
                if (pattern.test(password) === false) console.log("Password must consist at least one uppercase letter!");
                pattern = /[a-z]+/g;
                if (pattern.test(password) === false) console.log("Password must consist at least one lowercase letter!");
                pattern = /[0-9]+/g;
                if (pattern.test(password) === false) console.log("Password must consist at least one digit!");
                break;
            }

            default: break;
        }
    }
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
      
}

passwordValidator(['invalidpassword*','Add 2 p','Replace i -50','Replace * 10','Make Upper 2','Validation','Complete']);
console.log("------------------------------------------------------------------------------");
passwordValidator(['123456789','Insert 3 R','Replace 5 15','Validation','Make Lower 3','Complete']);