document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-numbers").value;
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");

    if (accountNumber.length === 11) {
      if (pin === 1234) {
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong number!");
    }
  });
