import userArr from './index.js';
// console.log(userArr);
//* =======================================

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => user.age >= min && user.age <= max);
// console.log(getUsersWithAge(userArr, 20, 30));

// ? ==============================================

// Task 7

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = (users) =>
//   users.reduce((total, { balance }) => balance + total, 0);
// console.log(calculateTotalBalance(userArr));

//?  Task 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// console.log(getNamesSortedByFriendsCount(userArr));

// ! ------------------------

//?  Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = (users) =>
//   users
//     .flatMap(({ skills }) => skills)
//     .filter((skill, index, arr) => arr.indexOf(skill) == index)
//     .sort();

// console.log(getSortedUniqueSkills(userArr));

// * ------------------------------------

const arr = [1, 2, 3, 4, 5, 6];

const getSums = (arr) =>
  arr.reduce(
    (acc, num, i) => (i === 0 ? [num] : [...acc, acc[i - 1] + num]),
    []
  );

console.log(getSums(arr));
