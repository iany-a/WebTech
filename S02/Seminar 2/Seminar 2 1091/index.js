// var, const, let

var x = 0;
const y = 7;
let z = 8;

// x = "Ionut";
// x = false;
// x = []
//console.log(x);

//y = 9;

if (1 == 1){
    var a = 8;
    let b = 9;
}

// console.log(a);
// console.log(b);

// operators

console.log(3 + 3);
console.log(3 - 3);

console.log(3 + "3");
console.log(3 - "3");

console.log(3 + "Ana");
console.log(3 - "Ana");

console.log(1 + +"2" + 3);

console.log(typeof("2"))
console.log(typeof(+"2"))

if (1 == "1") // comparatie pe valoare
    console.log("a intrat")
else
    console.log("nu a intrat")

if (1 === "1") // comparatie pe tip si valoare
    console.log("a intrat")
else
    console.log("nu a intrat")

let g = "";

if (!g)
    console.log("Null check")

if (null == undefined)
    console.log("Null")

let arr = ["Ionut", "Mihai", "Marcela"];

// for in - similar cu forul clasic
for (let i in arr)
    console.log(i)

// for of - foreach clasic
for (let i of arr)
    console.log(i)

let ob = {
    x: 1,
    y: 2
}

for (let i in ob)
    console.log(i)

// for (let i of ob)
//     console.log(i)

arr.forEach((item, index) => {
    console.log(item + index)
})

arr.push("Octavian", "Mihaela", "Ioana");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("Alexandra");
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2, 0 ,"aaaa")
console.log(arr);

arr.splice(2, 2 ,"bbbb", "cccc")
console.log(arr);