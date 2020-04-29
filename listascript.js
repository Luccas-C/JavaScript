var listE = document.getElementById('ul');
var inputE = document.getElementById('input');
var button = document.getElementById('button');

var todos =JSON.parse( localStorage.getItem('lista')) || [];

function render(){
    listE.innerHTML = '';
    for (todo of todos){
        var todoE = document.createElement('li');
        var todoT = document.createTextNode(todo);
        var linkE = document.createElement('a');
        linkE.setAttribute('href' , '#');
        var pos = todos.indexOf(todo);
        linkE.setAttribute('onclick','deleteT(' + pos + ')');
        var linkT = document.createTextNode('(Feito)');

        linkE.appendChild(linkT);
        todoE.appendChild(todoT);
        todoE.appendChild(linkE);
        listE.appendChild(todoE);

        savestorage();
    }
}
render();

function addTodo(){

    var todoT = inputE.value;
    todos.push(todoT);
    inputE.value = '';
    render();
    savestorage();
}
button.onclick = addTodo;

function deleteT(pos){
    todos.splice(pos,1);
    render();
}

function savestorage(){
    localStorage.setItem('lista',JSON.stringify(todos));
}