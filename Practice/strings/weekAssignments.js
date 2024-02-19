// 1.  Write a JavaScript function to check whether an 'input' is a string or not.

document.write("1.  Write a JavaScript function to check whether an 'input' is a string or not.");
document.write("<br />");
document.write("<br />");

function isString(element) {
    if (typeof (element) === 'string') {
        document.write("true");
    } else {
        document.write("False")
    }
}
const name1 = "smit";
console.log(isString(name1));
document.write("<br />");
console.log(isString(52));

document.write("<br />");
document.write("<br />");
document.write("<br />");



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
console.log(isStringBlank("sdf sdfsd"));

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 3. Write a JavaScript function to split a string and convert it into an array of words.

document.write("3. Write a JavaScript function to split a string and convert it into an array of words.");
document.write("<br />");
document.write("<br />");

function stringToArray(element) {
    const str = element;
    const convertedStr = str.split(" ");

    return convertedStr;
}

document.write(stringToArray("smit patel"))
document.write("<br />");
document.write(stringToArray("Hello Good Morning"))

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 4. Write a JavaScript function to extract a specified number of characters from a string.

document.write("4. Write a JavaScript function to extract a specified number of characters from a string.");
document.write("<br />");
document.write("<br />");

function truncateString(element, number) {
    const str = element;
    const truncateStr = str.slice(0, number);

    return truncateStr;
}

document.write(truncateString("smit patel", 8))
document.write("<br />");
document.write(truncateString("Hello Good Morning", 8))
// console.log(truncateString("smit patel", 8))


document.write("<br />");
document.write("<br />");
document.write("<br />");

// 5. Write a JavaScript function to convert a string into abbreviated form.

document.write("5. Write a JavaScript function to convert a string into abbreviated form.");
document.write("<br />");
document.write("<br />");


function abbrevName(name) {
    const fName = name.split(" ").at(0);
    const sName = name.split(" ").at(1).split("").at(0);
    return `${fName} ${sName}.`;
}
document.write(abbrevName("Smit Patel"));
document.write("<br />");
document.write(abbrevName("Ankit Dubey"));



document.write("<br />");
document.write("<br />");
document.write("<br />");

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

document.write("6. Write a JavaScript function that hides email addresses to prevent unauthorized access.");
document.write("<br />");
document.write("<br />");


function emailSecure(email) {
    const fName = email.split("");
    const emailSecuretiry = fName.slice(0, 4).join("");
    const halfEmail = email.split("@").at(1);

    return `${emailSecuretiry}...@${halfEmail}`;
}
document.write(emailSecure("smitp79@gmail.com"));
document.write("<br />");
document.write(emailSecure("Ankit4852@outlook.com"));


document.write("<br />");
document.write("<br />");
document.write("<br />");

// 7. Write a JavaScript function to parameterize a string.

document.write("7. Write a JavaScript function to parameterize a string.");
document.write("<br />");
document.write("<br />");


function stringParameterize(str) {
    const fName = str.toLowerCase().split(" ").join("-");

    return fName;


}
document.write(stringParameterize("smit Patel"));
document.write("<br />");
document.write(stringParameterize("Ankit Dubey Ok"));

document.write("<br />");
document.write("<br />");
document.write("<br />");

// 8. Write a JavaScript function to capitalize the first letter of a string.

document.write("8. Write a JavaScript function to capitalize the first letter of a string.");
document.write("<br />");
document.write("<br />");


function stringCapitalize(str) {
    const fStr = str.charAt(0).toUpperCase() + str.slice(1);

    return fStr;
}

document.write(stringCapitalize("smit Patel"));
document.write("<br />");
document.write(stringCapitalize("Ankit Dubey Ok"));

document.write("<br />");
document.write("<br />");
document.write("<br />");

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.

document.write("9. Write a JavaScript function to capitalize the first letter of each word in a string.");
document.write("<br />");
document.write("<br />");


// function stringCapitalizeWords(str) {
//     const fName = str.split(" ");

//     let word = "";

//     // let fullStr = "";

//     const fStr = str.split(" ");
//     console.log(fStr);
//     for (let i = 0; i < fStr.length; i++) {

//         const fullStr = fStr[i].charAt(0).toUpperCase();
//         console.log(fullStr);
//         word.push(fullStr);
//     }

//     console.log(word)
//     // return `${fullStr}`;


// }
// document.write(stringCapitalizeWords("smit patel"));
// document.write("<br />");
// document.write(stringCapitalizeWords("ankit dubey ok"));

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 10. Write a JavaScript function that takes a string with both lower case and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.


