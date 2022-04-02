function ride_Function() { //names the function
    var Height, Can_ride; //states the two variables are "Height" and "Can_ride"
    Height = document.getElementById("Height").value; //HTML will pull this with "Height". HTML states that .value is 52
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Can_ride: true (Height is less than 52) is false, so first statement. if true, second statement.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //HTML pulls "Ride", gives the result (true or false statement) from "Can_ride", and adds the phrase " to ride" to the end.
}

function vote_Function(){ //names the function
    var Age, Can_vote; //names the two variables
    Age = document.getElementById("Age").value; //within the HTML calling "Age" will give .value. In this case, 18.
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //Can_vote ternary operation (?) true returns first statement, false returns second.
    document.getElementById("Vote").innerHTML = Can_vote + " for Democracy."; //id "Vote" returns ternary statement + " for Democracy"
}

function Vehicle(Make, Model, Year, Color) { //this function is an object constructor
    this.Vehicle_Make = Make; //these are attributes of "Vehicle"; they possess the function
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //these are variables / instances of vehicle with their values defined
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //this creates a phrase using the values defined in the variables
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
Matt = new Vehicle("Toyota", "Tacoma", 2018, "White");
function Function2() {
    document.getElementById("New_and_This").innerHTML =
    "Matt drives a " + Matt.Vehicle_Color + "-colored " + Matt.Vehicle_Model + " manufactured in " + Matt.Vehicle_Year;
}

function Player(Handed, Team, Birthyear, Goals) {
    this.Player_Handed = Handed;
    this.Player_Team = Team;
    this.Player_Birthyear = Birthyear;
    this.Player_Goals = Goals;
}
var Forsberg = new Player("true", "Avalanche", 1973, 249);
function hockey_Function() {
    document.getElementById("Player_Stats").innerHTML =
    "Peter Forsberg played for the " + Forsberg.Player_Team + ", was " + Forsberg.Player_Handed + " handed, and Scored " + Forsberg.Player_Goals + " goals.";
}

function nest_Function() { //name of the function
    document.getElementById("Nested_Function").innerHTML = Count(); //how to call the function by name, result is Count()
    function Count() { //function dictating what Count() will be
        var Starting_point = 9; //giving a value to the variable, and naming it "Starting_point"
        function Plus_one() {Starting_point += 1;} //creating a function to increase the variable by 1
        Plus_one();
        return Starting_point; //the new value should be one higher than the original value
    }
}