"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Ubaid Ahmad",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Bakhti GUll",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Sonia Shah",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "spen Khan",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
//-------------------------------------------------Update UI---------------------------------------------
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calculateBalance(acc);
  calculateSummary(acc);
};
//-----------------------------------------diplay Movements------------------------------------
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
        
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
//--------------------------------------------------------Calculate Summary--------------------------------------------------
const calculateSummary = function (account) {
  //all deposits
  const allincomes = account.movements
    .filter((value) => value > 0)
    .reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = `${allincomes} €`;
  //now all withdrawals

  const allOuts = Math.abs(
   account.movements.filter((value) => value < 0).reduce((acc, curr) => acc + curr)
  );
  labelSumOut.textContent = `${allOuts} €`;
  //now total interest
  const totalInterest = account.movements
    .filter((value) => value > 0)
    .map((value) => (value * 1.2) / 100)
    .filter((value) => value >= 1) //to remove interests less than 1
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = `${totalInterest} €`;
};

//---------------------------------------Calculate balance and display it using Reduce Method----------------------------
const calculateBalance = function (acc) {
  const balance = acc.movements.reduce((acc, curr, i) => {
    return acc + curr;
  }, 0);
  acc.balance=balance;
  labelBalance.textContent = `${acc.balance} €`;
};


//-----------------------------------------------create User Name  using forEach and map method-----------------------------------

const creatUserName = function (account) {
  account.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
creatUserName(accounts);
//-------------------------------------------------Implementing Login Functionality-----------------------------------------

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  //prevents the pae from reloading which is default behavior of farm submitt button

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value.toLowerCase().trim()
  );
  
    if (!currentAccount) {
    //---------------------------------------------------------------------------------- username not found
    labelWelcome.textContent = "❌ No account found";
    containerApp.style.opacity = 0;
  } else if (currentAccount.pin === Number(inputLoginPin.value)) {
    //---------------------------------------------------------------------------------- login success
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    //----------------------------------------------------------------------------------- wrong PIN
    labelWelcome.textContent = "❌ Incorrect PIN";
    containerApp.style.opacity = 0;
  }
});












