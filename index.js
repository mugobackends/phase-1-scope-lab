// Task 1: Declare customerName in global scope
var customerName = 'bob';

// Task 2: Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Task 4: Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare constant and attempt to change it
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // This will throw "TypeError: Assignment to constant variable" when called
  leastFavoriteCustomer = 'someone else';
}