function agregrTarea(){
    var lista = document.getElementsByClassName("todoList");
    var texto = document.getElementById("tareaAdd").value;
    lista[0].innerHTML = ('<div><p>'+texto+'</p><input type="button" onclick="delete(this)"></div>');
}