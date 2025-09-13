"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
alert(
  "there are four accounts availible\n username   pin\nua    1111\nma   2222\nhs 3333\nsk 4444"
);
// Data
// alert(
//   "account 1 user name: ua\naccount 2 username:ma\naccount 3 username: hs\naccount 4 username: sk"
// );
const account1 = {
  owner: "Ubaid Ahmad",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2025-08-15T17:01:17.194Z",
    "2025-08-18T23:36:17.929Z",
    "2025-08-19T10:51:36.790Z",
  ],
  currency: "PKR",
  locale: "en-US",
};

const account2 = {
  owner: "Muhammd Ali",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "PKR",
  locale: "en-US",
};

const account3 = {
  owner: "hasan Shah",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "PKR",
  locale: "en-US",
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
  ],
  currency: "PKR",
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

//-------------------------------------------------Update UI---------------------------------------------
const updateUI = function (acc) {
  displayMovements(acc);
  calculateBalance(acc);
  calculateSummary(acc);
};
//------------------------------------------------create User Name---------------------------------------

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
//-----------------------------------------formatting balnce------------------------------------
const formatValue = function (value, local, currency) {
  const options = {
    style: "currency",
    currency: currency,
    useGrouping: true,
  };
  return new Intl.NumberFormat(local, options).format(value);
};
//-----------------------------------------diplay Movements------------------------------------
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementsDates(date);

    const formattedMov = formatValue(mov, acc.locale, acc.currency);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
        
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//------------------------------------------Format Movements Dates-------------------------------------
const formatMovementsDates = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const Dayspassed = calcDaysPassed(new Date(), date);
  if (Dayspassed === 0) return "Today";
  if (Dayspassed === 1) return "Yesterday";
  if (Dayspassed <= 7) return `${Dayspassed} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, "0");
    // const day = String(date.getDate()).padStart(2, "0");
    // return `${day}/${month}/${year}`;
    const local = navigator.language;
    const options = {
      // weekday: "long", //refers to day of the weeek
      month: "long",
      year: "numeric",
      day: "numeric", //refers to date
      // hour: "numeric",
      // minute: "numeric",
    };
    return new Intl.DateTimeFormat(local, options).format(date);
  }
};

//----------------------------------------Calculate Summary--------------------------------------------
const calculateSummary = function (acc) {
  //all deposits
  const allincomes = acc.movements
    .filter((value) => value > 0)
    .reduce((acc, curr) => acc + curr, 0);
  const formattedIncome = formatValue(allincomes, acc.locale, acc.currency);
  labelSumIn.textContent = formattedIncome;
  //now all withdrawals

  const allOuts = Math.abs(
    acc.movements
      .filter((value) => value < 0)
      .reduce((acc, curr) => acc + curr, 0)
  );
  const formattedOuts = formatValue(allOuts, acc.locale, acc.currency);
  labelSumOut.textContent = formattedOuts;
  //now total interest
  const totalInterest = acc.movements
    .filter((value) => value > 0)
    .map((value) => (value * acc.interestRate) / 100)
    .filter((value) => value >= 1) //to remove interests less than 1
    .reduce((acc, curr) => acc + curr, 0);
  const formattedInterest = formatValue(
    totalInterest,
    acc.locale,
    acc.currency
  );
  labelSumInterest.textContent = formattedInterest;
};

//-----------------------------------------Calculate balance and display it------------------------------
const calculateBalance = function (acc) {
  const balance = acc.movements.reduce((acc, curr, i) => {
    return acc + curr;
  }, 0);
  acc.balance = balance;

  const formattedbalance = formatValue(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = formattedbalance;
  const now = new Date();
  // const year = now.getFullYear();
  // const month = String(now.getMonth() + 1).padStart(2, "0");
  // const date = String(now.getDate()).padStart(2, "0");
  // const hour = String(now.getHours()).padStart(2, "0");
  // const minutes = String(now.getMinutes()).padStart(2, "0");
  const options = {
    weekday: "long", //refers to day of the weeek
    month: "long",
    year: "numeric",
    day: "numeric", //refers to date
    hour: "numeric",
    minute: "numeric",
  };

  labelDate.textContent = new Intl.DateTimeFormat(acc.locale, options).format(
    now
  );
};
//------------------------------------------Implementing Transfer--------------------------------------------
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value.trim());
  const date = new Date();
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
    currentAccount.movementsDates.push(String(date));
    reciever.movements.push(amount);
    reciever.movementsDates.push(String(date));

    updateUI(currentAccount); //  update first

    alert(`${amount} ${currentAccount.currency} sent to ${reciever.owner}`);
  } else if (!reciever) {
    alert("No matching account!");
  } else if (currentAccount.balance < amount) {
    alert("Not enough money!");
  }
  if (timer) clearInterval(timer);
  timer = logoutTImer();
});
//---------------------------------------------Loan Amount--------------------------------------------------
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  const date = new Date();
  if (
    loanAmount > 0 &&
    currentAccount.movements.some((val) => val > loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(String(date));
      updateUI(currentAccount);

      alert(
        `Congratulations you aregranted with ${loanAmount} ${currentAccount.currency} loan Amount`
      );
      btnLoan.disabled = false;
      btnLoan.style.cursor = "default";
    }, 5000);
    btnLoan.disabled = true;
    btnLoan.style.cursor = "not-allowed";
    inputLoanAmount.value = "";
  } else if (loanAmount <= 0) {
    alert("please input a valid Amount");
    inputLoanAmount.value = "";
  } else {
    alert(
      `Company policy!\nYou are required to have  a deposit in your acount equals atleast 10% of the requested amount`
    );
    inputLoanAmount.value = "";
  }
  if (timer) clearInterval(timer);
  timer = logoutTImer();
});

//---------------------------------------Implementing Login Functionality------------------------------------

let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  //prevents the pae from reloading which is default behavior of farm submitt button

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value.toLowerCase().trim()
  );

  if (!currentAccount) {
    // username not found
    labelWelcome.textContent = "❌ No account found";
    containerApp.style.opacity = 0;
  } else if (currentAccount.pin === Number(inputLoginPin.value)) {
    // login success
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = logoutTImer();
    updateUI(currentAccount);
  } else {
    // wrong PIN
    labelWelcome.textContent = "❌ Incorrect PIN";
    containerApp.style.opacity = 0;
  }
});
//=============================================================Logout TImer=======================================
const logoutTImer = function () {
  let time = 300;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  return setInterval(tick, 1000);
};

//---------------------------------------------------------sort Movements-------------------------------------
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
//---------------------------------------------------------Close Account----------------------------------------
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

//----------------------------------------------------Total Bank Money-------------------------------------
// const allBalance = accounts
//   .map((account) => account.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(allBalance);

//Now using flatMap method

const allBalance = accounts
  .flatMap((account) => account.movements)
  .reduce((acc, curr) => acc + curr, 0);

//============================================================changing currency====================================
// labelBalance.addEventListener("click", function () {
//   if (currentAccount.currency === "PKR") {
//     currentAccount.currency = "USD";
//     currentAccount.movements = currentAccount.movements.map(
//       (mov) => mov * 0.0035
//     );
//   } else if (currentAccount.currency === "USD") {
//     currentAccount.currency = "EUR";
//     currentAccount.movements = currentAccount.movements.map(
//       (mov) => mov * 0.86
//     );
//   } else if (currentAccount.currency === "EUR") {
//     currentAccount.currency = "PKR";
//     currentAccount.movements = currentAccount.movements.map(
//       (mov) => mov * 328.42
//     );
//   }
//   updateUI(currentAccount);
// });
