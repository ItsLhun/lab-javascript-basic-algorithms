// Iteration 1: Names and Input
let hacker1 = "Elisa";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gregor";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops
//3.1
let separatedName = "";
for (let i = 0; i < hacker1.length; i++){  
  if(separatedName !== ""){
  separatedName += " ";  
  }
  separatedName += hacker1[i];
}
console.log(separatedName);


//3.2
let reversedName = "";
for (let i = hacker2.length-1; i >= 0; i--){
  reversedName+= hacker2[i];
}
console.log(reversedName);

// Alternative 3.2
console.log(hacker2.split("").reverse().join(""));

//3.3 
switch(true) {
    case hacker1.localeCompare(hacker2) < 0:
      console.log("The driver's name goes first.");
      break;
    case hacker1.localeCompare(hacker2) > 0:
      console.log("Yo, the navigator goes first definitely.");
      break;
    default:
      console.log("What?! You both have the same name?");
}