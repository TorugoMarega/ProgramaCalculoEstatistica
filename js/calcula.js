

function TextAreaToArray() {
    var textarea = document.getElementById("textarea_intervalo").value;
    var textarea_replaced = textarea.replace(",", ".").replace(/\s/g, '');

    //console.log();
    var arr = textarea_replaced.split(';').map(element => element.trim());
    //console.log(arr)
    return arr;
}

function moda() {
    var arr = TextAreaToArray()
    var length = arr.length;
    let maior;
    let maior_aux;
    for (var i = 0; i < length; i++) {
        if (i == 0) {
            maior = parseFloat(arr[i])
        }
        else if (length % 2 == 0) {
            if (parseFloat(arr[i]) >= maior) {
                maior = parseFloat(arr[i])
            }
        } else if (length % 2 != 0) {
            if (parseFloat(arr[i]) > maior & maior > maior_aux) {
                maior_aux = parseFloat(arr[i])
            } else if (parseFloat(arr[i]) < maior_aux & maior > maior_aux) {
                maior = parseFloat(arr[i])
            } 
        }
    }
    let moda
    if (maior == undefined) {
        moda = [maior_aux];
    } else if (maior_aux == undefined) {
        moda = [maior];
    } else if(maior == maior_aux){
        moda = [maior];
    }else {
        moda = [maior, maior_aux];
    }
    //console.log(moda)    
    return moda;
}

function media() {
    var arr = TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for (var i = 0; i < length; i++) {
        soma += parseInt(arr[i])
    }
    var media = soma / length;
    return media.toFixed(2);
}

function mediana() {
    var arr = TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for (var i = 0; i < length; i++) {
        soma += parseInt(arr[i])
    }
    var media = soma / length;
    return media.toFixed(2);
}


function calcular() {
    var textarea = document.getElementById("textarea_intervalo").value;
    var caixa_resposta = document.getElementById("caixa_resposta")
    var moda_box = document.getElementById("moda")
    var media_box = document.getElementById("media")
    var mediana_box = document.getElementById("mediana")

    if (textarea === undefined || textarea === "") {
        moda_box.innerText = 0
        media_box.innerText = 0
        mediana_box.innerText = 0
    }
    else {
        let moda_arr = moda()
        let moda_string
        if (moda_arr.length === 1) {
            moda_string = moda_arr[0]
        } else if (moda_arr.length === 2) {
            moda_string = moda_arr[0] + " e " + moda_arr[1]
        }
        console.log("MODA: " + moda_string)

        moda_box.innerText = moda_string;
        media_box.innerText = media();
        mediana_box.innerText = mediana();
    }

    caixa_resposta.style.visibility = "visible";

}

function limpar() {
    var textarea = document.getElementById("textarea_intervalo");
    textarea.textContent = "";
    textarea.value = ""

    var caixa_resposta = document.getElementById("caixa_resposta")
    caixa_resposta.style.visibility = "hidden";

}