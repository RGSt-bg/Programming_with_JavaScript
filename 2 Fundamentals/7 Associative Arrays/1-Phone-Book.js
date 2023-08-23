function phoneBook(inputArr) {

    let phoneObj = {};

    for (let i = 0; i < inputArr.length; i++) {
        let [name, number] = inputArr[i].split(" ");
        phoneObj[name] = number;
    }

    for (const key in phoneObj) {
        console.log(`${key} -> ${phoneObj[key]}`);
    }
    
}

phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);
console.log("-----------------------------------------------------");
phoneBook(['George 0552554','Peter 087587','George 0453112','Bill 0845344']);