function loop_Function() { //loop function!
    var Digit = ""; //identifies the variable, assigns it no value
    var x = 1; //second variable with a starting value of 1
    while (x < 11) { //parameters, stops when x is no longer less than 11
        Digit += "<br>" + x;
        x++; //add 1 to the value of variable x
    }
    document.getElementById ("Call_Loop").innerHTML = Digit;
}

let word = "Hockey Goons";
let length = word.length; //this counts the number of characters in the variable string
document.getElementById("string_Length").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //starts at position 0 (Guitar)
    Content += Instruments[Y] + "<br>"; //continues until it meets the number of elements in the variable
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_Function(){ //creates an array and gives properties
    var Cat_Action = []; //ends up calling the string value with the number
    Cat_Action[0] = "sleeping";
    Cat_Action[1] = "clawing";
    Cat_Action[2] = "peeing in the house";
    Cat_Action[3] = "harassing dogs";
    document.getElementById("Array").innerHTML = "At the moment, the cat is currently " + Cat_Action[3] + ".";
}

function constant_Function(){ //creates an object with constant properties
    const Musical_Instrument = {type:"guitar", brand:"Gibson", color:"red"};
    Musical_Instrument.age = 1984;
    Musical_Instrument.model = "SG"; //added a property
    Musical_Instrument.brand = "Gibson/Epiphone"; //changed the property "brand"
    document.getElementById("Constant").innerHTML = "My " + Musical_Instrument.brand +
    " " + Musical_Instrument.model + " was made in " + Musical_Instrument.age + ".";
}

function let_Function(){ 
    var X = "Variable Version of X"; //global property
    document.write(X);
    {
        let X = "Let Version of X"; //local property (inside braces)
        document.write("<br>" + X);
    }
    document.write("<br>" + X); //writes the global property, not the let version

    document.getElementById("Let").innerHTML = X;
}

function return_Function(a, b){ //function will use variables a and b
    return a * b; //identifies what to do with these values
}
let z = return_Function(6, 9); //variable z gives values to a and b
document.getElementById("Return").innerHTML = z;

let house = {
    year: "1984",
    bedrooms: "4 ",
    bathrooms: "3 ",
    sqft: "2,800 ",
    description: function(){ //creates a return function to pull the "this" values assigned above
        return "My new house is a " + this.sqft +" square foot house with " + this.bedrooms 
        + "bedrooms and " + this.bathrooms + " bathrooms, built in " + this.year + ".";
    }
};
document.getElementById("Object").innerHTML = house.description();

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break; } //this stops the loop at 3, identified by "if i ===3"
    text +=  "The number is " + i + "<br>";
    document.getElementById("Break").innerHTML = text;
}

let f = "";
for (let j = 0; j < 10; j++) {
    if (j ===3) { continue; } //this skips 3 in the loop, and continues past it
    f += "The number is " + j + "<br>";
    document.getElementById("Continue").innerHTML = f;
}
