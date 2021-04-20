/*** WEEKLY BUDGET ***/
const weeklyButton = document.querySelector(".budget-form");
weeklyButton.addEventListener('submit', (e) => { e.preventDefault();
    let budgetAmount = document.getElementById("budget-amount").value;
    let addedBudgetAmount = document.createElement("h5");
    addedBudgetAmount.innerText = `Spending limit for the week: $${budgetAmount}`;
    let dropPoint = document.querySelector(".budget-form");
    dropPoint.append(addedBudgetAmount);
});
const addExpense = document.querySelector(".expenseForm");
// const addExpense = document.getElementById("addExpenseButton");
let entertainmentSum = 0;
let foodSum = 0;
let clothingSum = 0;
let billsSum = 0;
let otherSum = 0;
addExpense.addEventListener("submit", (e) =>{
  e.preventDefault();
 let getCategories = document.getElementById("categories").value
 let getExpenseAmount = document.getElementById("addExpenseAmount").value;

 
//Get Expense detail, add for later.

 console.log(getCategories);
 console.log(getExpenseAmount);

 if ( getCategories == "Entertainment"){
  console.log(getCategories + getExpenseAmount );
    entertainmentSum += Number(getExpenseAmount);
   
 }  else if (getCategories == "Food") {
  console.log(getCategories + getExpenseAmount);
    foodSum += Number(getExpenseAmount);
 }else if (getCategories == "Clothing") {
  console.log(getCategories + getExpenseAmount );
    clothingSum += Number(getExpenseAmount);
}else if (getCategories == "Bills") {
  console.log(getCategories + getExpenseAmount );
  billsSum += Number(getExpenseAmount);
} else {
  getCategories == "Other"
  console.log(getCategories + getExpenseAmount);
  otherSum += Number(getExpenseAmount);
}

console.log("Entertainment sum: " +entertainmentSum);
console.log("food sum: " +foodSum);
console.log("clothing sum: "+clothingSum);
console.log("bills: "+billsSum);
console.log("other sum: " +otherSum);

let entertainmentTotal = document.getElementById("entertainmentOutput");
entertainmentTotal.innerText = `Entertainment: $${entertainmentSum}`;

});

