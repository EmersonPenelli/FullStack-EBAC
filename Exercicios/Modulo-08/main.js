var form = document.getElementById('formulario')

var corpoAgenda = document.querySelector('.corpoTabela')

var resetAgenda = document.querySelector('.reset')

var linhas = '';

var nomes = []
var ddds = []
var numeros = []



function adicionaLinha(){
    var inputNome = document.querySelector('.Nome').value;
    var inputDDD = parseInt(document.querySelector('.DDD').value);
    var inputNumero = parseInt(document.querySelector('.Telefone').value);

    nomes.push(inputNome);
    ddds.push(inputDDD);
    numeros.push(inputNumero);

    var linha = '<tr class="cadastroNovo">';
    linha += `<td>${inputNome}`;
    linha += `<td>${inputDDD}`;
    linha += `<td>${inputNumero}`;

    linhas += linha;
}

function atualizaTabela(){
    corpoAgenda.innerHTML = linhas
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    var inputNome = document.querySelector('.Nome').value;
    var regex = /^[A-Za-z]+$/;

    if (!regex.test(inputNome)) {
        alert('O campo de nome deve conter somente letras.');
        return;
    }

    adicionaLinha();
    atualizaTabela();
})