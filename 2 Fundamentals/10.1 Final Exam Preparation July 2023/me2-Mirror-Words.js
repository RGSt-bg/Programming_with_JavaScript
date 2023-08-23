function mirrorWords(inputArr) {

    let pattern = /(?<delimiter>[#@?])(?<wordOne>[A-Za-z]{3,})(\k<delimiter>)(\k<delimiter>)(?<wordTwo>[A-Za-z]{3,})(\k<delimiter>)/g;
    let wordCount = 0;
    let wordsArr = [];
    let tmpWord = "";

    while ((words = pattern.exec(inputArr)) !== null) {

        let wordOne = words.groups["wordOne"];
        let wordTwo = words.groups["wordTwo"];
        wordCount++;
        let tmpArr = [];

        for (let i = 0; i < wordTwo.length; i++) {
            tmpArr.push(wordTwo[i]);
        }
        tmpArr = tmpArr.reverse();
        tmpWord = tmpArr.join("");

        if (wordOne === tmpWord) {
            wordsArr.push(wordOne);
            wordsArr.push(wordTwo);
        }

    }

    if (wordCount === 0) console.log("No word pairs found!");
    else console.log(`${wordCount} word pairs found!`);

    if (wordsArr.length === 0) console.log("No mirror words!");
    else {
        console.log("The mirror words are:");
        tmpWord = "";
        for (let i = 0; i < wordsArr.length; i += 2) {
            tmpWord += wordsArr[i] + " <=> " + wordsArr[i+1] + ", ";
        }
        tmpWord = tmpWord.slice(0, tmpWord.length - 2);
        console.log(tmpWord);
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log("---------------------------------------------------------------------------------------------------------");
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
console.log("---------------------------------------------------------------------------------------------------------");
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);