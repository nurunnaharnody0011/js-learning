

// let arr = [20,44,2,19,6,8];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i];
// }
// let avg = sum/ arr.length;

// console.log(avg);

function gettingAvg(arr){
let sum = 0;
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    sum += arr[i];
}
let avg = sum/ arr.length;

return avg;
}

const array = [22,44,55,66,77,3,33]
//console.log(gettingAvg(array));

// let arr = [30,22,33,44,23,45,56,44,34]
// let value = 50;
// let filterArray = [];
// for(let i=0; i<arr.length; i++){
//     //console.log(arr[i]);
//     if(arr[i]>value){
//       filterArray.push(arr[i])
//     }
// }
// console.log(filterArray)

function filter(arr,value){
let filterArray = [];
for(let i=0; i<arr.length; i++){
    //console.log(arr[i]);
    if(arr[i]>value){
      filterArray.push(arr[i])
    }
}
return filterArray;
}

console.log(filter([22,33,44,55], 35));