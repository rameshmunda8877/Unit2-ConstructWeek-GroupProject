var basketValue = JSON.parse(localStorage.getItem("amount"));
console.log("basketValue",basketValue);

var totalAmount = JSON.parse(localStorage.getItem("amount"));
console.log("totalAmount",totalAmount);

var savedAmount = JSON.parse(localStorage.getItem("savedamount"));
console.log("savedAmount",savedAmount);



var basket_value = document.querySelector("#basket-value").innerText=basketValue;

var total_amount = document.querySelector("#total-amount").innerText=totalAmount;

var total_savings = document.querySelector("#total-savings").innerText=savedAmount;
