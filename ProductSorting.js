
var getProducts = JSON.parse(localStorage.getItem("productsDisplayed_LS"));

// Sorting according to popularity

function handlePopularitySort(){  // Price low-high
    var selected = document.querySelector("#popularity").value
    if(selected == "LTH"){
        getProducts.sort(function(a,b){
            return a.productMRP - b.productMRP
        })
        display(getProducts);

    }
    if(selected == "HTL"){  // price high-low
        getProducts.sort(function(a,b){
            return b.productMRP - a.productMRP
        })
        display(getProducts);
    }
    if(selected == "ALPHA_ASC"){  // Ascending order - Name
        getProducts.sort(function(a,b){
            var x = a.productDescription.toUpperCase();
            var y = b.productDescription.toUpperCase();
            if(x>y){
                return 1;
            }
            else if(y>x){
                return -1;
            }
            else{
                return 0;
            }
        })
        display(getProducts);
    }
    if(selected == "ALPHA_DES"){ // Descending order - Name
        getProducts.sort(function(a,b){
            var x = a.productDescription.toUpperCase();
            var y = b.productDescription.toUpperCase();
            if(x>y){
                return -1;
            }
            else if(y>x){
                return 1;
            }
            else{
                return 0;
            }
        })
        display(getProducts);
    }
}


