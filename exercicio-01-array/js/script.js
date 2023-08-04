function adicionarTarefa() {
    var tarefa = document.getElementById("tarefa").value;

    if (tarefa !== "") {
        var novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        var lista = document.getElementById("listaDeTarefas");
        lista.appendChild(novaTarefa);

        document.getElementById("tarefa").value = "";
    }
}
