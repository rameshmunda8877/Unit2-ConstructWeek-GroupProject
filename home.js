// Read More
function Moreless() {
  var dot = document.getElementById("dot");
  var individual = document.getElementById("para");
  var butn = document.getElementById("btn1");
  if (dot.style.display != "none") {
    dot.style.display = "none";
    individual.style.display = "inline";
    butn.innerHTML = "Read Less";
  }
  else {
    dot.style.display = "inline";
    individual.style.display = "none";
    butn.innerHTML = "Read More...";
  }
}

// chnges by Khlaid Shah Start
var basketDiv = document.querySelector("#box2")
basketDiv.addEventListener("click",goToBasketFunction)
function goToBasketFunction(){
  window.location.href = "./Cart/cart.html"
}
// chnges by Khlaid Shah End