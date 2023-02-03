let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0

function addTarefa(){
    let valorInput = input.value;

    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){
        ++contador

        let novoItem =
         `<div id='${contador}' class="item">
        <div onclick='marcarTarefa(${contador})' class="item-icone"><svg id='icone_${contador}' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg></div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick='deletar(${contador})' class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path
                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>Delete</button>
        </div>
    </div>`;
    //adicionar novo item no main
    main.innerHTML += novoItem;
    //zerar is campos
    input.value = '';
    input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove('bi bi-circle');
    tarefa.add('bi bi-trash3-fill');
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('classe');

    if (classe == 'item'){
        item.classList('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('bi bi-circle');
        icone.classList.add('bi bi-circle');
    }
}


input.addEventListener('keyup',function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

