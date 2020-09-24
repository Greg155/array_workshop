let listOfNumber = new Array(10);
listOfNumber = [0,1,2,3,4,5,6,7,8,9];
console.log("Array = " + listOfNumber);

console.log(listOfNumber);

let reverseList = listOfNumber.reverse();
console.log("Array reverse : " + reverseList);

let firstLittleArray = [4,5,6,7,8];
console.log("First little array is : " + firstLittleArray);

let secondLittleArray = [4,5,6,7,8];
console.log("Second little array is : " + secondLittleArray);

let bigArray = [];

for(let i = 0; i<littleArray.length; i++){
    bigArray[i] = (firstLittleArray[i] + secondLittleArray[i]);

}
console.log(bigArray);