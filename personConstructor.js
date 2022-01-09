function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomac = []
}

Person.prototype.eat = function (someFood){
    if (typeof someFood === 'string' && this.stomac.length < 10){
        this.stomac.push(someFood)
    }
    return this.stomac;
}

Person.prototype.poop = function (){
    return this.stomac = [];
}

Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`
}

const person = new Person('Mary', 25)

console.log(person.eat('apple'))
console.log(person.stomac)
person.poop();
console.log(person.stomac)
console.log(person.toString())