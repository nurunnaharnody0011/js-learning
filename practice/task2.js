function reverseNumber(num) {
  let str = num.toString();
  let reverseWord = "";
  for(let i=str.length-1; i>=0; i--){
    let word = str[i];
    reverseWord += word;
  }
  return Number(reverseWord);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(7));  



