
// Read More
function Moreless(){
    var dot=document.getElementById("dot");
    var individual=document.getElementById("para");
    var butn=document.getElementById("btn1");
    if (dot.style.display != "none"){
     dot.style.display = "none";
     individual.style.display="inline";
     butn.innerHTML="Read Less";
}
else{
 dot.style.display = "inline";
     individual.style.display="none";
     butn.innerHTML="Read More...";
}

}



 
