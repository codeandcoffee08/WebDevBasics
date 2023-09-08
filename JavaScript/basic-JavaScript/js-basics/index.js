// This is my first JavaScript code!
console.log('Hello World');


let person = {
    name: 'Dennis',
    age: 29
};
person.name = 'Deodennis';
console.log(person.name);

let selectedColors = ['red', 'blue', 'yellow'];
selectedColors[3] = 'violet'
console.log(selectedColors);

function great(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);

}

great('Dennis', 'Decena');
great('Rhubie', 'Decena');

function square(number){
    return number * number;
}


console.log(square(5));