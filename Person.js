'use strict';
function Person (name, age) {
        this.name = name;
        this.age = age;
}

Person.prototype.compareAge = function(person) {
    if(person.age > this.age){
        return `${person.name} is older than me`
    }
    else if (person.age < this.age) {
        return `${person.name} is younger than me`
    }
    else if(person.age === this.age) {
        return `${person.name} is the same age as ${this.name}}`
    } else 
    return 'Someting wrong'
}

const p1 = new Person('Samuel', 24);
const p2 = new Person('Joel', 36)
const p3 = new Person('Lily', 24)

console.log(p1.compareAge(p2))


