// should be display first time show the add money: this proses it😉
document.getElementById("cashout").style.display = "none";

// add-mony btn
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "block";
    document.getElementById("cashout").style.display = "none";
  });

// cashout btn
document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cashout").style.display = "block";
});
