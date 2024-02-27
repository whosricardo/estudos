/*function openFridge(...foods) {
    console.log(foods);
}*/

/*function getFood(...foods) {
    return foods;
}*/

/*const food1 = "pizza";
const food2 = "ice cream";
const food3 = "hamburguer";
const food4 = "hotdog";*/

//openFridge(food1, food2, food3, food4);

//const foods = getFood(food1, food2, food3, food4);

//console.log(foods);

/*function sum(...numbers){
    
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

function getAvarage(...numbers){
    
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = getAvarage(75, 100, 85, 90);

console.log(total);*/

//const total = sum(1, 2, 3, 4, 5);

//console.log(`Your total is $${total}`);

function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);