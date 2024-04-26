o
let formulario = document.querySelector('#myForm');
formulario.addEventListener('submit', (evento) => {

   let nome = document.querySelector('#nome');
   let email = document.querySelector('#email');
   let telefone = document.querySelector('#tel');
   let tipo_de_evento = document.querySelector('#tp');
   let data = document.querySelector('#data');
   let  mensagem = document.querySelector('#text');


 var x = document.forms["myForm"]["nome","email","telefone","tipo_de_evento","data","mensagem"].value;
 if(x == ""){
   alert("Dados não enviados verifique se não tem nenhum campo vazio, pois o preenchimento é obrigatório.");
    return false;
   
 }else{

    alert('Dados enviados com sucesso. Entraremos em contato o mais breve possíve. Obrigado!')
 }

 
  evento.preventDefault()
 
})






