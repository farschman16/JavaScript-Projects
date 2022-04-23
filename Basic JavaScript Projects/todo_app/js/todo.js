//this function gets the task from the input
function get_todos() {
    var todos = new Array; //this creates an array of tasks that are inputed
    var todos_str = localStorage.getItem('todo'); //this pulls the task that was saved in the web broswer memory
    if (todos_str !==null) { //if the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object.
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//this function adds the inputed task to the get_todos function array
function add() {
    var task = document.getElementById('task').value; //this takes the inputed task and creates a variable of it
    var todos = get_todos();
    todos.push(task); //this adds a new task to the end of the array
    localStorage.setItem('todo', JSON.stringify(todos)); //this converts the task input to a JSON string
    document.getElementById("task").value = "";
    Show();

    return false;
}

//this function keeps the tasks permanently displayed on the screen
function show() {
    var todos = get_todos(); //this sets the task that was retreived as a variable
    var html = '<ul>'; //this sets up each task as an unordered list
    for (var i = 0; i <todos.length; i++) { //this displays a task to the list in the order that it is inputed
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button><li>'; //this also diplays the task as a list and creates the button with an "x"
    };
    html += '<ul>';
    document.getElementById('todos').innerHTML = html; //this displays the task as a list
    var buttons = document.getElementsByClassName('remove'); //this tells the browser how to display the array after an item has been removed
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add); //this displays the inputed task when the 'Add Item' button is clicked
show(); //this will keep the inputs displayed permanently on the screen

function remove() { //removing a todo from the array
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show(); //checks in the show() how to display the removed item

    return false;
}