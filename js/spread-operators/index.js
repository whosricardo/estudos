let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimmum = Math.min(...numbers);

let username = "Ricardo Sérgio";
let letters = [...username];
let lettersDash = [...username].join("-"); 

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatos"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(maximum);
console.log(minimmum);
console.log(letters);
console.log(lettersDash);
console.log(foods);


