"use srtict";

let money = +prompt("What is your monthly budget?", ""),
  time = prompt("Enter data in YYYY-MM-DD format", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Enter a mandatory expense item for this month", ""),
    b = prompt("How much will it cost?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    typeof a != "" &&
    typeof b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("The minimum level of wealth");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("The medium level of wealth");
} else if (appData.moneyPerDay > 2000) {
  console.log("The high level of wealth");
} else {
  console.log("An error has occurred");
}
