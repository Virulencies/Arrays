var greetings = ["hello", "howdy", "hi", "sup"];
var oddNumbers = [1, 3, 5, 7];
var boolArray = [true, true, false, true];
var colors = ["blue", "green", "red", "purple", "yellow"];

//this line should reverse the array
greetings.reverse();
console.log(greetings);

//this should add the value to the array
oddNumbers.push(9);
console.log(oddNumbers);

//this should erase the last element of the array
boolArray.pop();
console.log(boolArray);

//this line should return the index of "red", which is 2.
//Note that simply using console.log(colors) will return the entire array unless you store the index within a variable (for some reason I don't understand yet...).
var index = colors.indexOf("red");
console.log(index)
