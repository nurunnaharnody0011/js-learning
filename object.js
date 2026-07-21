let intro = {
  name: "nody",
  profession: "jobholder",
  age : 25,
  isWork : true,
  location: "aarhus, denmark"
};

delete intro.age;
intro.name = 'nidra';
//console.log(intro);
for (const key in intro){
    //console.log(key)
    const value = intro[key];
    console.log(value)
}