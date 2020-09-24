let listOfNumber = new Array(10);
listOfNumber = [0,1,2,3,4,5,6,7,8,9];
console.log("Array = " + listOfNumber);

console.log(listOfNumber);

let reverseList = listOfNumber.reverse();
console.log("Array reverse : " + reverseList);

let firstLittleArray = [1,1,1,1,1,1];
console.log("First little array is : " + firstLittleArray);

let secondLittleArray = [2,3,4,5,6];
console.log("Second little array is : " + secondLittleArray);

let bigArray = [];
let bigger=-1;

if(firstLittleArray.length > secondLittleArray.length){
  bigger = firstLittleArray.length;
}else{
  bigger= secondLittleArray.length
}

for(let i = 0; i<bigger; i++){
    if(!firstLittleArray[i]){
      bigArray[i] = secondLittleArray[i];
    }else if(!secondLittleArray[i]){
      bigArray[i] = firstLittleArray[i];
    }else{
      bigArray[i] = (firstLittleArray[i] + secondLittleArray[i]);
    }
  }
console.log("Big array is " +bigArray);

//////////////////////////////////
let array1 = [1,2,3];
let array2 = [11,12,13,14];
let sum = [];
let bigger, smaller 

if(array1.length > array2.length){
    bigger = array1;
    smaller = array2;
}
else{
    bigger = array2;
    smaller = array1;
}

for(let i=0;i<bigger.length;i++){
      i < smaller.length ? sum[i] = bigger[i] + smaller[i] : sum[i] = bigger[i]
}
console.log("add "+ sum)

