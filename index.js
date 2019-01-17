 document.addEventListener("DOMContentLoaded", function(event) {
    const $lista = document.getElementById("todoList");
    const $texto = document.getElementById("textItem");
    var arrayTareas = [];
    document.getElementById("addItem").addEventListener("click", agregrTarea);
    
    function agregrTarea(){
        if($texto.value){
            var item = document.createElement('li');
            var textItem = document.createTextNode($texto.value);
            var deleteButton = document.createElement('div');
            deleteButton.addEventListener("click", deleteItem);
            deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
            item.append(textItem);
            item.append(deleteButton);        
            $lista.appendChild(item);
            $texto.value= "";
        }

    }

    function deleteItem(){
        console.log("Se eliminoo elemento", this.parentElement);
        $lista.removeChild(this.parentElement);
    }

  });

