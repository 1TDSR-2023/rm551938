//Lista Vazia de tarefas
let listaTarefasArray = [];

//recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//adicionando um listener ao botão para criar um evento de clique
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");
    
    //inserindo a nova tarefa no array com o método push
    listaTarefasArray.push(inputTarefa.value);
    
    //Recuperando a lista UL através do id com querySelector();
    const listaTarefasUL = document.querySelector("#lista-tarefas");

    //elemento li criado.
    let li = document.createElement("li");
    
    //Adicionando texto dentro do elemento LI;
    li.textContent = inputTarefa.value;

    //Adicionando o elemento LI a UL.
    listaTarefasUL.appendChild(li);
    
    
    inputTarefa.value = "";
});