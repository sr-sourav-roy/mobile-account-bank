document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");

    // condition:
    if (agentNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextIDandValue("main-balance", sum);
      } else {
        alert("wrong pin Number!");
      }
    } else {
      alert("wrong pin Number!");
    }
  });
