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

addExpense.addEventListener("submit", (e) =>{
  e.preventDefault();
 let getCategories = document.getElementById("categories").value
 let getExpenseAmount = document.getElementById("addExpenseAmount").value;
  let  entertainmentContainer = document.getElementById("entertainmentOutput");
  let total = 0;
//Get Expense detail, add for later.
console.log(entertainmentContainer);
 console.log(getCategories);
 console.log(getExpenseAmount);

 if ( getCategories == "Entertainment"){
   total += getExpenseAmount;
   console.log("Entertainment: " + total );
   
 }  else if (getCategories == "Food") {
  console.log("Food: " + getExpenseAmount );
  total += getExpenseAmount;
 }else if (getCategories == "Clothing") {
  console.log("Clothing: " + getExpenseAmount );

}else if (getCategories == "Bills") {
  console.log("Bill: " + getExpenseAmount );

} else {
  getCategories == "Other"
  console.log("Other: " + getExpenseAmount);
}


console.log(total);

});