document.write("10. Write a JavaScript function that takes a string with both lower case and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.");
document.write("<br />");
document.write("<br />");


function swapCase(str) {
    const strObj = str.split('')

    for (let i = 0; i < strObj.length; i++) {
        if (strObj[i] === strObj[i].toLowerCase()) {
            strObj[i] = strObj[i].toUpperCase();
        } else {
            strObj[i] = strObj[i].toLowerCase();
        }
    }
    return strObj.join('');
}
document.write(swapCase('HelLO'));
document.write("<br />");
document.write(swapCase('hello'));
document.write("<br />");


document.write("<br />");
document.write("<br />");
document.write("<br />");


// 11. Write a JavaScript function to convert a string into camel case.


document.write("11. Write a JavaScript function to convert a string into camel case.");
document.write("<br />");
document.write("<br />");


// function camelize(str) {
//     const camelizeStr = str.split(' ');
//     // console.log(camelizeStr);

//         // let letter = [];
//         let letter = camelizeStr[i].split('');
//         if (i === 0) {

//         } else {
//             letter[0] = letter[0].toUpperCase();


//         }

//     }
//     console.log(camelizeStr)


// }
// document.write(camelize('smit patel ok'));
// document.write("<br />");
// document.write(camelize('hello wold'));
// document.write("<br />");


document.write("<br />");
document.write("<br />");
document.write("<br />");


// 12. Write a JavaScript function to uncommelize a string.

document.write("12. Write a JavaScript function to uncommelize a string.");
document.write("<br />");
document.write("<br />");


// function uncamelize(str) {
//     const letterStr = str.split("");
//     for (let i = 0; i < letterStr.length; i++) {




//         console.log(i)

//     }

//     return letterStr;


// }
// document.write(uncamelize('HelLO'));
// document.write("<br />");
// document.write(uncamelize('hello'));
// document.write("<br />");


document.write("<br />");
document.write("<br />");
document.write("<br />");


// 13. Write a JavaScript function to concatenate a given string n times (default is 1).

document.write("13. Write a JavaScript function to concatenate a given string n times (default is 1).");
document.write("<br />");
document.write("<br />");

function repeat(str, num) {
    if (typeof (num) == "undefined") {
        num = 1;
    }
    const finalStr = num < 1 ? '' : new Array(num + 1).join(str);

    return finalStr;
}

