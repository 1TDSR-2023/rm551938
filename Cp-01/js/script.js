//criando uma lista para cada objeto
let listaDescricaoArray = [];
let listaAutorArray = [];
let listaDepartamentoArray = [];
let listaImportanciaArray = [];

const botaoAddItens = document.querySelector("#btnAddItens");

botaoAddItens.addEventListener("click", (evento) =>{

    evento.preventDefault();

    //pegando os valores do inputs
    const inputDescricao = document.querySelector("#idDescricao");
    const inputAutor = document.querySelector("#idAutor");
    const inputDepartamento = document.querySelector("#idDepartamento");
    const inputImportancia = document.querySelector("#idImportancia");

    //Adicionando cada elemento a sua respectiva array
    listaDescricaoArray.push(inputDescricao);
    listaAutorArray.push(inputAutor);
    listaDepartamentoArray.push(inputDepartamento);
    listaImportanciaArray.push(inputImportancia);

    //Criando os elementos da tabela
    const tr = document.createElement("tr");
    const tdDescricao = document.createElement("td");
    const tdAutor = document.createElement("td");
    const tdDepartamento = document.createElement("td");
    const tdImportancia = document.createElement("td");

    //Adicionando os inputs na celula da table
    tdDescricao.textContent = inputDescricao.value; 
    tdAutor.textContent = inputAutor.value; 
    tdDepartamento.textContent = inputDepartamento.value; 
    tdImportancia.textContent = inputImportancia.value; 

    //Adicionando as células a linha da tabela
    tr.appendChild(tdAutor);
    tr.appendChild(tdDepartamento);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdImportancia);

    //Adicionando a linha ao corpo da tabela
    tabela-tarefas.appendChild(tr);
    
});


