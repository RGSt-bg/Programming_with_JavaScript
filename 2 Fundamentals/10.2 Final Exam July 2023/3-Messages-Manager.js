function messagesManager(inputArr) {

    let limit = Number(inputArr.shift());
    let peopleObj = {};
    let arr = [];

    for (let instruction of inputArr) {
        
        let [command, arg1, arg2, arg3] = instruction.split("=");

        if (instruction === 'Statistics') {
            break;
        }

        switch (command) {

            case 'Add': {
                let name = arg1;
                let sent = Number(arg2);
                let received = Number(arg3);
                if (peopleObj.hasOwnProperty(name) !== true) {
                    arr = JSON.parse(JSON.stringify(arr));
                    arr = [];
                    arr[0] = sent;
                    arr[1] = received;
                    peopleObj[name] = arr;
                }
                break;
            }

            case 'Message': {
                let sender = arg1;
                let receiver = arg2;
                if (peopleObj.hasOwnProperty(sender) && peopleObj.hasOwnProperty(receiver)) {
                    peopleObj[sender][0] += 1;
                    peopleObj[receiver][1] += 1;
                }
                if ((peopleObj[sender][0] + peopleObj[sender][1]) >= limit) {
                    delete peopleObj[sender];
                    console.log(`${sender} reached the capacity!`)
                }
                if ((peopleObj[receiver][0] + peopleObj[receiver][1]) >= limit) {
                    delete peopleObj[receiver];
                    console.log(`${receiver} reached the capacity!`)
                }
                break;
            }

            case 'Empty': {
                let name = arg1;
                if (peopleObj.hasOwnProperty(name) === true) {
                    delete peopleObj[name];
                }
                else if (name = "All") peopleObj = {};
                break;
            }

            default: break;
        }
    }
    let objLength = Object.keys(peopleObj).length;
    console.log(`Users count: ${objLength}`);
    for (const user in peopleObj) {
        let messages = peopleObj[user][0] + peopleObj[user][1];
        console.log(`${user} - ${messages}`);
    }
}

messagesManager(["10","Add=Berg=9=0","Add=Kevin=0=0","Message=Berg=Kevin","Add=Mark=5=4","Statistics"]);
console.log("-----------------------------------------------------------");
messagesManager(["20","Add=Mark=3=9","Add=Berry=5=5","Add=Clark=4=0","Empty=Berry","Add=Blake=9=3","Add=Michael=3=9",
                    "Add=Amy=9=9","Message=Blake=Amy","Message=Michael=Amy","Statistics"]);
console.log("-----------------------------------------------------------");
messagesManager(["12","Add=Bonnie=3=5","Add=Johny=4=4","Empty=All","Add=Bonnie=3=3","Statistics"]);