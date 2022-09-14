

function TextAreaToArray() {
    var textarea = document.getElementById("textarea_intervalo").value;
    var textarea_replaced = textarea.replace(",", ".").replace(/\s/g, '');

    //console.log();
    var arr = textarea_replaced.split(';').map(element => element.trim());
    //console.log(arr)
    return arr;
}

function moda() {
    var array = TextAreaToArray()
    var frequency = []; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
  
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
  
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
  
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
    return modes;
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
/*     var arr = TextAreaToArray()
    var length = arr.length;
    var soma = 0;
    for (var i = 0; i < length; i++) {
        soma += parseInt(arr[i])
    }
    var media = soma / length; */
    return undefined;
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
        moda_box.innerText =  moda().toString().replace(",", " e ");;
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