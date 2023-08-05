
//Criando a lista de tarefas array vazia...
let listaTarefasArray = [];

//Recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicionando um listener ao botão para esperar um clique que vai disparar a ação.
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //Pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");
    
    //Inserindo a nova tarefa no array com o método push();
    listaTarefasArray.push(inputTarefa.value);
    
    //Recuperando a lista UL através do id com querySelector();
    const listaTarefasUL = document.querySelector("#lista-tarefas");

    //Elemento li criado.
    let li = document.createElement("li");

    //Adiocionando texto dentro do elemento LI;
    li.textContent = inputTarefa.value;

    //Adicionando o elemento li a UL.
    listaTarefasUL.appendChild(li);

    //Criando o bot"ao de excluir tarefas.
    let botaoApagaTarefa = document.createElement("button");

    //Inserindo o nó de texto do botão
    botaoApagaTarefa.textContent = " x ";

    //Adicionando um botão para apagar a tarefa!
    li.appendChild(botaoApagaTarefa);

    botaoApagaTarefa.addEventListener("click",(e)=>{

        listaTarefasArray.forEach(tarefa=>{
            if (tarefa ==  e.target.parentNode.textContent.split(" ")[0]){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1);
            }
        });

                //Removendo do HTML
                e.target.parentNode.remove();
                console.log(listaTarefasArray);
    });
    


    console.log(listaTarefasArray);
    inputTarefa.value = "";
});


