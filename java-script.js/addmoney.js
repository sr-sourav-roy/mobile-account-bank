document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-numbers").value;
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const mainBalance = getInnerTextById("main-balance");
    const allSelected = document.getElementById("all-selected").value;

    // check this amount number
    if (amount < 0) {
      alert("wrong amount! So positive amount please!");
      return;
    }

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText = sum;

        // Added by the call id and value functions:
        setInnerTextIDandValue("main-balance", sum);

        // transaction history readymate set
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-green-400");
        div.innerHTML = `
        <h1 class ="text-red-600 mt-8">Add Money form  ${allSelected}</h1>
        <h3>${amount} tk</h3>
        <p>account number: ${accountNumber}</p>
        `;

        container.appendChild(div);
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong number!");
    }
  });
