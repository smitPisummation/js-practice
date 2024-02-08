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

// 1.1 Get characters with mass greater than 100

const massGreater = characters.filter((ele, index, characters) => ele.mass >= 100)
console.log('1.1 Get characters with mass greater than 100')
console.log(massGreater);


// 1.2. Get characters with height less than 200

const heightCheck = characters.filter((ele, index, characters) => ele.height < 200);
console.log('1.2. Get characters with height less than 200')
console.log(heightCheck);

// 1.3. Get all male characters

const genderCheckForMale = characters.filter((ele, index, characters) => ele.gender.toLowerCase() === 'male');
console.log('1.3. Get all male characters')
console.log(genderCheckForMale);

// 1.4. Get all female characters

const genderCheckForFemale = characters.filter((ele, index, characters) => ele.gender.toLowerCase() === 'female');
console.log('1.4. Get all female characters')
console.log(genderCheckForFemale);


// 2. Check Element is ODD or EVEN.

console.log('2. Check Element is ODD or EVEN.')
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddCheck = input.filter((ele, index, input) => ele % 2 !== 0);
console.log(oddCheck);
const evenCheck = input.filter((ele, index, input) => ele % 2 === 0);
console.log(evenCheck);


// 3. Sum of every positive element

console.log('3. Sum of every positive element')
const numbers = [1, -4, 12, 0, -3, 29, -150];

const filterOfPositiveNum = numbers.filter((ele, index, numbers) => ele > 0);
console.log(filterOfPositiveNum);
let sum = 0;
for(let i = 0; i < filterOfPositiveNum.length; i++ ) {
    sum+=filterOfPositiveNum[i];
}
console.log(sum);
