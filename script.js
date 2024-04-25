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
       document.forms["myForm"].submit()
       
   }
 
 }





