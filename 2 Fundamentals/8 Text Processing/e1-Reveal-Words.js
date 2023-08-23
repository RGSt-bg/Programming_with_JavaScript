function revealWords(words, sentence) {

    let sentenceArr = sentence.split(" ");
    let wordsArr = words.split(", ");

    wordsArr.forEach(element => {
        let asteriskWord = "*".repeat(element.length);

        for (let i = 0; i < sentenceArr.length; i++) {
            if (asteriskWord === sentenceArr[i]) sentenceArr[i] = element;
        }
    });

    return console.log(sentenceArr.join(" "));
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log("----------------------------------------------------------------------");
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');