document.write(repeat('hello', 5));
document.write("<br />");
document.write(repeat('smit'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

document.write("14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).");
document.write("<br />");
document.write("<br />");

function insert(str1, str2, position) {
    if (typeof (position) == "undefined") {
        position = 0;
    }
    if (typeof (str2) == "undefined") {
        str2 = '';
    }
    const finalStr = str1.slice(0, position) + str2 + str1.slice(position);
    return finalStr;
}

document.write(insert(' hello ', ' Smit ', 6));
document.write("<br />");
document.write(insert('smit', 'Patel '));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.

document.write("15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.");
document.write("<br />");
document.write("<br />");

function humanizeFormat(num) {
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    } else if (num % 10 === 1) {
        return num + "st";
    } else if (num % 10 === 2) {
        return num + "nd";
    } else if (num % 10 === 3) {
        return num + "rd";
    }
    return num + "th";
}

document.write(humanizeFormat(6));
document.write("<br />");
document.write(humanizeFormat(2));
document.write("<br />");
document.write(humanizeFormat(13));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.

document.write("16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ('...') (by default) or specified characters.");
document.write("<br />");
document.write("<br />");

function textTruncate(str, num, endSymbol) {
    if (endSymbol == null) {
        endSymbol = "....";
    }
    if (str.length > num) {
        return str.substring(0, num - endSymbol.length) + endSymbol;
    } else {
        return str;
    }
}

document.write(textTruncate('We are doing JS string exercises.'));
document.write("<br />");
document.write(textTruncate('We are doing JS string exercises. ', 15));
document.write("<br />");
document.write(textTruncate('We are doing JS string exercises.', 15, '!!'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 17. Write a JavaScript function to chop a string into chunks of a given length.

document.write("17. Write a JavaScript function to chop a string into chunks of a given length.");
document.write("<br />");
document.write("<br />");

let finalStr = "";

function stringChop(str, length) {
    for (let i = 1; i < str.length; i++) {
        finalStr = str.slice(0, length);
    }
    return finalStr;
}

document.write(stringChop('We are doing JS string exercises.', 10));
document.write("<br />");
document.write(stringChop('We are doing JS string exercises.', 15));
document.write("<br />");
document.write(stringChop('We are doing JS string exercises.', 7));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 18. Write a JavaScript function to count substrings in a string.

document.write("18. Write a JavaScript function to count substrings in a string.");
document.write("<br />");
document.write("<br />");

function countSubStr(str, subStr) {
    const value = str.match(/e/g);

    // console.log(value)
    return value.length;
}

document.write(countSubStr('We are doing JS string exercises.', 'e'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 19. Write a JavaScript function to escape a HTML string.

document.write("19. Write a JavaScript function to escape a HTML string.");
document.write("<br />");
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.

document.write("20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.");
document.write("<br />");
document.write("<br />");

function formattedStr(str, padStr, pos) {

    return str.padStart(pos, padStr);
}

document.write(formattedStr('125', '0', 4));
document.write("<br />");
document.write(formattedStr('1255', '0', 10));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 21. Write a JavaScript function to repeat a string for a specified time.

document.write("21. Write a JavaScript function to repeat a string for a specified time.");
document.write("<br />");
document.write("<br />");

function repeatStr(str, num) {

    // if (str == null) {
    //     return ('Error in string or count.');
    // }
    if (num == null) {
        return ('Error in string or count.');
    }
    return str.repeat(num)

}

document.write(repeatStr('hello ', 2));
document.write("<br />");
document.write(repeatStr('one '));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");




// 22. Write a JavaScript function to get a part of a string after a specified character.

document.write("22. Write a JavaScript function to get a part of a string after a specified character.");
document.write("<br />");
document.write("<br />");

function subStrAfterChars(str, char) {
    const checkStr = str.split('');
    // console.log(checkStr);
    // console.log(char.length)
    for (let i = 0; i < checkStr.length; i++) {
        if (checkStr[i] === char) {
            const finalStr = str.slice(checkStr.indexOf(char));
            return finalStr;
        }
    }

}

document.write(subStrAfterChars('hello : world ', ':'));
document.write("<br />");
document.write(subStrAfterChars('Smit : Patel ', 'i'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");





// 23. Write a JavaScript function to strip leading and trailing spaces from a string.

document.write("23. Write a JavaScript function to strip leading and trailing spaces from a string.");
document.write("<br />");
document.write("<br />");

function stripStr(str) {
    document.write(str.length)
    document.write("<br />");

    const value = str.trim();
    document.write(value.length)
    return value;
};

document.write(stripStr(' hello world'));
document.write("<br />");
document.write(stripStr('Smit Patel '));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 24. Write a JavaScript function to truncate a string to a certain number of words.

document.write("24. Write a JavaScript function to truncate a string to a certain number of words.");
document.write("<br />");
document.write("<br />");

function truncateWord(str, num) {
    const valStr = str.split(' ');
    const finalStr = valStr.splice(0, num).join(" ");

    return finalStr;
};

document.write(truncateWord('hello world dfhvdsj dsf', 3));
document.write("<br />");
document.write(truncateWord('Smit Patel Ok', 2));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 25. Write a JavaScript function to alphabetize a given string.

document.write("25. Write a JavaScript function to alphabetize a given string.");
document.write("<br />");
document.write("<br />");

function alphabetizeString(str) {
    const finalStr = str.split('').sort().join('');

    return finalStr;
}

document.write(alphabetizeString('hello world'));
document.write("<br />");
document.write(alphabetizeString('Smit Patel Ok'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");




// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

document.write("26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.");
document.write("<br />");
document.write("<br />");

function removeFirstOccurrence(str, searchStr) {
    return str.replace(searchStr, '');
};

document.write(removeFirstOccurrence('hello world hello', 'hello'));
document.write("<br />");
document.write(removeFirstOccurrence('Smit Patel Ok', 'Smit'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 27. Write a JavaScript function to convert ASCII to Hexadecimal format.

document.write("27. Write a JavaScript function to convert ASCII to Hexadecimal format.");
document.write("<br />");
document.write("<br />");

function asciiToHexa(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        const hex = Number(str.charCodeAt(i)).toString(16);
        arr.push(hex);
    }
    return arr.join('');
};

document.write(asciiToHexa('12'));
document.write("<br />");
document.write(asciiToHexa('100'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 28. Write a JavaScript function to convert Hexadecimal to ASCII format.

document.write("28. Write a JavaScript function to convert Hexadecimal to ASCII format.");
document.write("<br />");
document.write("<br />");

function hexToAscii(str) {

};

document.write(hexToAscii());
document.write("<br />");
document.write(hexToAscii());
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 29. Write a JavaScript function to find a word within a string.

document.write("29. Write a JavaScript function to find a word within a string.");
document.write("<br />");
document.write("<br />");

function searchWord(text, word) {

    let x = 0, y = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return `'${word}' was found ${x} times`;
}

document.write(searchWord('The quick brown fox', 'fox'));
document.write("<br />");
document.write(searchWord('aa, bb, cc, dd, aa', 'aa'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 30. Write a JavaScript function that checks whether a string ends with a specified suffix.

document.write("30. Write a JavaScript function that checks whether a string ends with a specified suffix.");
document.write("<br />");
document.write("<br />");

function stringEndsWith(str, endStr) {
    return str.endsWith(endStr);
}

document.write(stringEndsWith('JS PHP PYTHON',));
document.write("<br />");
document.write(stringEndsWith('JS PHP PYTHON', 'PYTHON'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 31. Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.

document.write(`31. Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.`);
document.write("<br />");
document.write("<br />");

function escape_html(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
}

console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));

document.write(escape_html('PHP & MySQL'));
document.write("<br />");
document.write(escape_html('3 > 2'));

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 37. Write a JavaScript function to test case -insensitive(except special Unicode characters) string comparison.

document.write(" 37. Write a JavaScript function to test case -insensitive(except special Unicode characters) string comparison.");
document.write("<br />");
document.write("<br />");

function compareStrings(str1, str2) {
    const areEqu = str1.toUpperCase() === str2.toUpperCase();
    return areEqu;
}


document.write(compareStrings('abcd', 'AbcD'));
document.write("<br />");
document.write(compareStrings('ABCD', 'Abce'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 40. Write a JavaScript function to uncapitalize the first letter of each word of a string.

document.write(" 40. Write a JavaScript function to uncapitalize the first letter of each word of a string.");
document.write("<br />");
document.write("<br />");

function unCapitalizeWords(str) {
    str = str.split(" ");
    let x = str.length;
    for (let i = 0; i < x; i++) {
        str[i] = str[i][0].toLowerCase() + str[i].substr(1);
    }
    return str.join(" ");
};

document.write(unCapitalizeWords('Js String ExercIses'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 41. Write a JavaScript function to capitalize each word in the string.

document.write(" 41. Write a JavaScript function to capitalize each word in the string.");
document.write("<br />");
document.write("<br />");


function capitalizeWords(str) {
    return str.toUpperCase();
};

document.write(capitalizeWords('Js String ExercIses'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 42. Write a JavaScript function to uncapitalize each word in the string.

document.write(" 42. Write a JavaScript function to uncapitalize each word in the string.");
document.write("<br />");
document.write("<br />");


function capitalizeWords(str) {
    return str.toLowerCase();
};

document.write(capitalizeWords('Js String ExercIses'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 43. Write a JavaScript function to test whether the character at the index provided is upper case.

document.write("43. Write a JavaScript function to test whether the character at the index provided is upper case.");
document.write("<br />");
document.write("<br />");


function checkUpperCase(str, index) {
    if (str.charAt(index) === " ") {
        return ("It's Blank space");
    }
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

document.write(checkUpperCase('Js String ExercIses', 1));
document.write("<br />");
document.write(checkUpperCase(' Js String ExercIses', 0));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 44. Write a JavaScript function to test whether the character at the given (character) index is lower case.

document.write("44. Write a JavaScript function to test whether the character at the given (character) index is lower case.");
document.write("<br />");
document.write("<br />");


function checkLowerCase(str, index) {
    if (str.charAt(index) === " ") {
        return ("It's Blank space");
    }
    return str.charAt(index).toLowerCase() === str.charAt(index);
}

document.write(checkLowerCase('Js String ExercIses', 1));
document.write("<br />");
document.write(checkLowerCase(' Js String ExercIses', 0));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");


// 45. Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

document.write("45. Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.");
document.write("<br />");
document.write("<br />");
document.write("Same As Num 15.");
document.write("<br />");
document.write("<br />");


// 46. Write a JavaScript function to test whether a string starts with a specified string.

document.write("46. Write a JavaScript function to test whether a string starts with a specified string.");
document.write("<br />");
document.write("<br />");

function stringStartsWith(str, startStr) {
    return str.startsWith(startStr);
}

document.write(stringStartsWith('JS PHP PYTHON',));
document.write("<br />");
document.write(stringStartsWith('JS PHP PYTHON', 'JS'));
document.write("<br />");

document.write("<br />");
document.write("<br />");
document.write("<br />");



// 47. Write a JavaScript function to test whether a string ends with a specified string.

document.write("47. Write a JavaScript function to test whether a string ends with a specified string.");
document.write("<br />");
document.write("<br />");
document.write("Same As Num 30.");
document.write("<br />");
document.write("<br />");

