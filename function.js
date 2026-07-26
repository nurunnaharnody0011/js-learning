
function fullName(firstName,lastName){
  console.log(firstName +' ' + lastName);
  return fullName;
}

//fullName("Abdur", "rahim");
//fullName("Nurunnahar" , "Nody");

function introduction(){
    const user = {
    name :"Nurunnahar Nody",
    age : 25,
    profession : "jobholder",
    workPlace :"Salling Group",
    hobbies :[ "gardening", "travelling","photography" ],
    address:{
        city:"aarhus",
        code:8270,
        country: "denmark"
    },
    family:{
        father:{
            name : "Noor ali",
            age : 55
        },
        mother:{
            name: "Aysha akter",
            age: 45
        }
    }
}
    return user;
}

    const person = introduction();
    //person.age -=1;
    //console.log(person.age);

    //console.log(person.address.city);
    person.family.sister={
            name: "nidra",
            age:20
        }
        person.family.brother={
            name: "sagor",
            age: 24
        }
        //person.family.mother.age +=1;
    
    //console.log(person.family.mother.age);
    for(const key in person.family){
        const value = person.family[key];
        //console.log(value);
    }


