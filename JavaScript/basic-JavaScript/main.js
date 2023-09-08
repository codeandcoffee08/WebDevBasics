//object literals
const Contacts = [
    {
        id: 1,
        fullName: "Pedro Penduko",
        isSaved: "Phone"
    },
    {
        id: 2,
        fullName: "Pedro Penduko Sr",
        isSaved: "Phone"
    },
    {
        id: 3,
        fullName: "Nenang Penduko",
        isSaved: "SD"
    },
];

console.log(Contacts[1].fullName);




//Loops for and while


//For
for(let i = 0; i <= 10; i++ ) {

    console.log(i);
}

//while
let i = 0;
while(i <= 10){
    console.log(`While loop ang value ay ${i}`);
    i++;
}


//examples 1
//for
for(let i = 0; i < Contacts.length; i++ ) {

    console.log(Contacts[i].fullName);
};

for(let i = 0; i < Contacts.length; i++ ) {

    console.log(Contacts[i].id);
};

//example 2
//for
for(let contact of Contacts){
    console.log(contact.fullName);
};

//example 3
//for each
Contacts.forEach(function(contact){
    console.log(contact.fullName);
});

//map
const ContactsFullname = Contacts.map
(function(contact){
    return contact.fullName;
});

console.log(ContactsFullname);

//filter
const ContactsPhone = Contacts.filter
(function(contact){

    return contact.isSaved == "Phone";
})

console.log(ContactsPhone);


//JSON
const ContactsJSON = JSON.stringify
(Contacts);

console.log(ContactsJSON);



//conditionals
const x= 300;

if(x == 100){
    console.log("its 100");
}else{
    console.log("Not 100");
};


//3 equals means identical
if(x === 100){
    console.log("its 100");
}else{
    console.log("Not 100");
};


//double condition


if(x === 100 || x > 200){
    console.log("true");
}else{
    console.log("Not 100");
};


//function types

//traditional function


//arrow function es6
const GetSum = (x, y) => 
     x + y;


console.log(GetSum(300, 400));



//OOP - Object Oriented Programming
//constructor function
//class


//class function
//always starts at CAPITAL letter
// class Tao{
//     constructor(firstName, lastName, bt){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.bt = bt;
//     }

//     getFullName(){

//         return `${this.firstName} ${this.lastName}`;
//     }

// }

//intantiate object

const tao1 = new Tao("Pedro", "Penduko", "A" );

const tao2 = new Tao("Nenang", "Penduko", "B");

console.log(tao1.getFullName());
console.log(tao2.getFullName());

//contructor function

function Tao(firstName, lastName, bt){
    this.firstName = firstName;
    this.lastName = lastName;
    this.bt = bt;

    this.getFullName = () =>{
        return `${this.firstName} ${this.lastName}`;
    };

}


//DOM selection
