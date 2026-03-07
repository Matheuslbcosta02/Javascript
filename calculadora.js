var operacao = window.document.querySelector('select#ioperacao');
operacao.addEventListener("change",decisao);

var resultado = 0
var simbolo = window.document.querySelector('div#iescolha')
var escrita_final = window.document.querySelector('div#resultado')

var botao = document.querySelector('button#FINAL');
botao.addEventListener("click",finalmente)

function decisao(){
    if (operacao.value =="soma"){
        resultado = numero1 + numero2;
        simbolo.innerHTML = `+`;
        
    }
    else if (operacao.value == "subtracao"){
        resultado = numero1 - numero2;
        simbolo.innerHTML = `-`;
        
    }
    else if (operacao.value == "multiplicacao"){
        resultado = numero1 * numero2;
        simbolo.innerHTML = `*`;
        
    }
    else if (operacao.value == "divisao"){
        resultado = numero1/numero2;
        simbolo.innerHTML = `/`;
        
    }
    return resultado;
}



function finalmente(){
    var n1 = window.document.querySelector('input#inum1');
    var n2 = window.document.querySelector('input#inum2');
    numero1 = Number(n1.value);
    numero2 = Number(n2.value);
    valor_final = decisao()
    if (operacao.value =="soma"){
        
        escrita_final.innerHTML = `O resultado da soma entre ${numero1} e ${numero2} é ${valor_final}`;
    }
    else if (operacao.value == "subtracao"){
        
        escrita_final.innerHTML = `O resultado da subtração entre ${numero1} e ${numero2} é ${valor_final}`;
    }
    else if (operacao.value == "multiplicacao"){
        
        escrita_final.innerHTML = `O resultado da multiplicação entre ${numero1} e ${numero2} é ${valor_final}`;
    }
    else if (operacao.value == "divisao"){
        
        escrita_final.innerHTML = `O resultado da divisão entre ${numero1} e ${numero2} é ${valor_final}`;
    }
}


var modal = document.querySelector("#modal");
var titulo = document.querySelector("#modal-titulo");
var texto = document.querySelector("#modal-texto");
var fechar = document.querySelector(".fechar");

var itens = document.querySelectorAll("#section1 li")

itens.forEach(function(item){
    item.addEventListener("click",function(){
        var nome = item.innerText
        titulo.innerText = nome

        if(nome === "SOMA"){
            texto.innerText = "Operação matemática representada pelo símbolo ' + '"
        }
        if(nome === "SUBTRAÇÃO"){
            texto.innerText = "Operação matemática representada pelo símbolo ' - '"
        }
        if(nome === "MULTIPLICAÇÃO"){
            texto.innerText = "Operação matemática representada pelo símbolo ' * '"
        }
        if(nome === "DIVISÃO"){
            texto.innerText = "Operação matemática representada pelo símbolo ' / '"
        }
        modal.classList.add("ativo")
    })
})

fechar.addEventListener("click",function(){
    modal.classList.remove("ativo")
})

modal.addEventListener("click", function(e){
    if(e.target ===modal){
        modal.classList.remove("ativo")
    }
})
