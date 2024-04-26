   let nome = document.querySelector('#nome');
   let email = document.querySelector('#email');
   let telefone = document.querySelector('#tel');
   let tipo_de_evento = document.querySelector('#tp');
   let data = document.querySelector('#data');
   let  mensagem = document.querySelector('#text');



nome.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if (valor.length <3){
        usernameCadastro.classList.remove('correct');
        usernameCadastro.classList.add('error');
        usernameHelper.innerText = 'Seu nome deve ter 3 ou mais caracteres'
        usernameHelper.classList.add('visible')
        inputsValidos.usernameCadastro = false
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        usernameCadastro.classList.remove('error');
        usernameHelper.classList.remove('visible');
        usernameCadastro.classList.add('correct');
        inputsValidos.usernameCadastro = true
    }
})







