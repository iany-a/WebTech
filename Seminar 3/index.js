function sum(a, b){ //function declaration
    return a + b
}

console.log(sum(2, 3))

function test1(){

    if (1 === 1)
        return; // will return undefined, not 0.

    //return 0;
    // do something
    console.log(1);
}

//test1()
//let t1 = test1(); //visual studio tells us what type of function is, in this case void (hover over it)
console.log(test1());

const sumArrow = (a, b) => a + b;
console.log(sumArrow(2, 3));

const ob = Object.freeze({x: 0, y: 1}) // obiect / array immutable
const arr = Object.freeze(["Ionut", "Mihai"])

console.log(ob);
console.log(arr);

//arr.push("Octavian");
console.log(arr);
ob.d = 3;
console.log(ob);

const myOb = {age: 20, color: "blue"}

function copy(myOb){
    console.log(myOb);
    let ob2 = myOb;
    console.log(JSON.stringify(myOb))
    let ob3 = JSON.parse(JSON.stringify(myOb))
    myOb.age = 30;
    console.log(myOb);
    console.log(ob2);
    console.log(ob3);
}

function deepCopy(ob){
    return JSON.parse(JSON.stringify(ob))
}

copy(myOb);
console.log(myOb);

// Recursivitate

function loop(x){
    console.log(x);

    if (x >= 10)
        return;

    x++;
    loop(x)
}

loop(0);

// Rest Paramters

function test(multipler, ...numbers){
    for (var item of numbers)
        console.log(multipler * item)
}

test(3, 2, 3, 4, 5, 6)

function first(second){
    second()
}

function second(){
    console.log("Second")
}

first(second)

// nested function

function addSquare(a, b){
    const square = x => x * x;

    function x(){
        console.log(1)
    };

    x();

    return square(a);
}

console.log(addSquare(2, 3))

function outSideFunc(x){
    function insideFunc(y)
    {
        return x * y;
    }

    return insideFunc
}

let t = outSideFunc(2);
console.log(t(5));

function Persoana(name){
    let age;
    return {
        getName: function(){
            return name;
        },
        setName: function(newName){
            name = newName;
        },
        getAge: () => age,
        setAge: newAge => age = newAge,
        getNameAndAge: () => `${name} are ${age}. Este un om tanar`,
        name,
        age
    }
}

let p = Persoana("Ionut")
console.log(p);
console.log(p.getName())
p.setAge(20);
console.log(p.getNameAndAge())

class Om{
    constructor(nume, age){
        this.nume = nume;
        this.age = age;
    }
    getName = () => this.nume
}

let p2 = new Om("Ionut", 20);
console.log(p2);

class Student extends Om{
    constructor(nume, age, faculty){
        super(nume, age);
        this.faculty = faculty
    }
}

let p3 = new Student("Mihai", 30, "ASE");
console.log(p3)

const enumJS = Object.freeze({
    BLUE: "BLUE",
    RED: "RED"
})

let table = [
    {id: 1, type: "visible"},
    {id: 3, type: "invisible"},
    {id: 2, type: "active"},
    {id: 4, type: "active"}
]

// filter - similar cu WHERE din sql;
let f = table.filter(item => item.type === "active"); //returns all table rows with the aplicable condition
console.log(f);

console.log(table.find(item => item.type === "invisible")) // returns only first result or undefined

// map - similar cu SELECT din sql
console.log(table.map(item => item.id))

console.log(table.filter(item => item.type === "active").map(item => item.id));

console.log(table.some(item => item.type === "active"));

console.log(table.every(item => item.type === "active"));

let nr = [1, 2, 3, 4, 5];

console.log(nr.reduce((previousValue, currentValue) => previousValue + currentValue))

console.log(nr.join("+"))