function getOddNumbers(n) {
  let odds = [];
  for(let i=0; i<=n; i++){
      if(i%2!=0){
        odds.push(i);
      }
  }
 
  return odds;
}
 
console.log(getOddNumbers(10));
