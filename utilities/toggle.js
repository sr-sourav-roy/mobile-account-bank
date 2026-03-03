document.getElementById("cashout").style.display = "none";

// add money card
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    //  just function call this
    toggleHandle("add-money", "block");
    toggleHandle("cashout", "none");
  });

//   cashout card
document.getElementById("cashout-card").addEventListener("click", function () {
  //  just function call this
  toggleHandle("add-money", "none");
  toggleHandle("cashout", "block");
});

// toggle handle by functions create!
function toggleHandle(id, status) {
  document.getElementById(id).style.display = status;
}
