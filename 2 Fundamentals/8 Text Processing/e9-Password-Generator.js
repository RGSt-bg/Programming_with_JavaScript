function passwordGenerator(inputArr) {

    let password = (inputArr[0].concat(inputArr[1])).toLowerCase().split("");
    let thirdStr = inputArr[2].toUpperCase();
    let j = 0;
    let upperLetter = "";

    for (let i = 0; i < password.length; i++) {
        
        if (password[i] === "a" || password[i] === "e" || password[i] === "i" || password[i] === "o" || password[i] === "u") {

            if (j === thirdStr.length) j = 0;
            upperLetter = thirdStr[j];
            password[i] = upperLetter;
            j++;
        }
    }

    password = password.reverse();
    console.log(`Your generated password is ${password.join("")}`);
}

passwordGenerator([ 'ilovepizza', 'ihatevegetables', 'orange' ]);
console.log("---------------------------------------------------------------");
passwordGenerator([ 'easymoneyeazylife', 'atleasttencharacters', 'absolute' ]);
console.log("---------------------------------------------------------------");
passwordGenerator([ 'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed' ]);