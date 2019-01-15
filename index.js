 document.addEventListener("DOMContentLoaded", function(event) {
    const $lista = document.getElementById("todoList");
    const $texto = document.getElementById("textItem");
    var arrayTareas = [];
    document.getElementById("addItem").addEventListener("click", agregrTarea);
    
    function agregrTarea(){
        var item = document.createElement('li');
        var textItem = document.createTextNode($texto.value);
        var deleteButton = document.createElement('button');
        deleteButton.addEventListener("click", deleteItem);
        item.append(textItem);
        item.append(deleteButton);        
        $lista.appendChild(item);
    }

    function deleteItem(){
        console.log("Se eliminoo elemento", this.parentElement);
        $lista.removeChild(this.parentElement);
    }

  });

