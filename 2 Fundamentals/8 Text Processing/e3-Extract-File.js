function extractFile(inputStr) {

    let wordsArr = inputStr.split("\\");
    let fileName = "";
    let fileExt = "";

    wordsArr.forEach(element => {

        if (element.indexOf(".") > -1)

            if (element.indexOf(".") === element.lastIndexOf(".")) {
                [fileName, fileExt] = element.split(".");
            }
            else {
                fileName = element.slice(0, element.lastIndexOf("."));
                fileExt = element.slice(element.lastIndexOf(".") + 1);
            }
    });
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log("---------------");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');