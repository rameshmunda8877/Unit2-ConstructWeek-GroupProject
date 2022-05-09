document.querySelector("#form").addEventListener("submit", myFunction);
    var checkoutArr = JSON.parse(localStorage.getItem("checkouDetails")) || [];

        if(localStorage.getItem("checkouDetails")==null){
          checkoutArr=[]
        }
        else{
          checkoutArr=JSON.parse(localStorage.getItem("checkouDetails"))
        }

    function myFunction() {
      event.preventDefault();
      var checkoutObj = {
        // Personal details
        first_name:document.querySelector("#first-name").value,
        last_name:document.querySelector("#last-name").value,
        contact_no:document.querySelector("#contact-no").value,

        // Address details
        house_no:document.querySelector("#house-no").value,
        apartment:document.querySelector("#apartment").value,
        street:document.querySelector("#street").value,
        landmark:document.querySelector("#landmark").value,
        city_name:document.querySelector("#city-name").value,
        area_details:document.querySelector("#area-details").value,
        pin_code:document.querySelector("#pin-code").value,

        // address_nickname:document.querySelector("#recipients-name").value,

        recipients_name:document.querySelector("#recipients-name").value,
        myour_name:document.querySelector("#your-name").value,
        message:document.querySelector("#message").value,


        delivery_option:document.querySelector("#delivery-options").value,

        card_no:document.querySelector("#card-no").value,
        valid_thru:document.querySelector("#valid-thru").value,
        security_code:document.querySelector("#cvv-security-code").value,
      };
      checkoutArr.push(checkoutObj);
      //array of objects

      
      localStorage.setItem("checkouDetails", JSON.stringify(checkoutArr));
    //   document.querySelector("#name").value = "";
    //   document.querySelector("#email").value = "";

    form.addEventListener("submit", myFunction)
    function myFunction(){
      window.alert("Order Successful!");
    }
    }