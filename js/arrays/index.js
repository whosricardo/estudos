let fruits = ["Apple", "Orange", "Banana"];

//fruits.push("Coconut"); Adiciona um novo elemento na Array
//fruits.pop(); Remove o ultimo elemento da Array
//fruits.unshift("Mango"); Adiciona um novo elemento no inicio da Array
//fruits.shift(); Remove o primeiro elemento da Array

//let numOfFruits = fruits.length; Tamanho da Array
//let index = fruits.indexOf("Apple") Index de um objeto dentro da Array 

//loops para mostrar cada elemento de um Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruits of fruits) {
    console.log(fruits);
}
