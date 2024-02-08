const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// 1.1. Get an array of all names
console.log('1.1. Get an array of all names');

const onlyNames = characters.map(
    (ele, index, array) => {
        const names = {
            Name: ele.name
        };
        return names;
    }
)
console.log(onlyNames);

// 1.2. Get an array of all heights
console.log('1.2. Get an array of all heights');

const onlyHeight = characters.map(
    (ele, index, array) => {
        const heights = {
            Height: ele.height
        };
        return heights;
    }
)
console.log(onlyHeight);

//1.3. Get an array of objects with just name and height properties
console.log('1.3. Get an array of objects with just name and height properties')

const onlyNameHeight = characters.map(
    (ele, index, array) => {
        const nameHeight = {
            Name: ele.name,
            Height: ele.height
        };
        return nameHeight;
    }
)
console.log(onlyNameHeight);

// 1.4. Get an array of all first names
console.log('1.4. Get an array of all first names');

const firstName = characters.map(
    (ele, index, array) => {
        const name = {
            "First Name": ele.name.split(' ').at(0)
        };
        return name;
    }
)
console.log(firstName);


// 2. Square the value of every element in the array.
console.log("2. Square the value of every element in the array.");

const input1 = [1, 2, 3, 4, 5];
const squareNum = input1.map(
    (ele, index, array) => {
        const square = ele * ele;
        return square;
    }
)
console.log(squareNum);

// 3. Check wheather number is divisible by 2 or not.
console.log("3. Check wheather number is divisible by 2 or not.");

const input2 = [1, 2, 3, 4, 5, 10];
const checkNum = input2.filter((ele, index, array) => ele % 2 == 0);
console.log(checkNum);

// 4. Get name initials (Get first character of each name.
console.log('4. Get name initials (Get first character of each name.');

const input3 = "George Raymond Richard Martin";
const value = input3.split(' ')
console.log(value)
const firstChar = value.map(
    (ele, idex, array) => {
        const fcharacter = ele[0]
        return fcharacter;
    }
)
console.log(firstChar);

/* 5.Find the difference in age between the oldest and youngest family members, 
    and return their respective ages and the age difference.  */
console.log("5.Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.")

const usersAge = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

const ages = usersAge.map((ele, index, array) => ele.age);
console.log(ages);
const ageDiff = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
console.log(ageDiff);

// 6. Numeronyms (Take first and last character and add count of remaining characters in between)
console.log('4. Get name initials (Get first character of each name.');

const input4 = "Every developer likes to mix kubernetes and javascript";





// 7.Given an array of strings, create a new array with each string converted to uppercase.
console.log("7.Given an array of strings, create a new array with each string converted to uppercase.")

const str = ["smit", "raj", "shyam", "john"];
const strUpperCase = str.map((ele, index, array) => ele.toUpperCase());
console.log(strUpperCase);

// 8. Given an array of numbers, create a new array with only the square of even numbers.
console.log(" 8. Given an array of numbers, create a new array with only the square of even numbers.")


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numArr.filter((ele, index, array) => ele % 2 === 0);
console.log(evenNum);

const squareOfEven = evenNum.map((ele, index, array) => ele * ele);
console.log(squareOfEven);

// 9. Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.
console.log(" 9. Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.")

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
];

const areaOfRec = rectangles.map(
    (ele, index, array) => {
        const value = {
            Area: ele.width * ele.height,
        };
        return value;
    }
)
console.log(areaOfRec);

// 10. Given an array of items, create an HTML list using the map method.
console.log(" 10. Given an array of items, create an HTML list using the map method.");


const items = ['Apple', 'Banana', 'Cherry', 'Date'];
const listItems = items.map(
    (ele, index, array) => `<li>${ele}</li>`);
const finalItems = (listItems.join(""));
const fullArr = `<ul> ${finalItems} </ul>`;
console.log(fullArr)