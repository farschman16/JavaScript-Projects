let activePlayer = 'X'; //default as X; decides whose turn it is
let selectedSquares = []; //array of moves
function placeXOrO(squareNumber) { //function decides x or o
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') { //again, whose turn it is
            select.style.backgroundImage = 'url("images/x.jpg")'; //if X, then X
        }else{
            select.style.backgroundImage = 'url("images/o.jpg")'; //if NOT X, then O
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions(); //this condition changes the player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio('./media/place.mp3'); //placement sound
        if(activePlayer === 'O'){
            disableClick(); //can't click while the computer is playing
            setTimeout(function (){ computersTurn(); }, 1000) //waits 1 second for computer to place image and enable click sound
        }
        return true;
    }

    function computersTurn() { //selects random square
        let success = false;
        let pickASquare; //stores a random number
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9)); //if true, square hasn't been selected
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            };
            
        }
    }
}

function checkWinConditions() { //parses selectedSquares to search for win conditions.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) } //drawWinLine is called if the win condition is met
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {  //if all squares are filled and no win condition met, calls tie
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000); //1 second for game to be called
    }

    function arrayIncludes(squareA, squareB, squareC) { //if an array includes 3 strings, checks for a win condition
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) {return true} //else if condition calls drawWinLine function
    }
}

function disableClick(){
    body.style.pointerEvents = 'none'; //can't click
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); //body made clickable again after 1 second.
}

function audio(audioURL) {
    let audio = new Audio(audioURL); //string parameter for sound place.mp3
    audio.play(); //this actually plays the sound
}
function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //utilize html canvas to draw win lines
    const canvas = document.getElementById('win-lines') //element ID to call this function
    const c = canvas.getContext('2d'); //methods and properties to use on canvas
    let x1 = coordX1, //these are the start and end of the axis
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    function animateLineDrawing() { //again interacts with canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); //loop
        c.clearRect(0, 0, 608, 608) //clear prior loop iteration
        c.beginPath(); //new path
        c.moveTo(x1, y1) //starting point for line
        c.lineTo(x, y) //ending point for line
        c.lineWidth = 10; //width of line(obvious)
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //line color
        c.stroke(); //completes the line drawing decided above
        if (x1 <= x2 && y1 <= y2) { //checks if reached endpoint
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //ends loop if end points are reached
        }
        if (x1 <= x2 && y1 >= y2) { //similar function to one above, necessary for 6, 4, 2 win condition
            if (x , x2) { x += 10; }
            if (y > y2) { y -=10; }
            if (x >= x2 && y <=y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() { //clears canvas after win line is drawn
        const animationLoop = requestAnimationFrame(clear); //starts animation loop
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //stops animation loop
    }
    disableClick(); //disables click for sound to play
    audio('./media/winGame.mp3'); //plays win sound
    animateLineDrawing(); //animation loop call
    setTimeout(function () { clear(); resetGame(); }, 1000); //waits 1 second, then clears canvas, resetting game
}

function resetGame() { //resets game in event of tie or win
    for (let i = 0; i < 9; i++) { //loop iterates through each HTML square element
        let square = document.getElementById(String(i)) //html element of i
        square.style.backgroundImage = '' //removes background image
    }
    selectedSquares = []; //resets array
}