'use strict';

// *! Do you think you can handle this?

// * ==================== 10 ====================

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));

// * =================== 11 =====================

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

// * =================== 12 ======================

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

// * ==================== 13 ======================

function isAdult(age) {
  const passed = age >= 18;

  return passed;
}

console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

// * ==================== 14 ======================

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;

  return isMatch;
}

console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword('jqueryismyjam'));

// * ==================== 15 ======================

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// * ==================== 16 ======================

function checkStorage(available, ordered) {
  let message;
  if (available < ordered) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));

// * ==================== 17 ======================

let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

// * ==================== 18 ======================

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else if (totalPrice <= customerCredits) {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

// * ==================== 19 ======================

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === 'jqueryismyjam') {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  return message;
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

// * ==================== 20 ======================

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// * ==================== 21 ======================

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

// * ==================== 22 ======================

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));

// * ==================== 23 ======================

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;
  return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

// * ==================== 24 ======================

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  return discount;
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

// * ==================== 25 ======================

function checkStorage(available, ordered) {
  let message;

  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// * ==================== 26 ======================

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  return message;
}

console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('angul4r1sl1f3'));
console.log(checkPassword('r3actsux'));

// * ==================== 27 ======================

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case (type = 'starter'):
      price = 0;
      break;

    case (type = 'professional'):
      price = 20;
      break;

    case (type = 'organization'):
      price = 50;
      break;
  }
  return price;
}

console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter'));

// * ==================== 28 ======================

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case (password = null):
      message = 'Canceled by user!';
      break;

    case (password = ADMIN_PASSWORD):
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

// * ==================== 29 ======================

// Функция getShippingCost(country) должна проверять возможность доставки
// товара в страну пользователя(параметр country) и возвращать сообщение о
// результате хранящееся в переменной message.Обязательно используй инструкцию
// switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price>
// credits", где вместо <country> и <price> необходимо подставить
// соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде.Если указанной страны нет в
// списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;
  let price;

  switch (country) {
    case (country = 'China'):
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case (country = 'Chile'):
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case (country = 'Australia'):
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case (country = 'Jamaica'):
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }
  return message;
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));

// * ==================== 30 ======================

// Функция getNameLength(name) принимает имя (параметр name) и возвращает
// строку, в которой указана его длина.Дополни шаблонную строку в переменной
// message длиной строки из параметра name.

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

console.log(getNameLength('Poly'));
console.log(getNameLength('Harambe'));
console.log(getNameLength('Billy'));
console.log(getNameLength('Joe'));

// * ==================== 31 ======================

// Дополни код присвоив объявленным переменным выражения обращения к
// соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.

const courseTopic = 'JavaScript essentials';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// * ==================== 32 ======================

// Функция getSubstring(string, length) принимает строку и возвращает подстроку
// от начала и до length символов.Она объявляет два параметра, значения которых
// будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length
// символов(от начала) из строки string.

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

console.log(getSubstring('Hello world', 3));
console.log(getSubstring('Hello world', 6));
console.log(getSubstring('Hello world', 8));
console.log(getSubstring('Hello world', 11));
console.log(getSubstring('Hello world', 0));

// * ==================== 33 ======================

// Функция formatMessage(message, maxLength) принимает строку(параметр message)
// и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет
// в конец троеточие "...", после чего возвращает укороченную версию.

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
}

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// * ==================== 34 ======================

// Функция normalizeInput(input) принимает строку(параметр input) и возвращает
// такую же строку, но в нижнем регистре.Присвой переменной normalizedInput
// выражение создания строки в нижнем регистре из параметра input.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

console.log(normalizeInput('Hello world'));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput('Big SALE'));

// * ==================== 35 ======================

// Функция checkName(fullname, name) принимает два параметра и возвращает буль
// true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени(параметр name),
// в полное имя(параметр fullname).Пусть функция строго относится к регистру букв,
// то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

console.log(checkForName('Egor Kolbasov', 'Egor'));
console.log(checkForName('Egor Kolbasov', 'egor'));
console.log(checkForName('Egor Kolbasov', 'egOr'));
console.log(checkForName('Egor Kolbasov', 'Zhenya'));
console.log(checkForName('Vadim Nekrasov', 'Vadim'));
console.log(checkForName('Vadim Nekrasov', 'vadim'));
console.log(checkForName('Vadim Nekrasov', 'Dima'));

// * ==================== 36 ======================

// Функция checkForSpam(message) принимает строку(параметр message), проверяет
// её на содержание запрещенных слов spam и sale, и возвращает результат проверки.
// Слова в строке параметра message могут быть в произвольном регистре, например
// SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

function checkForSpam(message) {
  message = message.toLowerCase();
  let result;
  if (message.includes('spam') || message.includes('sale')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
