//default hishabe cashout none thakbe!
document.getElementById("cashout").style.display = "none";
document.getElementById("transactions").style.display = "none";

// add money card
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    //  just function call
    toggleHandle("add-money", "block");
    toggleHandle("cashout", "none");
    toggleHandle("transactions", "none");
  });

//   cashout card
document.getElementById("cashout-card").addEventListener("click", function () {
  //  just function call
  toggleHandle("add-money", "none");
  toggleHandle("cashout", "block");
  toggleHandle("transactions", "none");
});
