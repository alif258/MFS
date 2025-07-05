 let phone = document.getElementById("phone");
    let pin = document.getElementById("pin");
    let loginBtn = document.getElementById("loginBtn");
    let loginError = document.getElementById("loginError");
    let firstDisplay = document.getElementById("firstDisplay");
    let scndDsply = document.getElementById("scndDsply");
    let cashIn = document.getElementById("cashIn");
    let cashOut = document.getElementById("cashOut");
    let cashInSection = document.getElementById("cashInSection");
    let cashOutSection = document.getElementById("cashOutSection");
    let cashInAmount = document.getElementById("cashInAmount");
    let cashOutAmount = document.getElementById("cashOutAmount");
    let cashInPin = document.getElementById("cashInPin");
    let cashOutPin = document.getElementById("cashOutPin");
    let cashInBtn = document.getElementById("cashInBtn");
    let cashOutBtn = document.getElementById("cashOutBtn");
    let cashInError = document.getElementById("cashInError");
    let cashOutError = document.getElementById("cashOutError");
    let balanceDisplay = document.getElementById("balance");
    let balanceDisplay2 = document.getElementById("balance2");
    let balanceDisplay3 = document.getElementById("balance3");

    let currentBalance = 500;

    loginBtn.addEventListener("click", function () {
      if (phone.value === "01995371866" && pin.value === "1234") {
        firstDisplay.classList.add("hidden");
        scndDsply.classList.remove("hidden");
        loginError.classList.add("hidden");
        balanceDisplay.innerText = currentBalance;
      } else {
        loginError.classList.remove("hidden");
        phone.value = "";
        pin.value = "";
      }
    });

    cashIn.addEventListener("click", function () {
      scndDsply.classList.add("hidden");
      cashInSection.classList.remove("hidden");
      balanceDisplay2.innerText = currentBalance;
    });

    cashOut.addEventListener("click", function () {
      scndDsply.classList.add("hidden");
      cashOutSection.classList.remove("hidden");
      balanceDisplay3.innerText = currentBalance;
    });

    cashInBtn.addEventListener("click", function () {
      let amount = parseFloat(cashInAmount.value);
      let pin = cashInPin.value;

      if (pin === "1234" && !isNaN(amount) && amount > 0) {
        currentBalance += amount;
        balanceDisplay.innerText = currentBalance;
        balanceDisplay2.innerText = currentBalance;
        balanceDisplay3.innerText = currentBalance;
        cashInSection.classList.add("hidden");
        scndDsply.classList.remove("hidden");
        cashInError.classList.add("hidden");
        cashInAmount.value = "";
        cashInPin.value = "";
      } else {
        cashInError.classList.remove("hidden");
      }
    });

    cashOutBtn.addEventListener("click", function () {
      let amount = parseFloat(cashOutAmount.value);
      let pin = cashOutPin.value;

      if (pin === "1234" && !isNaN(amount) && amount > 0 && amount <= currentBalance) {
        currentBalance -= amount;
        balanceDisplay.innerText = currentBalance;
        balanceDisplay2.innerText = currentBalance;
        balanceDisplay3.innerText = currentBalance;
        cashOutSection.classList.add("hidden");
        scndDsply.classList.remove("hidden");
        cashOutError.classList.add("hidden");
        cashOutAmount.value = "";
        cashOutPin.value = "";
      } else {
        cashOutError.classList.remove("hidden");
      }
    });