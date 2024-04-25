function envia(){
 
   let nome = myForm.nome.value
   let email = myForm.email.value
   let telefone = myForm.telefone.value
   let tipo_de_evento = myForm.tipoDeEvento.value
   let data = myForm.data.value
   let  mensagem = myForm.mensagem.value
   
   if (nome === ""){
   
     alert('Preencha o campo nome')
     myForm.nome.focus()
     return false
   
   }else if (email === ""){
   
     alert('Preencha o campo email')
     myForm.email.focus()
     return false
   
   }else if (telefone === ""){
   
     alert('Preencha o campo telefone')
     myForm.htelefone.focus()
     return false
   
   }else if (tipoDeEvento === ""){
   
     alert('Selecione um tipo de evento')
     myForm.tipoCliente.focus()
     return false

   }else if (data === ""){
   
     alert('Selecione a data')
     myForm.tipoCliente.focus()
     return false

   }else if (mensagem === ""){
   
     alert('Selecione a data')
     myForm.tipoCliente.focus()
     return false  
   
   }else {
       alert('Dados enviados com sucesso. Em breve retornaremos')
       document.forms["cadCli"].submit()
       
   }
 
 }



//FORMULÁRIO PEDIR ORÇAMENTO

//document.getElementById("cfr").addEventListener('click', function(){

//var n = document.getElementById("nome").value;
//var e = document.getElementById("email").value;
//var t = document.getElementById("tel").value;
//var ev = document.getElementById("tp").value;
//var d = document.getElementById("data").value;
//var tx = document.getElementById("text").value;


//alert('Dados enviandos enviados com sucesso. Entraremos em contato o mais breve possíve. Obrigado.')

//})


//Aqui esta a Validação de Formulário

//function validateForm(){
// var x = document.forms["myForm"]["nome","email","telefone","tipo de evento","data","mensagem"].value;
// if(x == ""){
 //  alert("Dados não enviados verifique se não tem nenhum campo vazio, pois o preenchimento é obrigatório.");
   // return false;
   
 //}else{

  //  alert('Dados enviados com sucesso. Entraremos em contato o mais breve possíve. Obrigado!')
// }


//}

