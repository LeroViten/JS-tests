'use strict';
// Enter your code below:

// *? ==================== closure ==================
// mainly used as a function in another function

function createCalcFunction(n) {
  return function () {
    // console.log(1000 * n);
  };
}
const calc = createCalcFunction(42);
calc();
// -----------------------------------------------
function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addOne(42));
// console.log(addTen(10));
// console.log(addTen(42));
// we are using base function 'createIncrementor'
// where we enclose certain arg/number to pass it
// to another function 'addOne or addTen' with
// different parameters
// --------------------------------------------

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');
// console.log(comUrl('google'));
// console.log(comUrl('amazon'));

const uaUrl = urlGenerator('ua');
// console.log(uaUrl('monobank'));
// console.log(uaUrl('wikipedia'));

// ---------------------------------------------------

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  // console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
  name: 'Peter',
  age: 25,
  job: 'frontend-dev',
};
const person2 = {
  name: 'Ivan',
  age: 29,
  job: 'backend-dev',
};

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// =============------------------==============

const myName = 'Valerii';

function printName() {
  // console.log(myName);
}
printName();

// due to closure we can use external variable 'myName'
// inside the function 'printName'
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== 1 ===========================
// * ======================== webinar ===========================

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['Jacklyn Lucas', 'Linda Chapman'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
export default users;
console.log(this);
