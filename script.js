



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

function validateForm(){
 var x = document.forms["myForm"]["nome","email","telefone","tipo de evento","data","mensagem"].value;
 if(x == ""){
   alert("Dados não enviados verifique se não tem nenhum campo vazio, pois o preenchimento é obrigatório.");
    return false;
   
 }else{

    alert('Dados enviados com sucesso. Entraremos em contato o mais breve possíve. Obrigado!')
 }


}

function openNav() {
   document.getElementById("myMenus").style.height = "100%";
 }
 
 
 function closeNav() {
   document.getElementById("myMenus").style.height = "0%";
 }

