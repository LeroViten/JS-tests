import products from './data/products.js';

// * ======================== 1 ===========================

//? making current page marker dynamic:

const currentPageUrl = '/about';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
linkEl.classList.add('site-nav__link--current');

//* -----------------------------------------

//? adding elements to html:

// create title:
const titleEl = document.createElement('h2');
titleEl.textContent = 'May the force be with you!';

// create img:
const imageEl = document.createElement('img');
imageEl.src =
  'https://images.pexels.com/photos/4310574/pexels-photo-4310574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
imageEl.width = 320;

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl); too many queries to DOM
heroEl.append(titleEl, imageEl); // ideal method enumerating elements

// create 'li' (item in existing site-nav):
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

// create 'a' (link that we'll nest in 'li' later)
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link', 'link');
navLinkEl.textContent = 'Personal cabinet';
navLinkEl.href = '/profile';

// nesting 'a' inside 'li':
navItemEl.appendChild(navLinkEl);

// publishing 'li' with nested 'a':
const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl); inserts to the end of list
navEl.insertBefore(navItemEl, navEl.firstElementChild); // inserts to the top
// navEl.insertBefore(navItemEl, navEl.lastElementChild); inserts before the last
// navEl.insertBefore(navItemEl, navEl.children[1]); inserts 2nd (by index)

// ? =============== COLOR PICKER ==================

const colorPickerOptions = [
  { label: 'red', color: '#cf4a4a' },
  { label: 'green', color: '#3dba58' },
  { label: 'blue', color: '#4ba8de' },
  { label: 'grey', color: '#8f8f8f' },
  { label: 'pink', color: '#f28a8a' },
  { label: 'purple', color: '#9454de' },
  { label: 'yellow', color: '#e8c051' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__btn');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPickerContainerEl.append(...elements);

//* making function to handle this task continuously:

const createColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__btn');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements = createColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

//? ------------ product collection ----------------

// const product = {
//   name: 'Laptop',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore illum molestiae quod eum quia, consequatur animi reprehenderit. Amet, quod?',
//   price: 2500,
//   available: true,
//   onSale: true,
// };

{
  /* <article class="product">
  <h2 class="product__name">Name</h2>
  <p class="product__descr">Description</p>
  <p class="product__price">Price</p>
</article>; */
}

// console.log(productEl);

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const productNameEl = document.createElement('h2');
  productNameEl.textContent = name;
  productNameEl.classList.add('product__name');

  const productDescrEl = document.createElement('p');
  productDescrEl.textContent = description;
  productDescrEl.classList.add('product__descr');

  const productPriceEl = document.createElement('p');
  productPriceEl.textContent = `Price: ${price}`;
  productPriceEl.classList.add('product__price');

  productEl.append(productNameEl, productDescrEl, productPriceEl);

  return productEl;
};
// console.log(makeProductCard(products[1]));
// console.log(makeProductCard(products[0]));
// console.log(makeProductCard(products[3]));
// console.log(makeProductCard(products[2]));

const elements2 = products.map(makeProductCard);
console.log(elements2);
productsContainerEl.append(...elements2);
