function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for(let i=0; i<words.length; i++){
     let currentElement = words[i];
     if(currentElement.length<shortest.length){
     shortest=currentElement;
  }
  }
  return shortest;
}
 
console.log(findShortestWord("JavaScript  is a fun language")); // Expected: "a"
