
// selection of brands

var getProducts = JSON.parse(localStorage.getItem("productsDisplayed_LS"));

function selectBrand() {

    var selected = document.getElementById("mySelect").value;
    var filteredproducts = getProducts.filter(function(elem){
        return elem.productName == selected
    });
    display(filteredproducts);
  }

  // selection of body material

  function selectBodyMaterial() {

    var selected1 = document.getElementById("mySelect2").value;
    var filteredproducts2 = getProducts.filter(function(elem){
        return elem.priceFilter == selected1
    });
    display(filteredproducts2);
  }

  // selection of capacity

  function selectCapacity() {

    var selected3 = document.getElementById("capacity").value;
    var filteredproducts3 = getProducts.filter(function(elem){
        return elem.LED_Bulb_Wattage == selected3
    });
    display(filteredproducts3);
  }

