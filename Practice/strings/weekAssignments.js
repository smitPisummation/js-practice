// 1.  Write a JavaScript function to check whether an 'input' is a string or not.

document.write("1.  Write a JavaScript function to check whether an 'input' is a string or not.");
document.write("<br />");
document.write("<br />");

// function isString(element) {
//     if (typeof (element) === 'string') {
//         document.write("true");
//     } else {
//         document.write("False")
//     }
// }
// const name = "smit";
// console.log(isString(name));
// document.write("<br />");
// console.log(isString(52));

// document.write("<br />");
// document.write("<br />");
// document.write("<br />");


// 2. Write a JavaScript function to check whether a string is blank or not.

document.write("2. Write a JavaScript function to check whether a string is blank or not.");
document.write("<br />");
document.write("<br />");

function isStringBlank(element) {
    if (element.length === 0 && typeof (element) === 'string') {
        document.write("true");
    } else {
        document.write("False")
    }
}
const name = "";
console.log(isStringBlank(name));
document.write("<br />");
console.log(isStringBlank(52));