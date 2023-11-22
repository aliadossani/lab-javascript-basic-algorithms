// Iteration 1: Names and Input
let hacker1 = "Alia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alia";
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
//3.1 Display the name with a space in between the letters
//Capitalize the driver's name
let driverCapitalized = hacker1.toUpperCase();
let newDriverString = "";

for (let i = 0; i <= driverCapitalized.length - 1; i += 1) {
    newDriverString = newDriverString + driverCapitalized[i] + " ";

}
console.log(newDriverString);

//3.2- return reverse of a string
let newNavigatorString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorString = newNavigatorString + hacker2[i];
}
console.log(newNavigatorString);

//3.3
//using conditions
// if(hacker1===hacker2){
//     console.log("What?! You both have the same name?")
//   }
// else if(hacker1<hacker2){
//     console.log("The driver's name goes first.");
// }
//  else{
//     console.log("Yo, the navigator goes first, definitely.");
//  }

//using for loop
for (let i = 0; i <= Math.min(hacker1.length - 1, hacker2.length - 1); i++) {

    if (i === Math.min(hacker1.length - 1, hacker2.length - 1)) {
        if (hacker1 === hacker2) {
            console.log("What?! You both have the same name?");
        }
    } else if (hacker1[i] === hacker2[i]) {
        continue;
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }

}


//bonus-1
//count the words in the para
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor hendrerit turpis, eu pellentesque ipsum ornare et. Phasellus sit amet vehicula diam, ac convallis sem. Phasellus scelerisque purus commodo, rhoncus nisl ut, malesuada orci. Quisque varius arcu sed massa auctor, quis consectetur risus aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis finibus lorem quis purus iaculis, non rhoncus augue condimentum. Donec feugiat ornare elementum. Aenean mattis ornare justo, in dictum nisi bibendum eu. Nam blandit elementum tortor, id bibendum leo pharetra vitae. Aenean tristique sagittis urna non consectetur. Proin sollicitudin massa sit amet ex sagittis, vitae commodo neque interdum. Aenean at sapien pulvinar nisl fermentum tincidunt a sit amet velit. Sed eget blandit ante. Cras ullamcorper dolor nec fermentum luctus. Pellentesque tincidunt risus quis congue hendrerit. Duis aliquet sem quam. Vestibulum pulvinar lacinia suscipit. Etiam nulla diam, eleifend et est pharetra, tempus vulputate tortor. Pellentesque ut ante ut nunc hendrerit tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra dictum euismod. Quisque et eleifend velit. Nulla facilisi. Duis libero sem, iaculis id nisl vel, tempor auctor tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean neque ipsum, convallis ac justo at, commodo ornare sapien. Fusce feugiat, augue vel mattis rhoncus, turpis enim posuere purus, nec rhoncus nisi sem vitae augue.`
let count = 1;
for (let i = 0; i <= longText.length - 1; i++) {
    if (longText[i] === " ") {
        count += 1;
    }
}
console.log(count);

//count the latin word "et" in the para
let wordCount = 0;
for (let i = 1; i <= longText.length - 2; i++) {
    if (longText[i] + longText[i + 1] === "et") {

        if ((longText[i + 2] === "," || longText[i + 2] === "." || longText[i + 2] === " ") && (longText[i - 1] === "," || longText[i - 1] === "." || longText[i - 1] === " ")) {
            wordCount++;

        }
    }
}
console.log(wordCount);


//bonus-2->check Palindrome
let phraseToCheck = "taco cat";
let newPhrase = "";
for (let i = 0; i <= phraseToCheck.length - 1; i++) {
    if (phraseToCheck[i] !== " ") {
        newPhrase += phraseToCheck[i];
    }
}
console.log(newPhrase);
let reversePhrase = "";
for (let i = newPhrase.length - 1; i >= 0; i--) {
    reversePhrase += newPhrase[i];
}
if (reversePhrase === newPhrase) {
    console.log("Is a palindrome");
}
else {
    console.log("not a palindrome");
}


