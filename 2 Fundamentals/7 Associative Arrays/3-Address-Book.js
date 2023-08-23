function addressBook(inputArr) {

    let addressBookObj = {};

    for (let i = 0; i < inputArr.length; i++) {
        let [name, address] = inputArr[i].split(":");
        addressBookObj[name] = address;
    }

    let addressBookArr = Object.entries(addressBookObj).sort();
    
    for (const key in addressBookArr) {
        let tmp = addressBookArr[key];
        console.log(`${tmp[0]} -> ${tmp[1]}`);
    }
}

addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);
console.log("-----------------------------------------------------");
addressBook(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave',
            'George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way','John:Grover Rd','Peter:Huxley Rd',
            'Jeff:Gateway Way','Jeff:Huxley Rd']);