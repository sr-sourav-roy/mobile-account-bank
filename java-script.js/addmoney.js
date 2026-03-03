document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-numbers").value;
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const mainBalance = getInnerTextById("main-balance");

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText = sum;
        // the function call by id and value add:
        setInnerTextIDandValue("main-balance", sum);
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong number!");
    }
  });
