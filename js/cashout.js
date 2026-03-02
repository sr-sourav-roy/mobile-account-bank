document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById("cashout-pin").value;
    cashoutPin = parseInt(pin);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
      if (cashoutPin === 1234) {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("wrong pin...!");
      }
    } else {
      alert("please give me number!!");
    }
  });
