function countMultiplesOfThree(numbers) {
  let count = 0;
  for(let num of numbers){
     if(num%3===0){
        let allNumber = num;
        count ++;
     }
    
  }
 
  return count;
}
 

//console.log(countMultiplesOfThree([9,12,6,3, 4, 6, 7, 9, 10]));

function averageOfArray(numbers) {
  let total = 0;
  let sum=0;
    for(let i=0; i<numbers.length; i++){
        let num= numbers[i];
        sum=sum+num;
        let quantity = numbers.length;
        total=sum/quantity;
    }
 
  return total;
}
//console.log(averageOfArray([2, 4, 6, 12]));


function keepEvenNumbers(numbers) {
  let result = [];
    for(let i=0; i<numbers.length; i++){
      if(numbers[i]%2===0){
        result.push(numbers[i]);
      }
    }
 
  return result;
}
 
//console.log(keepEvenNumbers([8, -5, 8, -1, 0,-8]));


function listKeys(obj) {
  let keys = [];
 for(let key in obj){
   keys.push(key);
 }
  return keys;
}
 
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
