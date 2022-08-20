/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "Strawberry",
    price: 10,
    quantity: 0,
    productId: 1,
    image: "images/strawberry.jpg",
  },
  {
    name: "Cherry",
    price: 15,
    quantity: 0,
    productId: 2,
    image: "images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 20,
    quantity: 0,
    productId: 3,
    image: "images/orange.jpg",
  },
];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(givenId) {
  let product;

  for (let index = 0; index < products.length; index++) {
    //products[0].quantity = products[0].quantity + 1;
    const foundProduct = products[index].productId;
    if (foundProduct == givenId) {
      products[index].quantity += 1;
      product = products[index];
    }
  }

  let check = false;
  for (let index = 0; index < cart.length; index++) {
    if (cart[index].productId == givenId) {
      check = true;
    }
  }
  if (check == false) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(id) {
  for (let index = 0; index < products.length; index++) {
    let foundProduct = products[index];
    if (foundProduct.productId == id) {
      products[index].quantity = products[index].quantity + 1;
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(id) {
  for (let index = 0; index < products.length; index++) {
    let foundProduct = products[index];
    if (foundProduct.productId == id) {
      products[index].quantity = products[index].quantity - 1;
    }
    if (products[index].quantity <= 0) {
      let indexofproduct = cart.findIndex((item) => item.productId == id);
      cart.splice(indexofproduct, 1);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(pid) {
  for (let index = 0; index < products.length; index++) {
    if (pid === products[index].productId) {
      products[index].quantity = 0;
    }
  }
  let indexofproduct = cart.findIndex((item) => item.productId == pid);
  cart.splice(indexofproduct, 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let productPrice = null;
  for (let index = 0; index < products.length; index++) {
    productPrice += products[index].quantity * products[index].price;
  }
  return productPrice;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
  for (let index = 0; index < products.length; index++) {
    products[index].quantity = 0;
  }
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let balance = 0;
function pay(amount) {
  balance += amount;

  return balance - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  // /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
