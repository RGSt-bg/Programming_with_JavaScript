function cutAndReverse(inputStr) {

    let firstString = inputStr
        .slice(0, inputStr.length / 2)
        .split("")
        .reverse()
        .join("");

        let secondString = inputStr
        .slice(inputStr.length / 2)
        .split("")
        .reverse()
        .join("");

        console.log(firstString);
        console.log(secondString);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log("-------------------");
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');