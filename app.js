// Assignment 1 : Array operations
let fruits=[]
fruits.push("Apple", "Banana", "Orange")
fruits.splice(0,1)
fruits.push("Grape")
fruits.splice(1,1,"Pear")
console.log(fruits)

// Assignment 2: Object Operations
let person={

}
person.name = "John"
person.age= "30"
person.city="New York"
delete person.age
person.job="Engineer"
person.city="San Francisco"
console.log(person)

// Assignment 3: Array of Objects Operations
let cars=[]
cars.push({make:"Toyota", model: "Camry", year: 2018}, {make:"Toyota", model: "Camry", year: 2018}, {make:"Toyota", model: "Camry", year: 2018})
console.log(cars)
let car2={
    make: "Honda",
    model: "Civic",
    year: 2020
}
cars.push(car2)
console.log(cars)
cars[1].model="Accord"
console.log(cars[1])
