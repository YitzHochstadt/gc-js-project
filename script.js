/*** WEEKLY BUDGET ***/
function updateBalance() {
  let remainingBalance = budgetSum - weeklySpending;
  let balanceMessage = document.querySelector('.no-more-money');
  balanceMessage.innerText = `$${remainingBalance}`;
  if (remainingBalance < 0) {
    alert('NO MORE MONEY TO SPEND');
  }
}

const weeklyButton = document.querySelector('.budget-form');
let budgetSum = 0;
weeklyButton.addEventListener('submit', (e) => {
  e.preventDefault();
  let budgetAmount = Number(document.getElementById('budget-amount').value);
  budgetSum += budgetAmount;
  let budgetTotal = document.getElementById('budget-total');
  budgetTotal.innerText = `Spending limit for the week: $${budgetSum}`;
  updateBalance();
});

const addExpense = document.querySelector('.expenseForm');
let entertainmentSum = 0;
let foodSum = 0;
let clothingSum = 0;
let billsSum = 0;
let otherSum = 0;
let weeklySpending = 0;


addExpense.addEventListener('submit', (e) => {
  e.preventDefault();
  let getCategories = document.getElementById('categories').value;
  let getExpenseAmount = document.getElementById('addExpenseAmount').value;
  let getExpenseMemo = document.getElementById('addExpense').value;

  //Get Expense detail, add for later.

  console.log(getCategories);
  console.log(getExpenseAmount);
  console.log(getExpenseMemo);

  if (getCategories == 'Entertainment') {
    console.log(getCategories + getExpenseAmount);
    entertainmentSum += Number(getExpenseAmount);

    let entertainmentMemoLi = document.createElement('li');
    let memoEntertainmentContainer = document.getElementById(
      'entertainmentDropdown'
    );
    memoEntertainmentContainer.append(entertainmentMemoLi);
    memoEntertainmentContainer.innerHTML += `${getExpenseMemo} $${getExpenseAmount}`;
    
      



    


  } else if (getCategories == 'Food') {
    console.log(getCategories + getExpenseAmount);
    foodSum += Number(getExpenseAmount);

    let foodMemoLi = document.createElement('li');
    let memoFoodContainer = document.getElementById('foodDropdown');
    memoFoodContainer.append(foodMemoLi);
    memoFoodContainer.innerHTML += `${getExpenseMemo} $${getExpenseAmount}`;
  } else if (getCategories == 'Clothing') {
    console.log(getCategories + getExpenseAmount);
    clothingSum += Number(getExpenseAmount);

    let clothingMemoLi = document.createElement('li');
    let memoClothingContainer = document.getElementById('clothingDropdown');
    memoClothingContainer.append(clothingMemoLi);
    memoClothingContainer.innerHTML += `${getExpenseMemo} $${getExpenseAmount}`;
  
  } else if (getCategories == 'Bills') {
    console.log(getCategories + getExpenseAmount);
    billsSum += Number(getExpenseAmount);

    let billsMemoLi = document.createElement('li');
    let memoBillsContainer = document.getElementById('billsDropdown');
    memoBillsContainer.append(billsMemoLi);
    memoBillsContainer.innerHTML += `${getExpenseMemo} $${getExpenseAmount}`;
  } else {
    getCategories == 'Other';
    console.log(getCategories + getExpenseAmount);
    otherSum += Number(getExpenseAmount);

    let otherMemoLi = document.createElement('li');
    let memoOtherContainer = document.getElementById('otherDropdown');
    memoOtherContainer.append(otherMemoLi);
    memoOtherContainer.innerHTML += `${getExpenseMemo} $${getExpenseAmount}`;
  }

  console.log('Entertainment sum: ' + entertainmentSum);
  console.log('food sum: ' + foodSum);
  console.log('clothing sum: ' + clothingSum);
  console.log('bills: ' + billsSum);
  console.log('other sum: ' + otherSum);

  let entertainmentTotal = document.getElementById('entertainment-button');
  entertainmentTotal.innerText = `Entertainment: $${entertainmentSum}`;
  let foodTotal = document.getElementById('foodButton');
  foodTotal.innerText = `Food: $${foodSum}`;
  let clothingTotal = document.getElementById('clothingButton');
  clothingTotal.innerText = `Clothing: $${clothingSum}`;
  let billsTotal = document.getElementById('billsButton');
  billsTotal.innerText = `Bills: $${billsSum}`;
  let otherTotal = document.getElementById('otherButton');
  otherTotal.innerText = `Other: $${otherSum}`;

  weeklySpending =
    entertainmentSum + foodSum + clothingSum + billsSum + otherSum;
  let weeklyTotal = document.querySelector('.money-spent');
  weeklyTotal.innerText = `$${weeklySpending}`;
  updateBalance();
});



let entertainmentClick = document.getElementById("entertainmentButton");
let entertainmentClickDropDown = document.getElementById("entertainmentDropdown");
entertainmentClick.addEventListener("click", (e => {
  e.preventDefault();
  entertainmentClickDropDown.classList.toggle("hidden")
  
}));

let foodClick = document.getElementById("foodButton");
let foodClickDropDown = document.getElementById("foodDropdown");
foodClick.addEventListener("click", (e => {
  e.preventDefault();
  foodClickDropDown.classList.toggle("hidden")
}));

let clothingClick = document.getElementById("clothingButton");
let clothingClickDropDown = document.getElementById("clothingDropdown");
clothingClick.addEventListener("click", (e => {
  e.preventDefault();
  clothingClickDropDown.classList.toggle("hidden")
}));

let billsClick = document.getElementById("billsButton");
let billsClickDropDown = document.getElementById("billsDropdown");
billsClick.addEventListener("click", (e => {
  e.preventDefault();
  billsClickDropDown.classList.toggle("hidden")

 
}));

let otherClick = document.getElementById("otherButton");
let otherClickDropDown = document.getElementById("otherDropdown");
otherClick.addEventListener("click", (e => {
  e.preventDefault();
  otherClickDropDown.classList.toggle("hidden")
}));
