function lettersChangeNumbers(inputStr) {

    let stringArr = inputStr.replace("  ", " ").trim();
    let allSum = 0;
    
    while (stringArr.replace("  ", " ") !== stringArr)
        stringArr = stringArr.replace("  ", " ").trim();
    stringArr = stringArr.split(" ");

    for (let i = 0; i < stringArr.length; i++) {
        let letterFirst = stringArr[i].slice(0, 1);
        let letterLast = stringArr[i].slice(stringArr[i].length - 1, stringArr[i].length);
        let digit = Number((stringArr[i]).substring(1, stringArr[i].length - 1));

        let operationDigit = checkLetterValue(letterFirst);
        if (letterFirst.toLowerCase() === letterFirst) allSum += digit * operationDigit;
        else allSum += digit / operationDigit;

        operationDigit = checkLetterValue(letterLast);
        if (letterLast.toLowerCase() === letterLast) allSum += operationDigit;
        else allSum -= operationDigit;

    }

    console.log(allSum.toFixed(2));
    allSum = 0;

    function checkLetterValue(letter) {     // a-z - 97-122 (-96); A-Z - 65-90 (-64)

        if (letter.toLowerCase() === letter) return Number(letter.charCodeAt(0)-96);
        if (letter.toUpperCase() === letter) return Number(letter.charCodeAt(0)-64);
    }
}

lettersChangeNumbers('A12b s17G');
console.log("---------------");
lettersChangeNumbers('P34562Z q2576f H456z');
console.log("---------------");
lettersChangeNumbers('a1A');