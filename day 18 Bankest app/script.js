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
  ovementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
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
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

//----------------------------------------------------------------------------------------------------------------------diplay Movements--------------------------------
const displayMovements = function (movements,sort=false) {
  containerMovements.innerHTML = "";
  const movs=sort?movements.slice().sort((a,b)=>a-b):movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov.toFixed(2)}</div>
        </div>
        
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
//-------------------------------------------------------------------------------------------------------Calculate Summary----------------------------------------------
const calculateSummary = function (account) {
  //all deposits
  const allincomes = account.movements
    .filter((value) => value > 0)
    .reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = `${allincomes.toFixed(2)} €`;
  //now all withdrawals

  const allOuts = 
   Math.abs(account.movements.filter((value) => value < 0).reduce((acc, curr) => acc + curr))
  ;
  labelSumOut.textContent = `${allOuts.toFixed(2)} €`;
  //now total interest
  const totalInterest = account.movements
    .filter((value) => value > 0)
    .map((value) => (value * 1.2) / 100)
    .filter((value) => value >= 1) //to remove interests less than 1
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = `${totalInterest.toFixed(2)} €`;  //the tofixed reduces the long to decimal value to a 2 digits after the decimal point
};

//-------------------------------------------------------------------------------------------Calculate balance and display it using Reduce Method-----------------------
const calculateBalance = function (acc) {
  const balance = acc.movements.reduce((acc, curr, i) => {
    return acc + curr;
  }, 0);
  acc.balance=balance;
  labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};

//----------------------------------------------------------------------------------------------------------------------Update UI------------------------------------------
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calculateBalance(acc);
  calculateSummary(acc);
};
//-------------------------------------------------------------------------------------------create User Name  using forEach and map method----------------------------------

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
//---------------------------------------------------------------------------------------------------Implementing Login Functionality--------------------------------------

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
//-------------------------------------------------------------------------------------------------------Implementing Transfer amount------------------------------------
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value.trim());
  const reciever = accounts.find(
    (acc) => acc.username === inputTransferTo.value.toLowerCase().trim()
  );
  inputTransferTo.value = ""; //  clear inputs
  inputTransferAmount.value = "";
  if (
    reciever &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciever?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);

    updateUI(currentAccount); //  update first

    alert(`${amount} EUR sent to ${reciever.owner}`);
  } else if (!reciever) {
    alert("No matching account!");
  } else if (currentAccount.balance < amount) {
    alert("Not enough money!");
  }
});
//------------------------------------------------------------------------------------------------Request for Loan Amount--------------------------------------------------
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some((val) => val > loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
    inputLoanAmount.value = "";
    alert(`Congratulations you aregranted with ${loanAmount} EUR loan Amount`);
  } else if (loanAmount <= 0) {
    alert("please input a valid Amount");
    inputLoanAmount.value = "";
  } else {
    alert(
      "Company policy!\nYou are required to have  a deposit in your acount equals atleast 10% of the requested amount"
    );
    inputLoanAmount.value = "";           
  }
});
//--------------------------------------------------------------------------------------------------------------------sort Movements------------------------------------------
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//--------------------------------------------------------------------------------------------------------Close Account-----------------------------------------------------
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const closeName = inputCloseUsername.value.trim();
  const closePin = Number(inputClosePin.value.trim());

  inputCloseUsername.value = inputClosePin.value = "";

  if (
    closeName === currentAccount.username &&
    closePin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1); //deletes the currentaccount from accounts array
    //hiding UI

    containerApp.style.opacity = 0;
    labelWelcome.textContent =
      "Account deleted. Thank you for using our service.";
  } else {
    alert("wrong credentials");
  }
});

//----------------------------------------------------------------------------------------------Total Bank Money------------------------------------------------------------
// const allBalance = accounts
//   .map((account) => account.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(allBalance);

//Now using flatMap method

const allBalance = accounts
  .flatMap((account) => account.movements)
  .reduce((acc, curr) => acc + curr, 0);






















