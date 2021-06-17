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

// sorts elements primitively converting them to strings and
// comparing by UNICODE table.Its destructive - use copy instead

const ascendingNumbers = [...numbers2].sort((curEl, nextEl) => curEl - nextEl);
const descendingNumbers = [...numbers2].sort((curEl, nextEl) => nextEl - curEl);
console.log('ascendingNumbers', ascendingNumbers);
console.log('descendingNumbers', descendingNumbers);

// sorts array of objects comparing some key values in them

const sortedByBestPlayers = [...players2].sort(
  (curEl, nextEl) => nextEl.timePlayed - curEl.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players2].sort(
  (curEl, nextEl) => curEl.timePlayed - nextEl.timePlayed
);
console.table(sortedByWorstPlayers);

// sorting by letters. You need to specify the index of a letter you're comparing

const sortedByName = [...players2].sort((curEl, nextEl) => {
  const result = curEl.name[0] > nextEl.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});
console.log(sortedByName);

// *! ====================== flat =========================

// creates a new array (not destructive) with all sub-array elements
// concatenated into it recursively up to the specified depth
// default depth is 1.

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat());
console.log(array.flat(3));

// *! ==================== flatMap =========================

// method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

const tweetTags = tweets.flatMap((tweet) => tweet.tags);
console.log(tweetTags);

// *! =================== chaining ========================

// you can call one method directly on a result of another method to reduce the code and get rid of temporary variables

// const greaterThanTwo = numbers2.filter(num => num > 2);
// const multiplyByThree = greaterThanTwo.map(num => num * 3);
// const sorted = multiplyByThree.sort((a, b) => a - b);
// console.log(sorted);

// * same task with chaining:
const sorted = numbers2
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);
console.log(sorted);

const onlineAndSorted = players2
  .filter((player) => player.online)
  .sort((curEl, nextEl) => curEl.timePlayed - nextEl.timePlayed);
console.log(onlineAndSorted);

// *! =============== libraries: LODASH ===================

// http://lodash.com - library of methods (object with methods)
//
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

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//       newArray.push(number);
//     } else if (number % 2 !== 0) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// * ======================== 10 ===========================

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map((planet) => planet.length);

// * ======================== 11 ===========================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

// * ======================== 12 ===========================

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);

// * ======================== 13 ===========================

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// * ======================== 14 ===========================

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// * ======================== 15 ===========================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// * ======================== 16 ===========================

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// * ======================== 17 ===========================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// * ======================== 18 ===========================

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// * ======================== 19 ===========================

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };

// * ======================== 20 ===========================

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// * ======================== 21 ===========================

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   return allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
// };

// * ======================== 22 ===========================

// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive);
// };

// * ======================== 23 ===========================

// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };

// * ======================== 24 ===========================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// * ======================== 25 ===========================

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// * ======================== 26 ===========================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// * ======================== 27 ===========================

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

// * ======================== 28 ===========================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// * ======================== 29 ===========================

// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive);
// };

// * ======================== 30 ===========================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, value) => {
//   return acc + value;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// * ======================== 31 ===========================

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// * ======================== 32 ===========================

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

// * ======================== 33 ===========================

// const getTotalFriendCount = (users) => {
//   return users.reduce((total, user) => total + user.friends.length, 0);
// };

// * ======================== 34 ===========================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// * ======================== 35 ===========================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort(
//   (curEl, nextEl) => curEl - nextEl
// );

// const descendingReleaseDates = [...releaseDates].sort(
//   (curEl, nextEl) => nextEl - curEl
// );

// * ======================== 36 ===========================

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// * ======================== 37 ===========================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// * ======================== 38 ===========================

// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

// * ======================== 39 ===========================

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

// * ======================== 40 ===========================

// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

// * ======================== 41 ===========================
// * ======================== 42 ===========================
// * ======================== 43 ===========================
// * ======================== 44 ===========================
