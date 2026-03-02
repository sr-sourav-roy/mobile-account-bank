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
        //   link create by other side
        window.location.href = "./main.html";
      } else {
        alert("wrong");
      }
    } else {
      alert("wrong");
    }
  });
