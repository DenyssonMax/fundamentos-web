
/* usando selector */
let nome = document.querySelector ("nome")
let assunto = document.querySelector("#assunto")
let nomeOk = false;
let assuntoOk = false;



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.Value.length <3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML ='Nome válido'
        txt.style.color = 'red'
        nomeOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length > 2) {
        txtAssunto.innerHTML = 'Voce chegou ao limite de caracteres'
        txtAssunto.style.color ='red'
    } else {
        txt.innerHTML ='Nome válido'
        txt.style.color = 'green'
        assuntoOk = true;
    }
}

function enviar(){
    if( nomeOk == true  && assuntoOk == true){
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente ')
    }

}
