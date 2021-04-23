function updateBalance() {
  let remainingBalance = budgetSum - weeklySpending;
  let balanceMessage = document.querySelector('.no-more-money');
  balanceMessage.innerText = `$${remainingBalance}`;
  if (remainingBalance < 0) {
    alert("You're in debt, remove some spending for the week to get out of debt.");
  }
}
let weeklySpending = 0;
function updateWeeklySum(){
  weeklySpending = entertainmentSum + foodSum + clothingSum + billsSum + otherSum;
  let weeklyTotal = document.querySelector('.money-spent');
  weeklyTotal.innerText = `$${weeklySpending}`;
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
let entertainmentSum =0;
let foodSum = 0;
let clothingSum = 0;
let billsSum = 0;
let otherSum = 0;

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = month + "/" + day + "/" + year;

addExpense.addEventListener('submit', (e) => {
  e.preventDefault();
  let getCategories = document.getElementById('categories').value;
  let getExpenseAmount = Number(document.getElementById('addExpenseAmount').value);
  let getExpenseMemo = document.getElementById('addExpense').value;

  //Get Expense detail, add for later.


  if (getCategories == 'Entertainment') {
    
    entertainmentSum += getExpenseAmount;

    let memoEntertainmentContainer = document.getElementById('entertainmentDropdown');
    let entertainmentMemoLi = document.createElement('li');
    memoEntertainmentContainer.append(entertainmentMemoLi);
    entertainmentMemoLi.innerHTML += `${getExpenseMemo} $${getExpenseAmount} ` + newdate;

    entertainmentMemoLi.addEventListener("mouseenter", deleteEntertainment);
    function deleteEntertainment(e){
      e.target.innerText = "Click to delete";
      }
    entertainmentMemoLi.addEventListener("mouseleave", unDeleteEntertainment);
    function unDeleteEntertainment(e){
      e.target.innerText = `${getExpenseMemo} $${getExpenseAmount} ` + newdate;
      e.target.style.color = "black";
      }
    entertainmentMemoLi.addEventListener("click", finalDeleteEntertainment);
    function finalDeleteEntertainment(e){
          e.target.remove();
          entertainmentSum -= getExpenseAmount;
          entertainmentTotal.innerText = `Entertainment: $${entertainmentSum}`;
          updateWeeklySum();
          updateBalance();
      }

  } else if (getCategories == 'Food') {
    foodSum += getExpenseAmount;

    let memoFoodContainer = document.getElementById('foodDropdown');
    let foodMemoLi = document.createElement('li');
    memoFoodContainer.append(foodMemoLi);
    foodMemoLi.innerHTML += `${getExpenseMemo} $${getExpenseAmount} ` + newdate;

    foodMemoLi.addEventListener("mouseenter", deleteFood);
    function deleteFood(e){
      e.target.innerText = "Click to delete";
      }
    foodMemoLi.addEventListener("mouseleave", unDeleteFood);
    function unDeleteFood(e){
      e.target.innerText = `${getExpenseMemo} $${getExpenseAmount} `+ newdate ;
      e.target.style.color = "black";
      }
    foodMemoLi.addEventListener("click", finalDeleteFood);
    function finalDeleteFood(e){
          e.target.remove();
          foodSum -= getExpenseAmount;
          foodTotal.innerText = `Food: $${foodSum}`;
          updateWeeklySum();
          updateBalance();
      }

  } else if (getCategories == 'Clothing') {
    clothingSum += getExpenseAmount;
 
    let memoClothingContainer = document.getElementById('clothingDropdown');
    let clothingMemoLi = document.createElement('li');
    memoClothingContainer.append(clothingMemoLi);
    clothingMemoLi.innerHTML += `${getExpenseMemo} $${getExpenseAmount} ` + newdate;

    clothingMemoLi.addEventListener("mouseenter", deleteClothing);
    function deleteClothing(e){
      e.target.innerText = "Click to delete";
      }
    clothingMemoLi.addEventListener("mouseleave", unDeleteClothing);
    function unDeleteClothing(e){
      e.target.innerText = `${getExpenseMemo} $${getExpenseAmount} `+ newdate ;
      e.target.style.color = "black";
      }
    clothingMemoLi.addEventListener("click", finalDeleteClothing);
    function finalDeleteClothing(e){
          e.target.remove();
          clothingSum -= getExpenseAmount;
          clothingTotal.innerText = `Clothing: $${clothingSum}`;
          updateWeeklySum();
          updateBalance();
      }
  
  } else if (getCategories == 'Bills') {
    billsSum += getExpenseAmount;

    let memoBillsContainer = document.getElementById('billsDropdown');
    let billsMemoLi = document.createElement('li');
    memoBillsContainer.append(billsMemoLi);
    billsMemoLi.innerHTML += `${getExpenseMemo} $${getExpenseAmount} ` +newdate;

    billsMemoLi.addEventListener("mouseenter", deleteBill);
    function deleteBill(e){
      e.target.innerText = "Click to delete";
      }
    billsMemoLi.addEventListener("mouseleave", unDeleteBill);
    function unDeleteBill(e){
      e.target.innerText = `${getExpenseMemo} $${getExpenseAmount} `+ newdate;
      e.target.style.color = "black";
      }
    billsMemoLi.addEventListener("click", finalDeleteBill);
    function finalDeleteBill(e){
          e.target.remove();
          billsSum -= getExpenseAmount;
          billsTotal.innerText = `Bills: $${billsSum}`;
          updateWeeklySum();
          updateBalance();
      }

  } else {
    getCategories == 'Other';
    otherSum += getExpenseAmount;

    let memoOtherContainer = document.getElementById('otherDropdown');
    let otherMemoLi = document.createElement('li');
    memoOtherContainer.append(otherMemoLi);
    otherMemoLi.innerHTML = `${getExpenseMemo} $${getExpenseAmount} ` + newdate;

    otherMemoLi.addEventListener("mouseenter", deleteOther);
    function deleteOther(e){
      e.target.innerText = "Click to delete";
      }
    otherMemoLi.addEventListener("mouseleave", unDeleteOther);
    function unDeleteOther(e){
      e.target.innerText = `${getExpenseMemo} $${getExpenseAmount} `+ newdate;
      e.target.style.color = "black";
      }
    otherMemoLi.addEventListener("click", finalDeleteOther);
    function finalDeleteOther(e){
          e.target.remove();
          otherSum -= getExpenseAmount;
          otherTotal.innerText = `Other: $${otherSum}`;
          updateWeeklySum();
          updateBalance();
      }
  }

  let entertainmentTotal = document.getElementById('entertainmentButton');
  entertainmentTotal.innerText = `Entertainment: $${entertainmentSum}`;
  let foodTotal = document.getElementById('foodButton');
  foodTotal.innerText = `Food: $${foodSum}`;
  let clothingTotal = document.getElementById('clothingButton');
  clothingTotal.innerText = `Clothing: $${clothingSum}`;
  let billsTotal = document.getElementById('billsButton');
  billsTotal.innerText = `Bills: $${billsSum}`;
  let otherTotal = document.getElementById('otherButton');
  otherTotal.innerText = `Other: $${otherSum}`;

  updateWeeklySum();
  updateBalance();

});

let entertainmentClick = document.getElementById("entertainmentButton");
let entertainmentClickDropDown = document.getElementById("entertainmentDropdown");
entertainmentClick.addEventListener("click", (e) => {
  e.preventDefault();
  entertainmentClickDropDown.classList.toggle("hidden")
});

let foodClick = document.getElementById("foodButton");
let foodClickDropDown = document.getElementById("foodDropdown");
foodClick.addEventListener("click", (e) => {
  e.preventDefault();
  foodClickDropDown.classList.toggle("hidden")
});

let clothingClick = document.getElementById('clothingButton');
let clothingClickDropDown = document.getElementById('clothingDropdown');
clothingClick.addEventListener('click', (e) => {
  e.preventDefault();
  clothingClickDropDown.classList.toggle('hidden');
});

let billsClick = document.getElementById('billsButton');
let billsClickDropDown = document.getElementById('billsDropdown');
billsClick.addEventListener('click', (e) => {
  e.preventDefault();
  billsClickDropDown.classList.toggle('hidden');
});

let otherClick = document.getElementById("otherButton");
let otherClickDropDown = document.getElementById("otherDropdown");
otherClick.addEventListener("click", (e) => {
  e.preventDefault();
  otherClickDropDown.classList.toggle("hidden")

});


let remainingBalanceHover = document.getElementById("remainingBalanceNav");
let weeklySpendingHover = document.getElementById("weeklySpendingNav"); 
let spendingCategoriesHover = document.getElementById("spendingCategoriesHover")

remainingBalanceHover.addEventListener("mouseover", silverColorBudget);
weeklySpendingHover.addEventListener("mouseover", silverColorSpending);
spendingCategoriesHover.addEventListener("mouseover", getSilver);

function getSilver(e) {
  e.target.classList.add("silver");
}

function silverColorBudget(e){
  e.target.innerHTML =budgetSum - weeklySpending;
  e.target.classList.add("silver");
  
}

function silverColorSpending(e){
  e.target.innerHTML =weeklySpending;
  e.target.classList.add("silver");
  
}

remainingBalanceHover.addEventListener("mouseleave", silveOutBudget);
weeklySpendingHover.addEventListener("mouseleave", silverOutSpending);
spendingCategoriesHover.addEventListener("mouseleave", getOutSilver);

function getOutSilver(e) {
  e.target.classList.remove("silver");
}
function silveOutBudget(e){
  e.target.innerText ="REMAINING BALANCE"
  e.target.classList.remove("silver");
}
function silverOutSpending(e){
  e.target.innerText ="Weekly Spending"
  e.target.classList.remove("silver");
}
 
