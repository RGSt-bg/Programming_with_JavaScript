function cats(catsArr) {

    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let i = 0; i < catsArr.length; i++) {
        let catData = catsArr[i].split(" ");
        let [name, age] = [catData[0], catData[1]];
        let tmpCat = new Cats(name, age);
        tmpCat.meow();
    }

}