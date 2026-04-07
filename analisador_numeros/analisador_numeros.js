var form_adicionar = window.document.querySelector('form#Iadicionar');
var form_finalizar = window.document.querySelector('form#Ifinalizar');
var lista_numeros = [];
var select_lista = window.document.querySelector('select#Iselectlista')
var input_entrada_numero = window.document.querySelector('input#Ilabelentrada')
var section_resultados = window.document.querySelector("section#Iresultado")
var botao_reiniciar = window.document.querySelector('button#Ibotao_reiniciar')

select_lista.innerHTML = ""
form_adicionar.addEventListener("submit",adicionar_numero_na_lista);
function adicionar_numero_na_lista(evento){
    evento.preventDefault();
    var label_entrada_numero = window.document.querySelector('input#Ilabelentrada');
    numero = Number(label_entrada_numero.value);
    if (numero>=1 && numero<=100 && !lista_numeros.includes(numero)){
        lista_numeros.push(numero)
        objeto_select = document.createElement('option')
        objeto_select.text = `Valor ${numero} adicionado.`
        select_lista.appendChild(objeto_select)
        input_entrada_numero.value = ""
        input_entrada_numero.focus()

    }
    else{
        window.alert("Você digitou um número inválido! Digite um número entre 1 e 100 e que ainda não esteja na lista!")
        input_entrada_numero.value = ""
        input_entrada_numero.focus()
    }
    

}



form_finalizar.addEventListener("submit", finalizar_processo);

function finalizar_processo(evento){
    evento.preventDefault()

    if (lista_numeros.length < 1){
        window.alert("Você deve inserir ao menos um número para finalizar o processo!")
    }
    else{
        numero_total_numeros_cadastrados = lista_numeros.length
        lista_numeros.sort((a,b)=> a-b)
        maior_numero = lista_numeros[numero_total_numeros_cadastrados -1]
        menor_numero = lista_numeros[0]
        soma_total = lista_numeros.reduce((acc,val)=>acc+val,0); //arrow function,1° parâmetro (acc,val)=>acc+val  é a function com return
        media_valores = soma_total/numero_total_numeros_cadastrados

        section_resultados.innerHTML = `Ao todo temos ${numero_total_numeros_cadastrados} número(s) cadastrado(s). <br> O maior valor informado foi ${maior_numero}. <br> O menor valor informado foi ${menor_numero}. <br> Somando todos os valores temos ${soma_total}. <br> A média dos valores digitados é ${media_valores}`
    }
    
    


}

botao_reiniciar.addEventListener("click", reiniciar_tudo);

function reiniciar_tudo(){
    select_lista.innerHTML = ""
    section_resultados.innerHTML = ""
    lista_numeros=[]

}
