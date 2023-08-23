function cardGame(inputArr) {

    let cardGameObj = {};

    inputArr.forEach(element => {
        let [name, cards] = element.split(": ");
        cards = Array.from(cards.split(", "));

        if (!cardGameObj.hasOwnProperty(name)) cardGameObj[name] = [];
        cardGameObj[name] = cardGameObj[name].concat(cards);
    });

    for (const [key, value] of Object.entries(cardGameObj)) {
        cardGameObj[key] = new Set(value);
    };

    for (const [key, value] of Object.entries(cardGameObj)) {

        let allPoints = 0;
        for (const card of value) {

            let type = card.substr(card.length-1, card.length);
            let typePower = 0;
            if (type === "S") typePower = 4;
            else if (type === "H") typePower = 3;
            else if (type === "D") typePower = 2;
            else if (type === "C") typePower = 1;

            let power = card.substr(0, card.length-1);
            if (power === "J") power = 11;
            else if (power === "Q") power = 12;
            else if (power === "K") power = 13;
            else if (power === "A") power = 14;
            else power = Number(power);

            allPoints += power * typePower;
        };

        console.log(`${key}: ${allPoints}`)
    };
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS','Tomas: 3H, 10S, JC, KD, 5S, 10S','Andrea: QH, QC, QS, QD',
          'Tomas: 6H, 7S, KC, KD, 5S, 10C','Andrea: QH, QC, JS, JD, JC','Peter: JD, JD, JD, JD, JD, JD']);
console.log("---------------");
cardGame(['John: 2C, 4H, 9H, AS, QS','Slav: 3H, 10S, JC, KD, 5S, 10S','Alex: 6H, 7S, KC, KD, 5S, 10C',
          'Thomas: QH, QC, JS, JD, JC','Slav: 6H, 7S, KC, KD, 5S, 10C','Thomas: QH, QC, JS, JD, JC',
          'Alex: 6H, 7S, KC, KD, 5S, 10C','Thomas: QH, QC, JS, JD, JC','John: JD, JD, JD, JD']);