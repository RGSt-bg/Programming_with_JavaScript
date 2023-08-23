function censoredWords(sentence, word) {

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, "*".repeat(word.length));
    }
    console.log(sentence);
}

censoredWords('A small sentence small with small some small words', 'small');
console.log("-------------------------------------------");
censoredWords('Find the hidden word', 'hidden');