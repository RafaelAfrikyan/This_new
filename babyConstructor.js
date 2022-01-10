class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    };
};

class Baby extends Person {
    constructor(name, age, favoriteToy) {
        super(name, age)
        this.favoriteToy = favoriteToy
    }
    play () {
        return `Playing with ${this.favoriteToy}`
    }
}

const baby = new Baby('Hasy', 5, 'ball');

console.log(baby instanceof Person)
