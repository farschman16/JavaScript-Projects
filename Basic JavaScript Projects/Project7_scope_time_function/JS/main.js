var X = 10 //this variable it defined outside a function, so it is a global variable (accessible to all functions written below it)
function add_Function1() { //the next two functions can successfully use the variable named "X"
    document.write(20 + X + "<br>");
}
function add_Function2() {
    document.write(X + 25 + "<br>");
}
add_Function1();
add_Function2();

function add_Function3(){ //start of the function
    var B = 25; //variable B is named inside of add_Function3, so it is a local variable, only able to be used inside of that function
    document.write(20 + B + "<br>");
}
function add_Function4(){ //this function trying to use variable B will not work, as it was named inside a different function.
    console.log(B + 55 + "<br>");
}
add_Function3();
add_Function4();

function gethours_Function(){ //function retreiving the hours of the day (3am would be 3, 6pm would be 18, etc)
    if (new Date().getHours()<18) { //gets the "Date()" from the computer, gethours gives it a number
        document.getElementById("Get_Hours").innerHTML = "Still Plenty of Day Left! Do Something!"; //if it's earlier than 6pm, this will show
    }
}

function getdate_Function(){
    if (new Date().getDate()<15) { //same type of function, but retreives the date within the month
        document.getElementById("Get_Date").innerHTML = "Still Time to Pay the Mortgage Before it's Late";
    }
}

function icerink_Function(){ //naming the function
    Acres = document.getElementById("Acres").value; //this line and the next communicate with the webpage to get the value of "Acres" from the user's input
    if (Acres >=.5) { //conditional statement
        Build = "You have enough land to build an ice rink!"; //if true, "Build" will equal this line
    }
    else {
        Build = "You do not have enough land to build an ice rink."; //if false, "Build" will equal this line
    }
    document.getElementById("How_Many_Acres").innerHTML = Build; //output line resulting from the value of "Acres" and what "Build" will be
}

function time_Function(){ //names the function
    var Time = new Date().getHours(); //gives a value to the "Time" variable by "getHours" pulling the time from the user's computer
    var Reply; //variable and nested functions will decide the string value of "Reply" with conditional statements
    if (Time < 12 == Time > 0) { //conditional statement for a set number of hours identified by "Time (getHours)"
        Reply = "It is morning time!"; //value given to "Reply" that fits this statement
    }
    else if (Time >= 12 == Time < 18) { //if the value is not within the first conditional statement, it will check if the value fits this one
        Reply = "It is afternoon."; //if the value fits this statement, "Reply" will use this string value
    }
    else { //if the value doesn't fit the if or elseif, all other values fall here
        Reply = "It is evening time."; //result of value not fitting either the if or elseif
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //lets the HTML call the resulting string based on the value of "Time"
}