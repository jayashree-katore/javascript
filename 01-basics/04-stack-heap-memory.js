//++++ Stack Memory ++++++
let name = "Ram";
let anotherName = name;
anotherName = "Sham";

console.log(name);//Ram
console.log(anotherName);//Sham
//all premitive datatypes are stored in stack memory. so changes in copies do not affect the original variable

//+++++ Heap Memory ++++++
let user ={
    name:"Ram",
    age : 20
}

let anothereUser = user;
console.log(user);
console.log(anothereUser);
//both user and anothereUser point to the same object in heap memory

anothereUser.name = "Sham";
console.log(user);//Sham
console.log(anothereUser);//Sham
//changes in anothereUser affect user because objects are stored in heap memory and both variables
//point to the same memory location
