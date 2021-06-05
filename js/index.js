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


// bonus 1

// did I just cheat removing the paragraph break? 
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet pellentesque libero, non vestibulum tortor luctus vitae. Praesent magna purus, aliquet ut sollicitudin eu, tincidunt aliquet ligula. Etiam eu quam mi. Vivamus fermentum mi sit amet vehicula dictum. Cras auctor lobortis magna, ut egestas massa hendrerit quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis consequat pharetra. Pellentesque rutrum justo orci, eu vehicula ligula suscipit sed. Phasellus placerat erat leo, at posuere nisl placerat ut. Suspendisse posuere commodo suscipit. Proin scelerisque, neque a suscipit eleifend, tellus ipsum varius ipsum, id dapibus purus neque porta felis. Vestibulum arcu ex, dapibus in rhoncus id, tincidunt et eros. Duis consequat turpis a dolor sollicitudin, a fermentum sem suscipit. Pellentesque ullamcorper orci sed consectetur malesuada. Maecenas vulputate rhoncus auctor. Duis sit amet est dapibus, placerat sem dictum, porttitor elit. Etiam non tortor commodo, venenatis sem euismod, tincidunt ligula. Vestibulum pretium lorem magna, ac blandit nunc sodales nec. Ut tellus massa, vehicula placerat vulputate vel, efficitur a arcu. Vestibulum volutpat neque mauris, a efficitur massa tristique a. Duis tristique eget risus et commodo. Mauris vestibulum, elit a varius ultricies, mauris enim luctus mauris, vel ullamcorper enim lacus vitae lectus. Donec commodo justo ut odio interdum, eget molestie nunc eleifend. Aliquam ante purus, tempus maximus placerat euismod, faucibus ut lectus. Nam commodo eleifend ante, sit amet vehicula risus tincidunt non. Nullam consectetur facilisis ligula, eu finibus mi tempus et. Maecenas suscipit, est sit amet euismod sodales, elit urna suscipit turpis, ac interdum eros nulla vel tortor. In purus neque, auctor tincidunt sagittis pulvinar, maximus imperdiet metus. Nulla tellus massa, volutpat et leo non, tincidunt scelerisque lectus. Nam rutrum sapien a turpis sodales consectetur. Vivamus aliquam massa id lectus blandit fringilla. Donec facilisis pulvinar lectus non consectetur.";

let wordsArray = paragraphs.toLowerCase().split(" ");

console.log(wordsArray.length);


let etCount = 0;
for (let word of wordsArray){
  if (word === "et" || word === "et."){ // this feels wonky
    etCount++;
  }
}

console.log(etCount);

// bonus 2

let phraseToCheck = "Amor, Roma";

let phraseNoPunctuation = "";
  for (let i = 0; i < phraseToCheck.length; i++){
    if (phraseToCheck.toLowerCase().codePointAt(i) >= 97 && phraseToCheck.toLowerCase().codePointAt(i) <= 122){
      phraseNoPunctuation += phraseToCheck.toLowerCase()[i];  
    }
}
let helperReverse = ""
for (let i = phraseNoPunctuation.length-1; i >= 0; i--){
  helperReverse+= phraseNoPunctuation[i];
}
console.log(helperReverse);

// this is the bit that actually returns true or false if they are palindrome 
phraseNoPunctuation === helperReverse ? true : false;
