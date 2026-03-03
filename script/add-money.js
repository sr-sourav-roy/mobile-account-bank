// //first disply
// document.getElementById("cashout").style.display = "none";

// // addMoney click
// document
//   .getElementById("add-money-card")
//   .addEventListener("click", function () {
//     document.getElementById("add-money").style.display = "block";
//     document.getElementById("cashout").style.display = "none";
//   });

// // cashout click
// document.getElementById("cashout-card").addEventListener("click", function () {
//   document.getElementById("cashout").style.display = "block";
//   document.getElementById("add-money").style.display = "none";
// });

// // add money calculate:
// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (event) {
//     const accountNumber = document.getElementById("account-numbers").value;

//     const pinNumber = document.getElementById("pin").value;
//     const convertPinNumber = parseInt(pinNumber);

//     const amountNumber = document.getElementById("amount").value;
//     const convertAmount = parseFloat(amountNumber);

//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertMainBalance = parseFloat(mainBalance);

//     if (accountNumber.length === 11) {
//       if (convertPinNumber === 1234) {
//         const sum = convertMainBalance + convertAmount;
//         document.getElementById("main-balance").innerText = sum;
//       } else {
//         alert("wrong password");
//       }
//     } else {
//       alert("wrong account");
//     }
//   });
