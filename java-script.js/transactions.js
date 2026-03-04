document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    //   hide form addMoney and Cashout
    toggleHandle("add-money", "none");
    toggleHandle("cashout", "none");
    toggleHandle("transactions", "block");
  });
