const student = {
    name: "utsho",
    age: 25,
    university:"DIU",
    department: "CSE"
};
function objOperation(obj){
    for (let key in obj){
        console.log(key);
    }
    for (let key in obj){
        console.log(obj[key]);
    }
    for (let key in obj){
        console.log(key, ":", obj[key]);
    }
    let objectCount = Object.keys(obj).length;
    console.log("Total properties :", objectCount)
    let hasEmailProperty = obj.hasOwnProperty("email");
    console.log(hasEmailProperty)
}
//objOperation(student)


// let number =[12,23,34,45,56,67,78,89];
// let evenNumbers=[];
// for(let i=0; i<number.length; i++){
//    if(number[i]%2==0){
//       evenNumbers.push(number[i]);
//    }
// }
// console.log(evenNumbers)
// let sum=0
// for(let key of evenNumbers){
//     sum+=key;
// }
// console.log(sum);

function evenNumber(number){
    let evenNumbers=[];
for(let i=0; i<number.length; i++){
   if(number[i]%2==0){
      evenNumbers.push(number[i]);
   }
}
return evenNumbers;
}
function sumOfEvenNumbers(evenNumbers){
    let sum=0
for(let key of evenNumbers){
    sum+=key;
}
return sum;
}
let evenNumberArray = evenNumber([2,3,4,5,6,7,8,9,12,23]);
console.log(evenNumberArray);
let sum= sumOfEvenNumbers(evenNumberArray);
console.log(sum)