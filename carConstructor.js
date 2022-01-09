'use strict'

function Car (name, milesPergallon) {
    this.name = name
    this.milesPergallon = milesPergallon
    this.tank = 0
    this.odometer = 0
}

Car.prototype.fill = function(gallons){
    if (this.tank < 100) { this.tank = this.tank + gallons
}
return this.tank
}

Car.prototype.drive = function(distance) {
    this.tank = this.tank - distance
    this.odometer = this.odometer + distance
    if(mile > tank) {
        return "I ran out of fuel at x miles!"
    }
    return this.odometer
}

const car = new Car ()

