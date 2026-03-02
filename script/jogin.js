document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-Number").value;
    const pinNumber = document.getElementById("pin-Number").value;
    const convertPIn = parseInt(pinNumber);

    //  conditions
    if (accountNumber.length === 11) {
      if (convertPIn === 1234) {
        window.location.href = "main.html";
      } else {
        alert("wrong pin");
      }
    } else {
      alert("please give me account Number!");
    }
  });
