const addExpense = document.getElementById("addExpenseButton");

addExpense.addEventListener("click", (e) =>{
  e.preventDefault();
 let getCategories = document.getElementById("categories").value
 let getExpenseAmount = document.getElementById("addExpenseAmount").value;
  let  entertainmentContainer = document.getElementById("entertainmentOutput");
//Get Expense detail, add for later.

 console.log(getCategories);
 console.log(getExpenseAmount);

 if ( getCategories == "Entertainment"){
   console.log("Entertainment: " + getExpenseAmount );
    getExpenseAmount += entertainmentContainer
 }  else if (getCategories == "Food") {
  console.log("Food: " + getExpenseAmount );

 }else if (getCategories == "Clothing") {
  console.log("Clothing: " + getExpenseAmount );

}else if (getCategories == "Bills") {
  console.log("Bill: " + getExpenseAmount );

} else {
  getCategories == "Other"
  console.log("Other: " + getExpenseAmount);

  
}

});