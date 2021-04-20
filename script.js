/*** WEEKLY BUDGET ***/
const weeklyButton = document.querySelector(".budget-form");
weeklyButton.addEventListener('submit', (e) => { e.preventDefault();
    let budgetAmount = document.getElementById("budget-amount").value;
    let addedBudgetAmount = document.createElement("h5");
    addedBudgetAmount.innerText = `Spending limit for the week: $${budgetAmount}`;
    let dropPoint = document.querySelector(".budget-form");
    dropPoint.append(addedBudgetAmount);
});