
const myName = 'John Doe';
const myAge = 25;

const suma = (a:number, b:number )=>{

    return a + b;

}

suma(5, 11);

class Person {
    // private age;
    // private name;

    constructor(private name: string,private age: number){}

    getSummary(){
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}


const john = new Person('John Gomez', 23);
john.getSummary();