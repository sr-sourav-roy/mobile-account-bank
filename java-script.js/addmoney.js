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

        // Added by the call id and value functions:
        setInnerTextIDandValue("main-balance", sum);

        // transaction history readymate set
        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
        Added ${amount} Tk form ${accountNumber} number
        `;
        container.appendChild(p);
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong number!");
    }
  });
