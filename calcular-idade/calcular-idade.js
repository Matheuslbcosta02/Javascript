function formulario(){

    var nome = window.document.querySelector('#iname');
    var ano_bruto = window.document.querySelector('#age');
    var ano_limpo = Number(ano_bruto.value);
    var agora = new Date();
    var ano_atual = agora.getFullYear();
    var idade = ano_atual - ano_limpo;
    var sexo = window.document.getElementsByName('sexoo');
    var div_res = window.document.querySelector('div#resultado')


    if (ano_limpo < 0 || ano_limpo > ano_atual || isNaN(ano_limpo)){

        window.alert("Você digitou algo que não é aceitável. Tente Novamente!")


    }
    else{
        if (sexo[0].checked){
            var genero = 'homem'
        }
        else if(sexo[1].checked){
            var genero = 'mulher'
        }
        div_res.innerHTML = `${nome.value} é ${genero} e tem ${idade} ano(s).`
        
        

    }
    



}
