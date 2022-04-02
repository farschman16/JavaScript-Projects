document.write(typeof "word") //utilizing type of to specify a string

document.write("four-hundred" + 65) //utilizing type coercion (forcing a string and a number to be together)

function nan_function(){ //test function to display "NaN" or "Not a Number"
    document.getElementById("nan_test").innerHTML = 0/0; //this will diplay "NaN" because it is not a number
    document.getElementById("true_test").innerHTML = isNaN('these are definitely not numbers') //will display true, because NaN means not a number
    document.getElementById("false_test").innerHTML = isNaN('40795'); //will display false, because this IS a number, not NOT a number.
}

function infinity_function(){
    document.getElementById("infinity").innerHTML = 2E310; //this will display "infinity" because it's too large a number
    document.getElementById("neginfinity").innerHTML = -2E310; //this will display "-infinity" because of the same reason
}

document.write(10>4); //boolean logic, will show "true"
document.write(16<2); //boolean logic, will show "false"

console.log(8+9); //hit f12 and go to the console tab, will show "17"
console.log(20<4); //will show "false" in the console

document.write(5+20 == 10+15); //double equal signs to show true or false. This will be true
document.write(10+5 == 26-3); //this will show as "false"

x=11/12/2022;
y=11/12/2022;
document.write(x===y);  //utilizing triple equals signs to show these are the same data type and value

a="turtles";
b=17;
document.write(a===b);  //different data type and different values = false

q="2010";
p=2010;
document.write(q===p);  //different data type but same value still = false

t=200500;
r=200300;
document.write(t===r);  //same data type but different value = false

document.write(10>4 && 17<18); //since both are true, this will show true
document.write(10<4 && 17<18); //even though one is true, the other is false, so this will show false

document.write(17<29 || 4>100); //since one of the arguments is true, this will show true
document.write(17>29 || 4>100); //since both are untrue arguments, this will show false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); //using the "not" function (!) this will be false since the operation itself is true
    document.getElementById("Not2").innerHTML = !(20<10); //using the "not" function (!) this will show true (the operation itself is false, and ! is looking for false statements)
}
