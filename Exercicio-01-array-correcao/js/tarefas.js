//Lista Vazia de tarefas
let listaTarefasArray = [];

//recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//adicionando um listener ao botão para criar um evento de clique
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");
    
    listaTarefasArray.push(inputTarefa.value);
    
    
    
    
    inputTarefa.value = "";
});