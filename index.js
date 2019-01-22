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
            var paragraph = document.createElement('p');
            var deleteButton = document.createElement('div');
            var id = 0;
            //append in sesion array
            if(arrayTareas.length > 0){
                id= arrayTareas[arrayTareas.length-1].id+1;
                arrayTareas.push({id : id, texto : $texto.value})
            }
            else{
                id = 0; 
                arrayTareas.push({id : 0, texto : $texto.value})
            }         
            if(arrayTareas.length == 5){
                addImage();
            }   
            //render in html
            deleteButton.addEventListener("click", deleteItem);
            deleteButton.setAttribute("class","removeItem");  
            deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
            paragraph.append($texto.value);
            item.append(paragraph);
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

    function addImage() {
        var img = document.createElement("img");
        img.src = atob('aHR0cHM6Ly9ob3Jyb3JmcmVha25ld3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA0L0NodWNreS1Eb2xsLnBuZw==');
        img.width = 500;
        img.height = 500;
        var parent = document.getElementById("containerTodoList");
        document.body.insertBefore(img, parent);
    }

    function renderArray(){
        var item; //= document.createElement('li');
        var deleteButton;// = document.createElement('div');
        var paragraph;// = document.createElement('p');
        for(var i=0; i<arrayTareas.length; i++){
            item = document.createElement('li');
            paragraph = document.createElement('p');
            deleteButton = document.createElement('div');
            deleteButton.addEventListener("click", deleteItem);
            deleteButton.setAttribute("class","removeItem");  
            deleteButton.innerHTML='<i class="fas fa-trash-alt"></i>';
            paragraph.append(arrayTareas[i].texto);
            item.append(paragraph);
            item.append(deleteButton); 
            item.setAttribute("id",arrayTareas[i].id);       
            $lista.appendChild(item);
        }
    }

  });

