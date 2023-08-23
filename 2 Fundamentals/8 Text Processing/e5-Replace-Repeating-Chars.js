function replaceRepeatingChars(stringRepeatedLetters) {

    let result = stringRepeatedLetters[0];

    for (let i = 1; i < stringRepeatedLetters.length; i++) {

        if (stringRepeatedLetters[i - 1] !== stringRepeatedLetters[i]) result += stringRepeatedLetters[i];
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');