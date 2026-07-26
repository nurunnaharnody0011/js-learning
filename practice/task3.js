function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
   for(let i=0; i<str.length; i++){
       total = total * Number(str[i]);
   }
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6

console.log(productOfDigits(4040)); 
