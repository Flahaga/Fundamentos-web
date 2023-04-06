let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

Nome.style.width = "30%"
email.style.width = "30%"

function validaNome() {
    let txt = document.querySelector("#Txtnome")
    if(nome.value.length < 3) {
     txt.innerHTML ="Nome Inválido"
     txt.style.color = "red"

    } else {
        txt.innerHTML ="Nome Válido"
    }

}
