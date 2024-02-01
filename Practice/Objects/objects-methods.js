const objOne = {
    id1: 1,
    name1: "smit",
    gender1: "male",
};

const objTwo = {
    id: 2,
    name: "rani",
    gender: "female",
    mobile: 9099456236
}


// Object.assign

console.log("Object.assign(source, target)");
const opThree = Object.assign({}, objTwo);
console.log(opThree);

console.log(objOne);

//  Object.create
console.log("Object.create");
const objCreated = Object.create(objTwo);

console.log(objCreated);

objCreated.name = "raja";
objCreated.id = 3;
objCreated.gender = "not mentioned";

console.log(objCreated);


// Object.keys
console.log("Object.keys");
console.log(Object.keys(objOne));
console.log(Object.keys(objTwo));
console.log(Object.keys(objOne, objTwo));

// Object.value

console.log("Object.value");
console.log(Object.values(objOne));
console.log(Object.values(objTwo));
console.log(Object.values(objOne, objTwo));


// Object.entires

console.log("Object.entires");

console.log(Object.entries(objOne));
console.log(Object.entries(objTwo));
console.log(Object.entries(objOne, objTwo));

// Object.freeze


const freezeObj = {
    id1: 1,
    name1: "smit",
    gender1: "male",
};

Object.freeze(freezeObj);

console.log("freezObj is freezed");


// Object.isFrozen
console.log("freezObj is freeze or not");
console.log(Object.isFrozen(freezeObj));
console.log(Object.isFrozen(objOne));



// Object.seal

const sealObj = {
    id1: 1,
    name1: "smit",
    gender1: "male",
};

Object.seal(sealObj);

console.log("sealObj is sealed");

// Object.isFrozen

console.log("sealObj is seal or not");
console.log(Object.isSealed(sealObj));
console.log(Object.isSealed(objOne));

// Object.is

console.log(Object.is(objOne, objOne));
console.log(Object.is(objOne, objTwo));


const user = {
    id: 1,
    name: 'smit patel',
    company: {
        id: 10,
        name: 'isummation'
        ,
    },
    city : 'Ahmedabad'
}

// Object destructuring

const { id : userId , name : userName , company :{name:companyName} } = user;

console.log( userId , userName ,companyName );


