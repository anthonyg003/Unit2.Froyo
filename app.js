//asks user to enter the froyo flavors they want to order
const userinputString = prompt("Please enter the froyo flavors.");
//splits the strings into an array
const stringArr = userinputString.split(",");
//counts how many times a flavor is ordered
const freqCounter = {};
//loop that goes through every string in the array
for (let i = 0; i < stringArr.length; i++) {
  //creates variable to store strings from the array
  const flavor = stringArr[i];
  //loop to add keys and values to freqCounter
  if (flavor in freqCounter) {
    //if flavor is in freqCounter it adds one
    freqCounter[flavor]++;
  } else {
    //if flavor is not in freqCounter it gives it a value of 1
    freqCounter[flavor] = 1;
  }
}

console.log(freqCounter);
