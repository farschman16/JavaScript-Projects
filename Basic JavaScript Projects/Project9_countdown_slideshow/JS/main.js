function countdown() { //countdown function
    var seconds = document.getElementById("seconds").value; //variable "seconds" is assigned a value by the user

    function tick(){ //second function, this is the visual countdown
        seconds = seconds - 1; //value assigned by the user will reduce by 1
        timer.innerHTML = seconds; //timer is equal to the variable "seconds"
        var time = setTimeout(tick, 1000); //time variable equal to the number (tick), waits 1000 milliseconds and repeats seconds -1
        if (seconds == -1) { //when seconds equal -1
            alert("Time's up!"); //an alert shows with this string
            clearTimeout(time); //this ends the counting down by 1000 milliseconds
            timer.innerHTML = ""; //timer will equal nothing
        }
    }
    tick(); //this clears the now finished countdown displayed
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n <1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++> {
        dots,[i]:className = dots[i].className.replace(" active", ""),
    }
    )slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}