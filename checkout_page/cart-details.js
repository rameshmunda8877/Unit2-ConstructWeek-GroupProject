var cartDetails = JSON.parse(localStorage.getItem("checkout"));
console.log(cartDetails);

  

    // window.addEventListener("load", function () {
    //   displayData(cartDetails);
    // });


    function displayData(cartDetails) {
      document.querySelector("#order-details").innerHTML = "";
    //   cartDetails.map(function (elem) {
        var basket_value = document.querySelector("#basket-value");
        basket_value.innerText = elem.amount;

        var total_amount = document.querySelector("#total-amount");
        basket_value.innerText = elem.amount;

        var total_savings = document.querySelector("#total-savings");
        total_savings.innerText = elem.savedamount;

        span.append(basket_value, total_amount, total_savings);

        document.querySelector("#order-details").append(span);
    //   });
    }