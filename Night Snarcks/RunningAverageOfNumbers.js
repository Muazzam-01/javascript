let sum = 0;
let counter = 0;

let number = Number(prompt("Enter an integer; "));

while (number !== -1) {

    sum += number;
    counter++;

    let Average = sum / counter;

    console.log("Average:", Average);

    number = Number(prompt("Enter another number:"));
}

console.log("Program ended.");
















/*let sum = 0;
let counter = 0;

let number = Number(prompt("Enter an integer:"));
    if (number == -1)
        console.log("please enter another number"); 
    
 while(number !== -1){
    sum += number;
  counter++;

  let Average = sum / counter;
 
     number = Number(prompt("Enter another number:"));
}
 console.log(Average);
*/

