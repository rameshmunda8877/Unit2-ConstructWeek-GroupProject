
// Slide show the pages

let slideIndex2 = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i=0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slideIndex2++;
    if(slideIndex2>slides.length){
        slideIndex2=1
    }
    slides[slideIndex2-1].style.display="block";
    setTimeout(showSlides, 2000); // change image every 2 seconds
}
