// select the calculate button and listen to a click event on it.
document.querySelector("#calculate").addEventListener("click", function(event) {
  event.preventDefault();

  // get the values from the form
  let amount = document.querySelector("#amount").value;
  let tipPercent = document.querySelector("#tip").value;
  let noPeople = document.querySelector("#people").value;

  console.log(typeof amount, typeof tipPercent, typeof noPeople);

  // Convert all values to Numbers
  amount = Number(amount);
  tipPercent = Number(tipPercent);
  noPeople = Number(noPeople);

  // validate amount
  if (amount <= 0) {
    document.querySelector("#amount-error").textContent =
      "please enter a valid positive number";
    document.querySelector("#amount-error").style.display = "block";
    return;
  }

  /* return amount <= 0
    ? (document.querySelector("#amount-error").textContent =
        "please enter a valid positive number")
    : ""; */

  console.log(typeof amount, typeof tipPercent, typeof noPeople);

  // calculate tip
  let tipAmount = (tipPercent / 100) * amount;

  let tipPerPerson = tipAmount / noPeople;

  let totalAmount = tipAmount + amount;

  let totalAmountPerson = totalAmount / noPeople;

  // start displaying result
  document.querySelector(".alert").style.display = "block";
  document.querySelector("#tip-per-person-result").textContent = tipPerPerson;

  document.querySelector("#tip-amount-result").textContent = tipAmount;

  document.querySelector(
    "#tip-amount-person-result"
  ).textContent = totalAmountPerson;

  document.querySelector("#total-amount-result").textContent = totalAmount;

  // remove errors
  document.querySelector("#amount-error").textContent = "";
  document.querySelector("#amount-error").style.display = "none";
});

document.querySelector("#reset").addEventListener("click", function() {
  document.querySelector(".alert").style.display = "none";
  document.querySelector("#tip-per-person-result").textContent = "";

  document.querySelector("#tip-amount-result").textContent = "";

  document.querySelector("#tip-amount-person-result").textContent = "";

  document.querySelector("#total-amount-result").textContent = "";
});
