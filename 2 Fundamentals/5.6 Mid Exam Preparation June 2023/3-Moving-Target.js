function movingTarget(inputArr) {

    let targets = inputArr.shift().split(" ").map(Number);
    let targetsLength = 0;
    let i = 0;
    let [action, index, value] = inputArr[i].split(" ");

    while (action !== "End") {

        [action, index, value] = inputArr[i].split(" ");
        index = Number(index);
        value = Number(value);
        targetsLength = targets.length;

        switch (action) {

            case "Shoot": {
                if (index >= 0 && index < targetsLength)
                    if (targets[index] - value <= 0) targets.splice(index, 1);
                    else targets[index] = targets[index] - value;
                    i++;
                    break;
            }

            case "Add": {
                if (index >= 0 && index < targetsLength) targets.splice(index, 0, value);
                else console.log("Invalid placement!");
                i++;
                break;
            }

            case "Strike": {
                let radLeft = index - value;
                let radRight = index + value;
                if (radLeft < 0 || radRight >= targetsLength) console.log("Strike missed!");
                else targets.splice(radLeft, 1 + 2 * value);
                i++;
                break;
            }
        }
    }
    return console.log(targets.join("|"));
}

movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
//https://judge.softuni.org/Contests/Practice/Index/2305#2