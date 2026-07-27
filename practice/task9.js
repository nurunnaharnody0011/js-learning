function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for(let i=0; i<numbers.length; i++){
      let currentelement= numbers[i];
      if(currentelement<smallest){
           secondSmallest=smallest;
           smallest= currentelement;
      }
      else if(currentelement>smallest && currentelement<secondSmallest){
        secondSmallest = currentelement
      }
  }
 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15]));
