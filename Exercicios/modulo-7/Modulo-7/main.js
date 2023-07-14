    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (parseFloat(campoB) > parseFloat(campoA)) {
    document.getElementById('mensagem').innerHTML = "Formulário válido!";
    document.getElementById('mensagem').style.color = "green";
    } 
        else {
    document.getElementById('mensagem').innerHTML = "Formulário inválido! O número em B deve ser maior que o número em A.";
    document.getElementById('mensagem').style.color = "red";
    }
    });