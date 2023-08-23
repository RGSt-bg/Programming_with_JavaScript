function numbers(strNumbers) {

    let arrNumbs = strNumbers.split(" ").map(Number);
    let averArr = 0;
    let newArrNumbs = [];
    let counter = 0;

    arrNumbs.forEach(num => averArr += num);
    averArr = averArr / arrNumbs.length;

    arrNumbs = arrNumbs.sort((a, b) => b - a);

    for (let i = 0; i < arrNumbs.length; i++) {
        if (counter < 5)
            if (arrNumbs[i] > averArr) {
                newArrNumbs.push(arrNumbs[i]);
                counter++;
            }
        else break;
    }

    if (counter > 0) console.log(newArrNumbs.join(" "));
    else console.log("No");

}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');