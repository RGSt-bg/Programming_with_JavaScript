function pascalCaseSplitter(stringManyWords) {

    let word = stringManyWords[0];
    let wordsArr = [];

    for (let i = 1; i < stringManyWords.length; i++) {
        
        if (stringManyWords[i] === stringManyWords[i].toUpperCase()) {
            wordsArr.push(word);
            word = "";
            word += stringManyWords[i]
        }
        else word += stringManyWords[i];
    }

    wordsArr.push(word);
    console.log(wordsArr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log("--------------------------------------------------------");
pascalCaseSplitter('HoldTheDoor');
console.log("--------------------------------------------------------");
pascalCaseSplitter('ThisIsSoAnnoyingToDo');