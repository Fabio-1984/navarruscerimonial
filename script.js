   let nome = document.getElementById('#nome');
   let email = document.querySelector('#email');
   let telefone = document.querySelector('#tel');
   let tipo_de_evento = document.querySelector('#tp');
   let data = document.querySelector('#data');
   let  mensagem = document.querySelector('#text');



nome.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if (valor.length <3){
        nome.classList.remove('correct');
        nome.classList.add('error');
        nome.innerText = 'Seu nome deve ter 3 ou mais caracteres'
        nome.classList.add('visible')
        nome.usernameCadastro = false
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        nome.classList.remove('error');
        nome.classList.remove('visible');
        nome.classList.add('correct');
        inputsValidos.nome = true
    }
})

mostrarPopUp(nome);






