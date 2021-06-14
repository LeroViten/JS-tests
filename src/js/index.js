'use strict';
// Enter your code below:

// *! ===================== forEach =========================

// instead of (for, for-of loops)

const numbers = [5, 10, 15, 20, 25];

numbers.forEach((number) => console.log('number', number));

// *! ======================= map ===========================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 200, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 34, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 275, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 800, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 170, online: true },
];

// ------------ getting all players key value ------------

const playerNames = players.map((player) => player.name);
console.log('playerNames', playerNames);

const playerIds = players.map((player) => player.id);
console.log('playerIds', playerIds);

// ------------ updating all players key value ------------

const updatedPlayers = players.map((player) => ({
  ...player,
  timePlayed: player.timePlayed + 16,
}));
console.log('updatedPlayers', updatedPlayers);

// ------------ updating one player key value -------------

const playerIdToUpdate = 'player-4';

const updatedPlayersStatus = players.map((player) => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      online: (player.online = true),
    };
  }
  return player;
});

// * same with ternary:

// const updatedPlayersStatus = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? {
//         ...player,
//         online: (player.online = true),
//       }
//     : player
// );

console.log('updatedPlayersStatus', updatedPlayersStatus);

// --------------------------------------------------------

// *! ==================== filter ==========================

const numbers2 = [1, 5, 6, 9, 45, 20];
const players2 = [
  { id: 'player-1', name: 'Mango', timePlayed: 200, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 34, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 275, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 800, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 170, online: true },
];

// filter numbers by certain rule
const filteredNumbers2 = numbers2.filter((number) => number > 15);
console.log('filteredNumbers2', filteredNumbers2);

// filter players that online
const onlinePlayers = players2.filter((player) => player.online);
console.table(onlinePlayers);

// filter players that offline
const offlinePlayers = players2.filter((player) => !player.online);
console.table(offlinePlayers);

// filter players with the most spent time playing
const hardcorePlayers = players2.filter((player) => player.timePlayed > 250);
console.log('hardcorePlayers', hardcorePlayers);

// -----------------------------------------------------------

// *! ====================== find ==========================

// finds first element that fits your rule
const uniqueNumber = numbers2.find((number) => number > 10);
console.log(uniqueNumber);

const playerToFind = 'player-2';
const uniquePlayer = players2.find((player) => player.id === playerToFind);
console.log(uniquePlayer);

const playerNameToFind = 'Ajax';
const uniqueName = players2.find((player) => player.name === playerNameToFind);
console.log(uniqueName);

//using this method in a function
const findPlayerById = (allPlayers, playerId) => {
  return allPlayers.find((player) => player.id === playerId);
};
console.log(findPlayerById(players2, 'player-2'));

// --------------------------------------------------------

// *! ================== every & some =====================

// checking whether ALL players are online
const isAllOnline = players2.every((player) => player.online);
console.log('isAllOnline', isAllOnline);

// checking whether ALL players are offline
const isAllOffline = players2.every((player) => !player.online);
console.log('isAllOffline', isAllOffline);

// checking whether at least somebody is online
const isAnyOnline = players2.some((player) => player.online);
console.log('isAnyOnline', isAnyOnline);

// checking whether we have hardcore players
const anyHardcorePlayers = players2.some((player) => player.timePlayed >= 200);
console.log('anyHardcorePlayers', anyHardcorePlayers);

// --------------------------------------------------------

// *! ==================== reduce =========================

// finding total of numbers from array:
const total = numbers2.reduce((acc, number) => acc + number, 0);
console.log(total);

// finding total of salaries:
const salary = {
  mango: 100,
  poly: 800,
  ajax: 380,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

// counting total time played by gamers:
const totalPlayed = players2.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
console.log(totalPlayed);

// counting total product cart:
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Grapes', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.log(totalAmount);

// getting all tags from tweets in one array:

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// getting statistic from tags in a new object with ternary:
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
console.log(tagsStats);

// *! ====================== sort =========================
// * ======================== 1 ===========================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((element) => (totalPrice += element));

//   return totalPrice;
// }

// * ======================== 2 ===========================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       return filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// * ======================== 3 ===========================

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach((number) => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
// }

// * ======================== 4 ===========================

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// * ======================== 5 ===========================

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// * ======================== 6 ===========================

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };

// * ======================== 7 ===========================

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// * ======================== 8 ===========================

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// * ======================== 9 ===========================

function changeEven(numbers, value) {
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number = number + value;
      newArray.push(number);
    } else if (number % 2 !== 0) {
      newArray.push(number);
    }
  });
  return newArray;
}
console.log(changeEven([1, 2, 3, 4, 5], 10));

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
