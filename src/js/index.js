'use strict';
// Enter your code below:

//*======================== 1 =========================

function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }

  return 'You are a minor';
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

//*======================== 2 =========================

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
}
console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

//*======================== 3 =========================

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

//*======================== 4 =========================
const fruits = ['apple', 'plum', 'pear', 'orange'];
//*======================== 5 =========================

const fruits = ['apple', 'plum', 'pear', 'orange'];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

//*======================== 6 =========================

const fruits = ['apple', 'plum', 'pear', 'orange'];

fruits[1] = 'peach';
fruits[3] = 'banana';

//*======================== 7 =========================

const fruits = ['apple', 'peach', 'pear', 'banana'];

const fruitsArrayLength = fruits.length;

//*======================== 8 =========================

const fruits = ['apple', 'peach', 'pear', 'banana'];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

//*======================== 9 =========================

function getExtremeElements(array) {
  const result = `${array[0]}, ${array[array.length - 1]}`;
  return result;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// ----------------------------------------------------

function getExtremeElements(array) {
  array = [array[0], array[array.length - 1]];
  return array;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//*======================== 10 =========================

function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}
console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango', ''));
console.log(splitMessage('best_for_week', '_'));

//*======================== 11 =========================

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

//*======================== 12 =========================

function makeStringFromArray(array, delimeter) {
  let string;
  string = array.join(delimeter);
  return string;
}
console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
);
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

//*======================== 13 =========================

function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}
console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

//*======================== 14 =========================

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

//*======================== 15 =========================

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

//*======================== 16 =========================

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray).slice(0, maxLength);
  return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//*======================== 17 =========================

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

//*======================== 18 =========================

function calculateTotal(number) {
  let total = 0;
  for (i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;
}

//*======================== 19 =========================

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

//*======================== 20 =========================

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (item of order) {
    total += item;
  }
  // Change code above this line
  return total;
}

//*======================== 21 =========================

function findLongestWord(string) {
  const arrayString = string.split(' ');
  let longestWord = arrayString[0];
  for (let i = 0; i < arrayString.length; i += 1) {
    if (longestWord.length < arrayString[i].length) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
}

//*========================22 =========================

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

//*======================== 23 =========================

function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}

//*======================== 24 =========================

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit);
}

//*======================== 25 =========================

function getCommonElements(array1, array2) {
  const newArray = [];

  for (const item of array1) {
    if (array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

//*======================== 26 =========================

function calculateTotalPrice(order) {
  let total = 0;

  for (const item of order) {
    total += item;
  }

  return total;
}

//*======================== 27 =========================

function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}

//*======================== 28 =========================

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

//*======================== 29 =========================

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

//*======================== 30 =========================

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

//*======================== 31 =========================

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return (number = i);
    }
  }
}

//*======================== 32 =========================

function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

//*======================== END =========================
