// Iteration 1: Names and Input
let hacker1 = "Alia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Carina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`)
}
else if (navigatorLength > driverLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops
//3.1
//Capitalize the driver's name
let driverCapitalized = hacker1.toUpperCase();
let newDriverString = "";

for (let i = 0; i <= driverCapitalized.length - 1; i += 1) {
    newDriverString = newDriverString + driverCapitalized[i] + " ";

}
console.log(newDriverString);

//3.2
let newNavigatorString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorString = newNavigatorString + hacker2[i];
}
console.log(newNavigatorString);

//3.3


