function modernTimesOfHashTag(inputStr) {

    let wordsArr = inputStr.split(" ");

    wordsArr.forEach(element => {

        let word = "";
        let flag = true;

        if (element.length > 1 && element.charAt(0) === "#") {

            word = element.slice(1);
            for (let i = 0; i < word.length; i++) {
                if (!(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90 ||
                      word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122))
                flag = false;
            }

            if (flag) console.log(word);
            else flag = true;
        }
    });
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log("---------------");
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');