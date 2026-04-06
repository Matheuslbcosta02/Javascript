var form = window.document.querySelector('form');
form.addEventListener("submit",gerar_tabuada);
var select = window.document.querySelector('select#Isaidas_select')

function gerar_tabuada(evento){
    evento.preventDefault()
    select.innerHTML = ""
    var label_numero = window.document.querySelector('input#Inumero')
    numero = Number(label_numero.value)
    for(var i = 1; i<=10; i++){
        objeto_select = document.createElement("option")
        objeto_select.text = `${numero} x ${i} = ${numero * i}`
        select.appendChild(objeto_select)
    }

}