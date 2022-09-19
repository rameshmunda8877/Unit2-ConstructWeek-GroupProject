

var container = document.querySelector("#container")

// local storage taken from add to cart button
var details = JSON.parse(localStorage.getItem("mini-cart"))

// local Storage for checkout
var totalamount = JSON.parse(localStorage.getItem("amount")) || []

// local Storage for checkout
var saveamount = JSON.parse(localStorage.getItem("savedamount"))

// local Storage for checkout
var finalLocal = localStorage.getItem("checkout") || null

display(details)

function display(data) {
    if (data == null || data == "") {
        const noItem = document.createElement('h1');
        noItem.setAttribute("id", "noItem")
        noItem.innerText = "There are no items in your basket."

        const hrline = document.createElement('hr');
        hrline.setAttribute("class", "hrline")

        var continueShoppingButton = document.createElement("button")
        continueShoppingButton.setAttribute("id", "continueShoppingButton")
        continueShoppingButton.innerText = "CONTINUE SHOPPING"
        continueShoppingButton.addEventListener("click", shoppingFunction)

        function shoppingFunction() {
            window.location.href = "../index.html"
        }
        document.querySelector("#container").append(noItem, hrline, continueShoppingButton)
    }


    else {
        const yourBasket = document.createElement('p');
        yourBasket.setAttribute("id", "yourBasket")
        yourBasket.innerText = "Your Basket"

        const basketHrLine = document.createElement('hr');
        basketHrLine.setAttribute("id", "basketHrLine")

        const promoButton = document.createElement('button');
        promoButton.setAttribute("id", "availPromobtn")
        promoButton.innerText = "VIEW AVAILABLE PROMOS"
        promoButton.addEventListener("click", promoFunction)
        function promoFunction() {
            alert("No Promos Available for Now")
        }

        const divLikeTable = document.createElement('div');
        divLikeTable.setAttribute("id", "divLikeTable")
        const p1 = document.createElement('p');
        p1.innerText = "ITEM DESCRIPTION"
        const p2 = document.createElement('p');
        p2.innerText = "UNIT PRICE"
        const p3 = document.createElement('p');
        p3.innerText = "QUANTITY"
        const p4 = document.createElement('p');
        p4.innerText = "SUBTOTAL"
        const blankP = document.createElement('p');
        blankP.setAttribute("id", "blankP")
        blankP.innerText = ""

        const p5 = document.createElement('p');
        p5.innerText = "SAVINGS"
        divLikeTable.append(p1, p2, p3, p4, blankP, p5)

        data.forEach(function (elem, index) {

            // Div for containing product details
            const allDetails = document.createElement('div');
            allDetails.setAttribute("id", "allDetails")

            const categoryDiv = document.createElement('div');
            categoryDiv.innerText = elem.category
            categoryDiv.setAttribute("id", "categoryDiv")



            const itemDetails = document.createElement('div');
            itemDetails.setAttribute("id", "itemDetails")

            const itemDescription = document.createElement('div');
            itemDescription.setAttribute("id", "itemDescription")

            const itemDescriptionP1 = document.createElement('p');
            itemDescriptionP1.innerText = elem.productName

            const itemDescriptionP2 = document.createElement('p');
            itemDescriptionP2.innerText = elem.productDescription
            itemDescription.append(itemDescriptionP1, itemDescriptionP2)



            const unitPrice = document.createElement('div');
            unitPrice.setAttribute("id", "unitPrice")

            const unitPriceP1 = document.createElement('p');
            unitPriceP1.innerText = "Rs. " + elem.productMRP
            const unitPriceP2 = document.createElement('p');
            unitPriceP2.innerText = "Rs, " + elem.productStrikeMRP

            unitPrice.append(unitPriceP1, unitPriceP2)


            const incDecQuantity = document.createElement('div');
            incDecQuantity.setAttribute("id", "incDecQuantity")

            const pMinus = document.createElement('p');
            pMinus.innerText = "-"
            pMinus.style.cursor = "pointer"
            pMinus.addEventListener("click", minusFunction)
            function minusFunction() {

                if (count == 1) {
                    data.splice(index, 1)
                    localStorage.setItem("mini-cart", JSON.stringify(details))
                    window.location.reload()
                }
                else {
                    count--
                    pQuantity.innerText = count
                    sub = elem.productMRP * pQuantity.innerText
                    subTotal.innerText = "Rs." + " " + sub.toFixed(2)

                    var k = (elem.productStrikeMRP - elem.productMRP).toFixed(2)
                    sav = sav - k
                    var save = sav.toFixed(2)
                    saving.innerText = "Rs." + " " + save
                    // totalamount.push(sub)
                    localStorage.setItem("amount", totalamount)
                    localStorage.setItem("savedamount", sav)
                }
            }

            var count = 1
            var pQuantity = document.createElement('p');
            pQuantity.innerText = count

            const pPlus = document.createElement('p');
            pPlus.innerText = "+"
            pPlus.style.cursor = "pointer"
            pPlus.addEventListener("click", plusFunction)
            function plusFunction() {
                count++
                pQuantity.innerText = count
                sub = elem.productMRP * pQuantity.innerText
                subTotal.innerText = "Rs." + " " + sub.toFixed(2)

                var k = (elem.productStrikeMRP - elem.productMRP)
                sav = sav + k
                var save = sav
                saving.innerText = "Rs." + " " + save.toFixed(2)

                // khalid(totalamount)
                // totalamount.push(sub)


                localStorage.setItem("amount", sub)
                localStorage.setItem("savedamount", JSON.stringify(sav))

            }

            incDecQuantity.append(pMinus, pQuantity, pPlus)


            const subTotal = document.createElement('p');
            subTotal.setAttribute("id", "sub")
            var sub = elem.productMRP * pQuantity.innerText

            subTotal.innerText = "Rs." + " " + sub.toFixed(2)


            const deletelogo = document.createElement('p');
            deletelogo.innerText = "x"
            deletelogo.style.cursor = "pointer"
            deletelogo.addEventListener("click", function () {
                deleteItem(data, index)
            })

            // saving of single product
            const saving = document.createElement('p');
            saving.setAttribute("id", "savingBorder")
            saving.style.color = "#BE1E2D"
            var sav = (elem.productStrikeMRP - elem.productMRP)
            var save = sav
            saving.innerText = "Rs." + " " + save
            itemDetails.append(itemDescription, unitPrice, incDecQuantity, subTotal, deletelogo, saving)

            allDetails.append(categoryDiv, itemDetails)
            document.querySelector("#cont").append(allDetails)
            document.querySelector("#container").append(yourBasket, basketHrLine, promoButton, divLikeTable)
            localStorage.setItem("amount", sub)
            localStorage.setItem("savedamount", sav)
        })

        // const containerAfterProductDetail = document.createElement('div');
        // containerAfterProductDetail.setAttribute("id", "containerAfterProductDetail")
        // document.querySelector("body").append(containerAfterProductDetail)

        // Empty Basket button
        const emptyBasketButton = document.createElement('div');
        emptyBasketButton.setAttribute("id", "emptyBasketButton")
        const emptyBasket = document.createElement('button');
        emptyBasket.innerText = "EMPTY BASKET"
        emptyBasket.setAttribute("id", "emptyBasket")
        emptyBasket.addEventListener("click", emptyBasketFunction)
        function emptyBasketFunction() {
            var a = confirm("Are you sure you want to remove all items from your basket?")
            if (a) {
                document.querySelector("#container").innerHTML = ""
                document.querySelector("#cont").innerHTML = ""
                document.querySelector("#containerAfterProductDetail").innerHTML = ""
                details = []
                localStorage.setItem("mini-cart", JSON.stringify(details))
                window.location.reload()
            }
        }
        emptyBasketButton.append(emptyBasket)
        document.querySelector("#containerAfterProductDetail").append(emptyBasketButton)

        // subtotal and total and checkout button
        const checkoutDiv = document.createElement('div');
        checkoutDiv.setAttribute("id", "checkoutDiv")
        document.querySelector("#containerAfterProductDetail").append(checkoutDiv)

        const checkoutDiv1 = document.createElement('div');
        checkoutDiv1.setAttribute("id", "checkoutDiv1")
        const subTotalAndTotal = document.createElement('div');
        subTotalAndTotal.setAttribute("id", "subTotalAndTotal")
        const checkoutSubTotal = document.createElement('div');
        checkoutSubTotal.setAttribute("id", "checkoutSubTotal")
        const checkoutSubtotalAndDeliveryText = document.createElement('div');
        checkoutSubtotalAndDeliveryText.setAttribute("id", "checkoutSubtotalAndDeliveryText")
        const checkoutSubtotalAndDeliveryTextp1 = document.createElement('p');
        checkoutSubtotalAndDeliveryTextp1.innerText = "Subtotal"
        const checkoutSubtotalAndDeliveryTextp2 = document.createElement('p');
        checkoutSubtotalAndDeliveryTextp2.innerText = "Delivery Charges"
        checkoutSubtotalAndDeliveryText.append(checkoutSubtotalAndDeliveryTextp1, checkoutSubtotalAndDeliveryTextp2)


        // checkout sub total
        var checkoutSubtotalValue = document.createElement('div');
        checkoutSubtotalValue.setAttribute("id", "checkoutSubtotalValue")
        var checkoutSubtotalValuep1 = document.createElement('p');
        checkoutSubtotalValuep1.innerText = "Rs. " + Number(totalamount).toFixed(2)
        var checkoutSubtotalValuep2 = document.createElement('p');
        checkoutSubtotalValuep2.innerText = "**"
        checkoutSubtotalValue.append(checkoutSubtotalValuep1, checkoutSubtotalValuep2)
        checkoutSubTotal.append(checkoutSubtotalAndDeliveryText, checkoutSubtotalValue)

        // checkout total
        var checkoutTotal = document.createElement('div');
        checkoutTotal.setAttribute("id", "checkoutTotal")
        var checkoutTotalp1 = document.createElement('p');
        checkoutTotalp1.innerText = "TOTAL"
        var checkoutTotalp2 = document.createElement('p');
        checkoutTotalp2.innerText = "Rs. " + Number(totalamount).toFixed(2)
        checkoutTotal.append(checkoutTotalp1, checkoutTotalp2)


        subTotalAndTotal.append(checkoutSubTotal, checkoutTotal)

        // overall saved amount
        const saveDiv = document.createElement('div');
        saveDiv.setAttribute("id", "saveDiv")
        const saveDivImg = document.createElement('img');
        saveDivImg.setAttribute("id", "savImgLogo")
        saveDivImg.setAttribute("src", "https://media.istockphoto.com/vectors/piggy-bank-with-coin-symbol-of-new-year-2019-vector-illustration-vector-id1080435824?k=20&m=1080435824&s=612x612&w=0&h=gMQQ5ZEucbBtkQi6Fe_zTmSFumeinnp6QySj4BAI_gc=")
        const saveDivP1 = document.createElement('p');
        saveDivP1.innerText = "You Saved!"
        const saveDivP2 = document.createElement('p');
        saveDivP2.innerText = "Rs. " + Number(saveamount).toFixed(2)

        saveDiv.append(saveDivImg, saveDivP1, saveDivP2)
        checkoutDiv1.append(subTotalAndTotal, saveDiv)

        // checkout button
        const checkoutDiv2 = document.createElement('div');
        checkoutDiv2.setAttribute("id", "checkoutDiv2")
        const checkoutButton = document.createElement('button');
        checkoutButton.setAttribute("id", "checkoutButton")
        checkoutButton.innerText = "CHECKOUT"
        checkoutButton.style.cursor = "pointer"
        checkoutButton.addEventListener("click", checkoutFunction)
        function checkoutFunction() {
            localStorage.setItem("checkout", totalamount)
            window.location.href = "../checkout_page/checkout.html"
        }

        const deliveryInstruction = document.createElement('div');
        deliveryInstruction.innerText = "** Actual delivery charges computed at checkout time"
        deliveryInstruction.setAttribute("id", "deliveryInstruction")
        checkoutDiv2.append(checkoutButton, deliveryInstruction)
        checkoutDiv.append(checkoutDiv1, checkoutDiv2)

        // continue shopping button

        var continueShoppingButton = document.createElement("button")
        continueShoppingButton.setAttribute("id", "latContinueShoppingButton")
        continueShoppingButton.innerText = "CONTINUE SHOPPING"
        continueShoppingButton.addEventListener("click", shoppingFunction)

        document.querySelector("#lastShoppingButton").append(continueShoppingButton)


    }
    // delete product function
    function deleteItem(data, index) {
        data.splice(index, 1)
        localStorage.setItem("mini-cart", JSON.stringify(details))
        window.location.reload()
    }

    // continue shopping button function
    function shoppingFunction() {
        window.location.href = "../index.html"
    }
}

function khalid(shah) {
    var sum = 0;
    for (var i = 0; i < shah.length; i++) {
        sum += shah[i]
    }
}