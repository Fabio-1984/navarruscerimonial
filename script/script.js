
const form = document.getElementById("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const phoneCel = document.getElementById("phone");
const eventType = document.getElementById("eventType");
const data = document.getElementById("date");
const msg = document.getElementsByClassName("span-required");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cellphoneRegex = /^\d{10,11}$/;



form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
    const n = document.forms["form"]["name"].value;
    const e = document.forms["form"]["email"].value;
    const p = document.forms["form"]["phone"].value;

    if (n == "" || n.length < 3 ){
        alert('Dados não enviado. Por favor verifique e corrija os campos destacados em vermelho!')
    }else if(e == "" && e != emailRegex){
        alert('Dados não enviado. Por favor verifique e corrija os campos destacados em vermelho!')
    }else if( p == "" && p != cellphoneRegex){
        alert('Dados não enviado. Por favor verifique e corrija os campos destacados em vermelho!')
    }
    else{
        alert('Dados enviados com sucesso. Muito em breve entraremos em contato. ')
        form.reset();
    }

});




function setError(field) {
    field.style.border = '3px solid red';
    const errorSpan = field.nextElementSibling;
    errorSpan.style.display = 'block';

}

function setSuccess(field) {
    field.style.border = '';
    const errorSpan = field.nextElementSibling;
    errorSpan.style.display = 'none';
}

function nameValidate() {

    if (nome.value.length < 3) {
        setError(nome)
    } else {
        setSuccess(nome)
    }
}

function emailValidate() {

    if (!emailRegex.test(email.value)) {
        setError(email)
    } else {
        setSuccess(email)
    }
}

function phoneValidate() {

    if (!cellphoneRegex.test(phoneCel.value)) {
        setError(phoneCel)
    } else {
        setSuccess(phoneCel)
    }
}

