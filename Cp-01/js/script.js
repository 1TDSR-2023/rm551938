//criando uma lista para cada objeto
let listaDescricaoArray = [];
let listaAutorArray = [];
let listaDepartamentoArray = [];
let listaImportanciaArray = [];
let listaTarefasArray = [];

let listaGeral= [];

const botaoAddItens = document.querySelector("#btnAddItens");
const botaoOrdenar = document.querySelector("#btnOrdenar");

botaoAddItens.addEventListener("click", (evento) => {

    evento.preventDefault();

    const inputDescricao = document.querySelector("#idDescricao");
    const inputAutor = document.querySelector("#idAutor");
    const inputDepartamento = document.querySelector("#idDepartamento");
    const inputImportancia = document.querySelector("#idImportancia");
    const inputTarefa = document.querySelector("#idTarefa");

    let tarefa = {
        descricao: inputDescricao.value,

    }

    listaDescricaoArray.push(inputDescricao.value);
    listaAutorArray.push(inputAutor.value);
    listaDepartamentoArray.push(inputDepartamento.value);
    listaImportanciaArray.push(inputImportancia);
    listaTarefasArray.push(inputTarefa.value);

    const tabelaDeTarefas = document.querySelector("#tabela-tarefas");

    const tr = document.createElement("tr");
    const tdDescricao = document.createElement("td");
    const tdAutor = document.createElement("td");
    const tdDepartamento = document.createElement("td");
    const tdTarefa = document.createElement("td");
    const tdImporantcia = document.createElement("td");
    

    tdDescricao.textContent = inputDescricao.value;
    tdAutor.textContent = inputAutor.value;
    tdDepartamento.textContent = inputDepartamento.value;
    tdImporantcia.textContent = inputImportancia;
    tdTarefa.textContent = inputTarefa.value;

    tr.appendChild(tdTarefa);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdAutor);
    tr.appendChild(tdDepartamento);
    tr.appendChild(tdImporantcia);

    tabelaDeTarefas.appendChild(tr);

   
    let selectTempo = document.createElement("select");
    let optionTempo1Semana = document.createElement("option");
    let optionTempo1Ano = document.createElement("option");
    let optionTempo10Anos = document.createElement("option");
    
    
    optionTempo1Semana.textContent = "1 semana";
    optionTempo1Ano.textContent = "1 Ano";
    optionTempo10Anos.textContent = "10 Anos";

    selectTempo.appendChild(optionTempo1Semana);
    selectTempo.appendChild(optionTempo1Ano);
    selectTempo.appendChild(optionTempo10Anos);

    tr.appendChild(selectTempo);
   

    let valorTarefa = document.createElement("input");
    valorTarefa.type = "txt";
    tr.appendChild(valorTarefa);
   
    let btnPraApagarLinha = document.createElement("button");

    btnPraApagarLinha.textContent = "*APAGAR LINHA*"

    tr.appendChild(btnPraApagarLinha);

    btnPraApagarLinha.addEventListener("click", (evento) =>{

        let trApaga = evento.target.parentNode;

        trApaga.remove();
    

    });

});