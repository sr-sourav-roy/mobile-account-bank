// document
//   .getElementById("add_money")
//   .addEventListener("click", function (event) {
//     // preventDefault hocche reload kore jenow nah jay ei jonnw use kora!
//     event.preventDefault();

//     // 🔥input amount number
//     const amountAdd = document.getElementById("amount").value;
//     // converted by amount number typing
//     const amountAddConverted = parseFloat(amountAdd);

//     //  🔥 input pin number
//     const pinNumber = document.getElementById("pin").value;
//     //   converted by pin number typing
//     const convertPin = parseInt(pinNumber);

//     // 🔥 input our mainBalance:
//     const mainBalance = document.getElementById("main-balance").innerText;
//     //   converted by mainBalance number typing:
//     const convertedMainBalance = parseFloat(mainBalance);

//     //   conditions apply of the click button:
//     // if (convertPin === 1234) {
//     //   const sum = convertedMainBalance + amountAddConverted;
//     //   // main_balance ke update korarar jonnw ei proses ta uses kora! other way kichui nah okyyyyyyy!
//     //   document.getElementById("main-balance").innerText = sum;
//     // } else {
//     //   console.log("fucking babe! No way");
//     // }

//     // other type of systems:
//     if (amountAdd && pinNumber) {
//       if (convertPin === 1234) {
//         const sum = convertedMainBalance + amountAddConverted;
//         document.getElementById("main-balance").innerText = sum;
//       } else {
//         alert("wrong password");
//       }
//     } else {
//       alert("wrong! please give me number!");
//     }
//   });
