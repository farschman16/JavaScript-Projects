function changeColor(newColor) { //This is the function named 'para' to change font color by buttons
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

function myFunction() { //function named 'myFunction' that displays the concatenated text when clicked
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function multiply(a,b) {
    var x = multiply(5, 6);
    document.getElementById("demo").innerHTML = x;
}