var form = window.document.querySelector('form');
form.addEventListener("submit", contar)

function contar(evento){
    evento.preventDefault()
    var inicio = window.document.querySelector('input#Iinicio');
    var fim = window.document.querySelector('input#Ifim');
    var passo = window.document.querySelector('input#Ipasso');
    var texto_contagem = window.document.querySelector('#Icontagem')
    numero_inicio = Number(inicio.value);
    numero_fim = Number(fim.value);
    numero_passo = Number(passo.value);
    texto_contagem.innerHTML = ""
    if (numero_inicio<numero_fim){
        if (numero_passo>0){
            for(numero_inicio; numero_inicio<=numero_fim; numero_inicio+=numero_passo){
                texto_contagem.innerHTML += `${numero_inicio}  ,  `
            }
        }
        else{
            window.alert("O valor do seu passo é inválido! Coloque um valor maior que zero.")
        }
    }
    else if(numero_inicio>numero_fim){
        if(numero_passo<0){
            for(numero_inicio; numero_inicio>=numero_fim; numero_inicio+=numero_passo){
                texto_contagem.innerHTML += `${numero_inicio}  ,  `
            }
        }
        else{
            window.alert("O valor do seu passo é inválido! Coloque um valor menor que zero.")
        }
    }
    else if(numero_inicio==numero_fim){
        if(numero_passo==1){ 
            texto_contagem.innerHTML += `${numero_inicio}`
        }
        else{
            window.alert("O valor do seu passo é inválido! Nessa situação o valor do passo deve ser exatamente igual a 1!")
        }
    }
    
}