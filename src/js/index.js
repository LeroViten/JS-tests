'use strict';
// Enter your code below:

// *! ================== webinar ==========================

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} gains ${amount} of experience`);
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attacks using ${this.weapon}`);
  }
}

class Org extends Warrior {
  constructor({ cry, ...restProps } = {}) {
    super(restProps);
    this.cry = cry;
  }
  defend() {
    console.log(`${this.name} defends using ${this.cry}!`);
  }
}
const ajax = new Org({
  name: 'Ajax',
  xp: 300,
  weapon: 'axe',
  cry: 'waaaaaaah',
});
console.log(ajax);
ajax.attack();
ajax.defend();
ajax.gainXp(200);

class Golem extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);
    this.spells = spells;
  }
  cast(spells) {
    console.log(`${this.name} used ${this.spells} on you!`);
  }
}

const wizard = new Warrior({ name: 'wizard', xp: 1000, weapon: 'trebuchet' });
console.log(wizard);
wizard.attack();
wizard.gainXp(1000);

const icy = new Golem({ name: 'Icy', xp: 500, spells: [fireball] });
console.log(icy);
icy.cast();
icy.gainXp(200);

// * ======================== 1 ===========================

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// * ======================== 2 ===========================

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// * ======================== 3 ===========================

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// * ======================== 4 ===========================

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// * ======================== 5 ===========================

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// * ======================== 6 ===========================

// function Storage(items) {

//   this.items = items;

//   Storage.prototype.getItems = function(items) {
//     return this.items;
//   };
//   Storage.prototype.addItem = function(newItem) {
//     return this.items.push(newItem);
//   };
//   Storage.prototype.removeItem = function(item) {
//     return this.items.splice(this.items.indexOf(item),1);
//   };
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// * ======================== 7 ===========================

// function StringBuilder(baseValue) {
//   this.value = baseValue;

//   StringBuilder.prototype.getValue = function() {
//     return this.value;
//   };
//   StringBuilder.prototype.padEnd = function(str) {
//     this.value += str;
//   };
//   StringBuilder.prototype.padStart = function(str) {
//     this.value = str + this.value;
//   };
//   StringBuilder.prototype.padBoth = function(str) {
//     this.value = str + this.value + str;
//   };
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// * ======================== 8 ===========================

// class Car {
//   *!bulshit
// };

// * ======================== 9 ===========================

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// * ======================== 10 ===========================

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// * ======================== 11 ===========================
// * ======================== 12 ===========================
// * ======================== 14 ===========================
// * ======================== 15 ===========================
// * ======================== 16 ===========================
// * ======================== 17 ===========================
// * ======================== 18 ===========================
// * ======================== 19 ===========================
