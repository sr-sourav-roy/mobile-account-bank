// set-1
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // input account number:
    const accountNumber = document.getElementById("account-Number").value;

    // input pin Number:
    const pinNumber = document.getElementById("pin-Number").value;
    const pinConvertNumber = parseInt(pinNumber);

    if (accountNumber.length === 11) {
      if (pinConvertNumber === 1234) {
        window.location.href = "./main.html";
      } else {
        console.log("wrong");
      }
    } else {
      console.log("wrong");
    }
  });
