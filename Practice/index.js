const string = "'    Smit     '";
const string2 = "    'Smit Patel'    ";


// .length
console.log("Length of string :" , string.length);
console.log("Length of string2 :" , string2.length);


// .toUpperCase / .toLowerCase
console.log("Upper Case :" , string.toUpperCase());
console.log("Lower Case :" , string.toLowerCase());



// .slice

console.log("Slice Method :" , string2.slice(4, 7));
console.log("Slice Method Two:" , string2.slice(4));


// .replace

console.log("Replace :" , string2.replace("Smit" , "Ajay" ));

console.log("Not working replace :" , string2.replace("Ajay" , "Raj"));  // It will not working bcz Ajay is not available in actual string...!!


// .concat

console.log("Concat (+) :" , string.concat("hello"));
console.log("Concat (+) :" , string.concat(string2 , ": string 2 added"));


// .trim

console.log( "Wihtout trimed string :" , string)
console.log( "Trimed string : "  , string.trim());

console.log( "Wihtout trimed string2 : " , string2)
console.log( "Trimed string :",string2.trim());


// .at()

console.log( "at : " , string2.at(5))
console.log( "at -minus value : " , string2.at(-7))

//

