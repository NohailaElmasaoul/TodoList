//selectors
let todoinput =document.querySelector('.todo-input');
let todoButton =document.querySelector('.todo-button');
let todoList =document.querySelector('.todo-list');
let filterOption=document.querySelector('.filter-todo');
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(e){
    //Prevent form from submitting  
    e.preventDefault();
//Todo Div
let Tododiv=document.createElement("div");
Tododiv.className="todo";
//Creat li
let newTodo=document.createElement("li");
newTodo.innerText= todoinput.value;
newTodo.classList.add("todo-item");
Tododiv.appendChild(newTodo);
//Check Button 
let completedbutton=document.createElement("button");
completedbutton.innerHTML='<i class="fas fa-check"></i>';
completedbutton.classList= "complete-btn";
Tododiv.appendChild(completedbutton);
//Trash button
let trashbutton=document.createElement("button");
trashbutton.innerHTML='<i class="fas fa-trash"></i>';
trashbutton.classList= "trash-btn";

Tododiv.appendChild(trashbutton);
//div in ul
todoList.appendChild(Tododiv);
//supprimer le texte courant pour écrire le suivant :
todoinput.value="";
}

function  deleteCheck(e){
    //The target event property returns the element that triggered (déclenché) the event.
    let item=e.target;
    if( item.classList[0] === "trash-btn"){
        let todo=item.parentElement;
        //transition trash element
        todo.classList.toggle("trans");
        todo.addEventListener('transitionend',e =>{
           todo.remove();
        });
        //item1.remove();
    }
    if(item.classList[0] ==="complete-btn"){
        let todo=item.parentElement;
        todo.classList.toggle("completedstyle");
    }
}

function filterTodo(e) {
    const todos=todoList.childNodes;
    //console.log(todos);
    todos.forEach(myfunction);
    function myfunction(todo){
        switch(e.target.value){
            case "all":
                todo.style.display= "flex";
                break;
            case "completed":
                if(todo.classList.contains("completedstyle")){
                    todo.style.display= "flex";
                }
                else{
                    todo.style.display= "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completedstyle")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display= "none";
                } 
                break;
        }
    };
};