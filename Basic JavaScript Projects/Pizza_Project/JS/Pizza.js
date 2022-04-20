function getReceipt() { //initializes string to pass from function to function to collect a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; //default values set to 0 until they collect info from other functions
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //selectedSize will go here
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //these lines assign a price to each size of crust. Down below addss the "$" and ".00" to the string
        sizeTotal = 6; 
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1); //variables to pass on to the other functions
};

function getTopping(runningTotal,text1) { //adds selected toppings to string
    var toppingTotal = 0;
    var selectedTopping = []; //topping will be entered here
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")"); //adds 1 for each one selected
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); //dictates first topping is of no charge; each next adds $1
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount); //in console states the number of toppings selected
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //statement that first one is free
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00"); //gives total price in console
    document.getElementById("showText").innerHTML=text1; //function for showing text string of your order
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+ //adds the order into a total, adds "$" and ".00" to string (price)
        runningTotal+".00"+"<strong></h3>";
};
