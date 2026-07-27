function isPalindrome(str) {
    let reverseStr ="";
      for(let i=str.length-1; i>=0; i--){
        let letter=str[i];
       reverseStr=reverseStr+letter;
      }
      if(reverseStr===str){
        return true;
      }
      else{
        return false;
      }
}
console.log(isPalindrome("level")); 
console.log(isPalindrome("hello")); 
