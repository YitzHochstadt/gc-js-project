/*** WEEKLY BUDGET ***/
function updateBalance(){
  let remainingBalance = budgetSum-weeklySpending;
  let balanceMessage = document.querySelector(".no-more-money");
  balanceMessage.innerText = `$${remainingBalance}`;
  if (remainingBalance < 0) {
    alert ("NO MORE MONEY TO SPEND");
}
}

const weeklyButton = document.querySelector(".budget-form");
let budgetSum = 0;  
weeklyButton.addEventListener('submit', (e) => { e.preventDefault();
  let budgetAmount = Number(document.getElementById("budget-amount").value);
  budgetSum += budgetAmount;
  let budgetTotal = document.getElementById("budget-total");
  budgetTotal.innerText = `Spending limit for the week: $${budgetSum}`;
  updateBalance();
});
const addExpense = document.querySelector(".expenseForm");
let entertainmentSum = 0;
let foodSum = 0;
let clothingSum = 0;
let billsSum = 0;
let otherSum = 0;
let weeklySpending = 0;
addExpense.addEventListener("submit", (e) =>{
  e.preventDefault();
 let getCategories = document.getElementById("categories").value
 let getExpenseAmount = document.getElementById("addExpenseAmount").value;

//Get Expense detail, add for later.
 if (getCategories == "Entertainment"){
    console.log(getCategories + getExpenseAmount);
    entertainmentSum += Number(getExpenseAmount);
  } else if (getCategories == "Food") {
    console.log(getCategories + getExpenseAmount);
    foodSum += Number(getExpenseAmount);
  } else if (getCategories == "Clothing") {
    console.log(getCategories + getExpenseAmount);
    clothingSum += Number(getExpenseAmount);
  } else if (getCategories == "Bills") {
    console.log(getCategories + getExpenseAmount);
    billsSum += Number(getExpenseAmount);
  } else {
    getCategories == "Other"
    console.log(getCategories + getExpenseAmount);
    otherSum += Number(getExpenseAmount);
  }

let entertainmentTotal = document.getElementById("entertainment-output");
entertainmentTotal.innerText = `Entertainment: $${entertainmentSum}`;
let foodTotal = document.getElementById("food-output");
foodTotal.innerText = `Food: $${foodSum}`;
let clothingTotal = document.getElementById("clothing-output");
clothingTotal.innerText = `Clothing: $${clothingSum}`;
let billsTotal = document.getElementById("bills-output");
billsTotal.innerText = `Bills: $${billsSum}`;
let otherTotal = document.getElementById("other-output");
otherTotal.innerText = `Other: $${otherSum}`;

weeklySpending = entertainmentSum+foodSum+clothingSum+billsSum+otherSum;
let weeklyTotal = document.querySelector(".money-spent");
weeklyTotal.innerText = `$${weeklySpending}`;
updateBalance();

});