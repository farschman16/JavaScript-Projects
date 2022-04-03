function sentence_Function(){ //names the function
    var part1 = "Putting all of "; //all the variables are simply separate parts that will be combined with this function
    var part2 = "these parts together will ";
    var part3 = "create one flowing sentence, ";
    var part4 = "which could be handy."
    var full_sentence = part1.concat(part2, part3, part4); //full_sentence using the ".concat" method combines the sections in the order you tell them to
    document.getElementById("Concatenate").innerHTML = full_sentence; //now "full_sentence" is the 4 parts combined
}

function slice_Function(){ //naming the function
    var Sentence = "Once the wood burns down to ash it's time to start wrapping up the evening"; //full string 
    var Section = Sentence.slice(29, 34); //the .slice method tells which characters (29 through 34) to use to equal the "Section" variable
    document.getElementById("Slice").innerHTML = Section; //Section now is only the characters dictacted
}

function uppercase_Function(){ 
    var lowersentence = "everything is lowercase, but that is lame. make it all upper."; //variable lowersentence is this string
    var uppersentence = lowersentence.toUpperCase(); //uppersentence is defined as lowersentence with .toUpperCase() method attached
    document.getElementById("Upper").innerHTML = uppersentence; //"Upper" calls the function to the HTML file, pulls uppersentence
}

function search_Function(){
    var sentence = "You buy a hat like this, I bet you get a free bowl of soup!";
    var position = sentence.search("soup"); //this .search() method finds the location of the word you're searching for in the variable
    document.getElementById("Search").innerHTML = position;
}

function string_Function(){
    var number = 2987; //this variable is a number
    document.getElementById("String").innerHTML = number.toString(); //the ".toString" method changes the number to a string
}

function precision_Function(){
    var numb = 293874.9756339476558780003298;
    document.getElementById("Precision").innerHTML = numb.toPrecision(9); //.toPrecision method rounds a number to the amount of characters specified in the ()
}

function fixed_Function(){
    var x = 3678.334586;
    document.getElementById("Fixed").innerHTML = x.toFixed(3); //toFixed rounds the number to the number of decimals indicated in ()
}

function value_Function(){
    var number = 17.56;
    var n = number.valueOf(); //the .valueOf method finds the primitive value of the variable
    document.getElementById("Value").innerHTML = n;
}