let names = ["Nody","ashrif","nidra","risal"];
let rollNumbers = [30,3,35,6]
let isPass =[true,false,true,true]
//console.log(names, rollNumbers, isPass);
//console.log(names.length);
//console.log(names[0], names[2]);
names[0] = "adrita";
//console.log(names);
names.push("rita");
//console.log(names);
//names.pop();
//console.log(
// names);
//names.shift();
//console.log(names);

//console.log(names.includes("nidra"));
//console.log(names.indexOf("nidra"));

for(let i=0; i<rollNumbers.length; i++){
    //console.log(rollNumbers[i]);
}
let i = 0;
while(i<rollNumbers.length) {
    //console.log(rollNumbers[i]);
    i++;
}
let groupA = [1,2,3,4,5];
let groupB = [6,7,8,9,0];
let combined = groupA.concat(groupB);
//console.log(combined);
let portion = names.slice(0,6);
//console.log(names);
//console.log(portion);
let sentence = names.join("-");
//console.log(sentence);

//console.log(Array.isArray(rollNumbers));
//rollNumbers.reverse();
//console.log(rollNumbers);
//rollNumbers.sort();
//console.log(rollNumbers);
rollNumbers.sort((a,b) => a - b);
//console.log(rollNumbers);
let numbers = [45, 60, 78,50,44];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    if (numbers[i]>70) {
        //console.log(numbers[i]);
        sum += numbers[i];
    }
}
//console.log(sum)