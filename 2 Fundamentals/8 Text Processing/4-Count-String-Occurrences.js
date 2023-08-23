function countStringOccurrences(sentence, word) {

    let sentenceArr = sentence.split(" ");
    let count = 0;

    sentenceArr.forEach(element => {
        if (element === word) count++;
    });

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
console.log("-------------------------------------------");
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');