//even and odd number function

function numberIdentity(number){
    if (number%2==0){
        return "even number";
    }
    else{
        return "odd number";
    }
}

//console.log(numberIdentity(80))



// sum of 1+n

function sumOffAll(number){
    let sum = 0;
    for(i=1; i<=number; i++){
          sum= sum+i;
    }
    return sum;
}
//console.log(sumOffAll(9));

//. factorial

function getFactorial(number){
    let result=1;
     for(i=1; i<=number; i++){
        result=result*i;
     }
     return result;
}
//console.log(getFactorial(70));

function fizzBuzzNumber(number){
    for(let i=1; i<=number; i++){
       //console.log(i)
       if(i%3===0 && i%5===0){
        console.log("fizzbuzz");
       }
       else if(i%3===0){
        console.log("fizz");
       }
       else if(i%5===0){
       console.log("buzz");
       }
       else{
         console.log(i);
       }
    }
}
//fizzBuzzNumber(90);


function reverseString(word){
    let reverseWord = "";
    for(let i=word.length - 1; i>=0; i--){
         let letter = word[i];
         reverseWord += letter;
    }
    return reverseWord;
}
//console.log(reverseString("nody hello"));

let str = "i am nody";
let vowel = "aeiou";
let count = 0;
for(let i=0; i<str.length; i++){
    let letter = str[i];
    console.log(letter);
    if(vowel.includes(letter)){
        console.log(letter  ,"= vowel");
        count++;
    }
}
console.log("count>>" ,count)