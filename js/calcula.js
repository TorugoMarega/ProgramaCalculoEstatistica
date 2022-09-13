

function TextAreaToArray(){
    var textarea = document.getElementById("textarea_intervalo").value;
    var textarea_replaced = textarea.replace(",", ".").replace(/\s/g, '');

    //console.log();
    var arr = textarea_replaced.split(';').map(element => element.trim());
    console.log(arr)
    return arr;
}

function moda(){
    var arr=TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for(var i=0; i<length; i++){
        soma += parseInt(arr[i])
    }
    var media = soma/length;    
    return media.toFixed(2); 
}

function media(){
    var arr=TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for(var i=0; i<length; i++){
        soma += parseInt(arr[i])
    }
    var media = soma/length;    
    return media.toFixed(2); 
}

function mediana(){
    var arr=TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for(var i=0; i<length; i++){
        soma += parseInt(arr[i])
    }
    var media = soma/length;    
    return media.toFixed(2); 
}


function calcular(){
    var textarea = document.getElementById("textarea_intervalo").value;
    var caixa_resposta = document.getElementById("caixa_resposta")
    var moda_box = document.getElementById("moda")
    var media_box = document.getElementById("media")
    var mediana_box = document.getElementById("mediana")

    if(textarea===undefined ||textarea===""){
        moda_box.innerText = 0
        media_box.innerText = 0
        mediana_box.innerText = 0
    }

    if(textarea.match){

    }
    else{
        alert("Digite uma sequência numérica válida!")
    }
    caixa_resposta.style.visibility="visible";
}

function limpar(){
    var textarea = document.getElementById("textarea_intervalo");
    textarea.textContent="";
    textarea.value=""
    
    var caixa_resposta = document.getElementById("caixa_resposta")
    caixa_resposta.style.visibility="hidden";
    
}