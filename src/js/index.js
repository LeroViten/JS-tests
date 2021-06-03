'use strict';
// Enter your code below:

// ! ========================== 0 ==========================

// Repeta Filter callback function module 4:

const filter = function (array, test) {
  const filteredArray = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const result1 = filter([1, 2, 3, 4, 5], callback1);
console.log(result1);

const callback2 = function (value) {
  return value <= 4;
};

const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(result2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruits = function (fruit) {
  return fruit.quantity >= 120;
};

const result3 = filter(fruits, getFruits);
console.log(result3);

// =========================================================

// Closure example:

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} cooks ${dish}`);
};

makeDish('Mango', 'pasta');
makeDish('Mango', 'cheeseburger');
makeDish('Mango', 'pizza');

makeDish('Poly', 'hamburger');
makeDish('Poly', 'donut');
makeDish('Poly', 'fries');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cooks ${dish} for you!`);
  };
  return makeDish;
};

const mango = makeSheff('Mango');
const poly = makeSheff('Poly');

mango('grenadine');
mango('cake');
poly('noodles');
poly('barbeque');

// ===========================================================

// function 'rounder':

const floatingPoint = 4.67859;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));
console.log(withDecimals);

const rounder = function (number, places) {
  return Number(number.toFixed(places));
};
console.log(rounder(6.67384, 3));
console.log(rounder(6.67384, 2));
console.log(rounder(9.47814, 3));
console.log(rounder(9.47814, 2));

// Rounder made with closure:

const sameRounderDifferentWay = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = sameRounderDifferentWay(2);
const rounder3 = sameRounderDifferentWay(3);

console.log(rounder2(6.67384));
console.log(rounder3(6.67384));

// ================== map =======================

const names = ['Bobby', 'Peter', 'john'];
const numbers = [100, 200, 300]; // <li>1.00$</li>
const numbers2 = [100, 200, 300]; // 200, 400, 600

function map(arr, callback) {
  const result = [];

  for (const value of arr) {
    result.push(callback(value));
  }

  return result;
}

function namesToList(name) {
  return `<li>${name}</li>`;
}

function numbersToList(number) {
  return `<li>${number / 100}$</li>`;
}

console.log(map(names, namesToList));
console.log(map(numbers, numbersToList));
console.log(map(numbers2, (number) => number * 2));

// ========== reduce ==========

// const arr1 = [1, 1, 1, 1, 6, 6];

// function reduce(arr, callback, initialValue) {
//   let result = initialValue;

//   for (const value of arr) {
//     result = callback(result, value);
//   }

//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(reduce(arr1, sum, 0));
// console.log(reduce(arr1, (acc, value) => acc * value, 1));

// * ========================== 1 ==========================

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }

// const result = makePizza();
// const pointer = makePizza;

// * ========================== 2 ==========================

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// * ========================== 3 ==========================

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}.`);
// });

// * ========================== 4 ==========================

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };

//  ! Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

//  ! Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

//  ! Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// * ========================== 5 ==========================

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
// };

// * ========================== 6 ==========================

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// * ========================== 7 ==========================

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1));
// }

// * ========================== 8 ==========================

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// * ========================== 9 ==========================

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// * ========================== 10 ==========================

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction(
  'kiwi@mail.uk',
  service.subscribe.bind(service)
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com',
    'poly@hotmail.de',
    'ajax@jmail.net',
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  'poly@hotmail.de',
  service.unsubscribe.bind(service)
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// * ========================== end =========================
