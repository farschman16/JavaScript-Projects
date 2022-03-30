function addition_Function () { //Addition Function
    var addition = 5 + 6;
    document.getElementById("Math").innerHTML = "5 + 6 = " + addition;
}

function subtraction_Function () { //Subtraction Function
    var subtraction = 25 - 6;
    document.getElementById("Math2").innerHTML = "25 - 6 = " + subtraction;
}

function multiplication_Function () { //Multiplicatoin Function
    var multiplication = 15 * 6;
    document.getElementById("Math3").innerHTML = "15 x 6 = " + multiplication;
}

function division_Function () { //Division Function
    var division = 80 / 6;
    document.getElementById("Math4").innerHTML = "80 / 6 = " + division;
}

function moremath_Function () { //Function with multiple math processes
    var more_math = (6 + 9) * 14 / 3 - 19;
    document.getElementById("Math5").innerHTML = "6 plus 9, multiplied by 14, divided by 3, then subtracted by 19 equals " + more_math;
}

function modulus_Function () { //Modulus function, which utilizes the % to divide and find find the remainder
    var modulator = 80 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 80 by 6 you have a remainder of: " + modulator;
}

function negation_Function () { //negation function, which finds the negative of the operator (number in the variable)
    var negation = 37;
    document.getElementById("Math7").innerHTML = -negation
}

var x = 5; //incrementing 5 to 6 using ++
x++;
document.write(x);

var y = 16; //decrementing 16 to 15 using --
y--;
document.write(y);

window.alert(Math.random() * 1000);  //window alert for a random number between 0 and 1,000

window.alert(Math.pow(6,4)); //window alert for 6 to the power of 4, or 6^4