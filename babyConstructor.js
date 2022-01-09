class Person {
    constructor(name, age) {
    this.name = name
    this.age = age
    };
};

class Baby extends Person {
    constructor(favoriteToy) {
        this.favoriteToy = favoriteToy
    }
    play () {
        return `Playing with ${this.favoriteToy}`
    }

}

const baby = new Baby('Hasy', 5);

console.log(baby.age)