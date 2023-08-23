function matchFullName(inputStr) {

    let pattern = /\b[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+\b/gm;
    let validNames = [];
    let validName;

    while ((validName = pattern.exec(inputStr)) !== null) validNames.push(validName[0]);

    console.log(validNames.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");