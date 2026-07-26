
// let str = "madam";
// let reversestr="";

// for(let i=str.length-1; i>=0; i--){
//     let letter = str[i];
//     reversestr=reversestr+letter;
    
// }
// console.log(reversestr);

// if(str === reversestr){
//     console.log("Palindrome");
// }
// else{
//     console.log("not")
// }

function isPalindrome(str){
    let reversestr="";
for(let i=str.length-1; i>=0; i--){
    let letter = str[i];
    reversestr=reversestr+letter; 
}
console.log(reversestr);

if(str === reversestr){
    return true;
}
else{
    return false;
}
}

//const palindrome= isPalindrome("deed")
//console.log(palindrome);


// let string = "nody nodt hhh hhh";
// let stringArray = string.split(" ");
// console.log(stringArray.length);

function stringLength(string){
       let stringArray = string.split(" ");
       return stringArray.length ;  
}
//console.log( stringLength("bb bb bb bb bb"))

// let arr =[20,30,60,80,90,222];
// let largest = arr[0];
// for( let i= 0; i<=arr.length; i++){
//     let currentElement = arr[i]
//     if(currentElement>largest){
//         largest = currentElement;
//     }
   
// }
// console.log(largest)

// function largestValue(arr){
//     let largest = arr[0];
// for( let i= 0; i<=arr.length; i++){
//     let currentElement = arr[i]
//     if(currentElement>largest){
//         largest = currentElement;
//     }
   
// }
// return largest;
// }

// const result = [20,70,400,44,22,87,44,99]
// console.log(largestValue(result))

function smallestValue(arr){
    let smallest = arr[0];
for( let i= 0; i<=arr.length; i++){
    let currentElement = arr[i]
    if(currentElement<smallest){
        smallest = currentElement;
    }
   
}
return smallest;
}

const result = [2,20,70,400,44,22,87,44,99]
console.log(smallestValue(result))
