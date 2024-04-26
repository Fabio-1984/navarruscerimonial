o
let formulario = document.querySelector('#myForm');
formulario.addEventListener('submit', (evento) => {

   let nome = document.querySelector('#nome');
   let email = document.querySelector('#email');
   let telefone = document.querySelector('#tel');
   let tipo_de_evento = document.querySelector('#tp');
   let data = document.querySelector('#data');
   let  mensagem = document.querySelector('#text');


  if (nome === ""){
   
     alert('Preencha o campo nome')
    
     return false
   
   }else if (email === ""){
   
     alert('Preencha o campo email')
     
     return false
   
   }else if (telefone === ""){
   
     alert('Preencha o campo telefone')
    
     return false
   
   }else if (tipoDeEvento === ""){
   
     alert('Selecione um tipo de evento')
    
     return false

   }else if (data === ""){
   
     alert('Selecione a data')
     
     return false

   }else if (mensagem === ""){
   
     alert('Selecione a data')
     
     return false  
   
   }else {
       alert('Dados enviados com sucesso. Em breve retornaremos');
    return false
       //document.forms["myForm"].submit()
       
      
  
       
   }
 
  evento.preventDefault()
 
})






