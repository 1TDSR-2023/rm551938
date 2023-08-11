//criando uma lista para cada objeto
let listaDescricaoArray = [];
let listaAutorArray = [];
let listaDepartamentoArray = [];
let listaImportanciaArray = [];

const botaoAddItens = document.querySelector("#btnAddItens");

botaoAddItens.addEventListener("click", (evento) => {

    evento.preventDefault();

    const inputDescricao = document.querySelector("#idDescricao");
    const inputAutor = document.querySelector("#idAutor");
    const inputDepartamento = document.querySelector("#idDepartamento");
    const inputImportancia = document.querySelector("#Importancia");

    listaDescricaoArray.push(inputDescricao.value);
    listaAutorArray.push(inputAutor.value);
    listaDepartamentoArray.push(inputDepartamento.value);
    listaImportanciaArray.push(inputImportancia);

    const tabelaDeTarefas = document.querySelector("#tabela-tarefas");

    const tr = document.createElement("tr");
    const tdDescricao = document.createElement("td");
    const tdAutor = document.createElement("td");
    const tdDepartamento = document.createElement("td");
    
    
    const tdImporantcia = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.disabled = true;
    tdImporantcia.appendChild(checkbox);

    
    
  


    tdDescricao.textContent = inputDescricao.value;
    tdAutor.textContent = inputAutor.value;
    tdDepartamento.textContent = inputDepartamento.value;

    tr.appendChild(tdDescricao);
    tr.appendChild(tdAutor);
    tr.appendChild(tdDepartamento);
    tr.appendChild(tdImporantcia);

    tabelaDeTarefas.appendChild(tr);

    let btnPraApagarLinha = document.createElement("button");

    btnPraApagarLinha.textContent = "*APAGAR LINHA*"

    tr.appendChild(btnPraApagarLinha);

    btnPraApagarLinha.addEventListener("click", (evento) =>{

        let conteudoCelulas = evento.target.parentNode.textContent.split("*")[0];

        console.log(conteudoCelulas);
    });


});