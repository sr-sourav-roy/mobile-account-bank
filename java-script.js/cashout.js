document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");

    // check this amount account:
    if (amount > mainBalance) {
      alert("wrong amount! please give me right number!");
      return;
    }

    // condition:
    if (agentNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextIDandValue("main-balance", sum);

        // transaction history readymate set
        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
        cashout ${amount} Tk form ${agentNumber} Agent Number
        `;
        container.appendChild(p);
      } else {
        alert("wrong pin Number!");
      }
    } else {
      alert("wrong pin Number!");
    }
  });
