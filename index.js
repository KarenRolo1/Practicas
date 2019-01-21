 document.addEventListener("DOMContentLoaded", function(event) {
    const $lista = document.getElementById("todoList");
    const $texto = document.getElementById("textItem");
    var arrayTareas = [];
    document.getElementById("addItem").addEventListener("click", agregrTarea);
    if(localStorage.getItem("tareas2") != null){
        arrayTareas = JSON.parse(localStorage.getItem("tareas2"));
        renderArray();
    }
    
    function agregrTarea(){
        if($texto.value){
            var item = document.createElement('li');
            var textItem = document.createTextNode($texto.value);
            var deleteButton = document.createElement('div');
            var id = 0;
            //append in sesion array
            if(arrayTareas.length > 0){
                id= arrayTareas[arrayTareas.length-1].id+1;
                arrayTareas.push({id : id, texto : textItem.data})
            }
            else{
                id = 0; 
                arrayTareas.push({id : 0, texto : textItem.data})
            }            
            //render in html
            deleteButton.addEventListener("click", deleteItem);
            deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
            item.append(textItem);
            item.append(deleteButton); 
            item.setAttribute("id",id);       
            $lista.appendChild(item);
            $texto.value= "";
            localStorage.clear();
            localStorage.setItem("tareas2", JSON.stringify(arrayTareas));
        }

    }

    function deleteItem(){
        var id = this.parentElement.getAttribute("id");
        for(var i=0; i< arrayTareas.length; i++){
            if(arrayTareas[i].id == id){
                arrayTareas.splice(i, 1);
                break;
            }
        }        
        $lista.removeChild(this.parentElement);
        localStorage.clear();
        localStorage.setItem("tareas2", JSON.stringify(arrayTareas));
    }

    function renderArray(){
        var item = document.createElement('li');
        var textItem;
        var deleteButton = document.createElement('div');
        for(var i=0; i<arrayTareas.length; i++){
            textItem = document.createTextNode(arrayTareas[i].texto);
            deleteButton.addEventListener("click", deleteItem);
            deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
            item.append(textItem);
            item.append(deleteButton); 
            item.setAttribute("id",arrayTareas[i].id);       
            $lista.appendChild(item);
        }
    }

  });

