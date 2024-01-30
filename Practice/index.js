const string = " Smit ";
const string2 = " Smit Patel ";


// .length
console.log("Length of string :" , string.length);
console.log("Length of string2 :" , string2.length);


// .toUpperCase / .toLowerCase
console.log("Upper Case :" , string.toUpperCase());
console.log("Lower Case :" , string.toLowerCase());



// .slice

console.log("Slice Method :" , string2.slice(4, 5));
console.log("Slice Method Two:" , string2.slice(4));
console.log("Slice Method Two:" , string2.slice(-10));


// .replace

console.log("Replace :" , string2.replace("Smit" , "Ajay" ));

console.log("Not working replace :" , string2.replace("Ajay" , "Raj"));  // It will not working bcz Ajay is not available in actual string...!!


// .replaceAll
const string3 = "smit smit smit";
console.log("Replace All:" , string3.replaceAll("smit" , "Ajay" ));

console.log("Not working replaceAll :" , string3.replaceAll("Ajay" , "Raj"));  // It will not working bcz Ajay is not available in actual string...!!


// .concat

console.log("Concat (+) :" , string.concat("hello"));
console.log("Concat (+) :" , string.concat(string2 , ": string 2 added"));


// .trim

console.log( "Wihtout trimed string :" , string);
console.log( "Trimed string : "  , string.trim());

console.log( "Wihtout trimed string2 : " , string2);
console.log( "Trimed string :",string2.trim());


// .at()

console.log( "at : " , string2.at(5));
console.log( "at -minus value : " , string2.at(-7));

//.substring(start,end)

console.log( "substring : " , string2.substring(5,8));



// padstart / padEnd

const num = "5";
console.log( "padStart : " , num.padStart(5,"7"));
console.log( "padStart : " , string.padStart(8,"smit"));


console.log( "padEnd: " , num.padEnd(5,"7"));
console.log( "padEnd : " , string.padEnd(8,"smit"));


// .repeat

console.log( "Repeat : " , string.repeat(3));

// split 

console.log("split :" , string2.split(" "));



// => String Search 


// indexOf()

console.log("indexOf starting position :" , string2.indexOf("t", 5));
console.log("indexOf :" , string2.indexOf("t"));
console.log("indexOf :" , string2.indexOf("Patel"));
console.log("indexOf not found string :" , string2.indexOf("patel"));


// lastIndexOf()

console.log("lastIndexOf starting position :" , string2.lastIndexOf("t" , 5));
console.log("lastIndexOf :" , string2.lastIndexOf("t"));
console.log("lastIndexOf :" , string2.lastIndexOf("Patel"));
console.log("lastIndexOf not found string :" , string2.lastIndexOf("patel"));


// search 

const string4 = "HELLO hello";

console.log("Search :" , string4.search("e") );
console.log("Search using regular exp. :" , string4.search(/e/gi));

// matchAll

const string5 = "HELLO hello";

console.log("match :" , string5.matchAll("e") );
console.log("match using regular exp. :" , string4.matchAll(/e/gi) );

