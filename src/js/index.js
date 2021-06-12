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
// * ======================== 1 ===========================
// * ======================== 1 ===========================
