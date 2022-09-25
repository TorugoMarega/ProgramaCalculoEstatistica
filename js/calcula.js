/* ------------------------------------ APARECER O BOTÃO PARA O TOPO ------------------------------------- */
let arrowButton = document.getElementById("arrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }

}
/* ------------------------------------ FUNÇÃO DE IR PARA O TOPO ------------------------------------- */
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

/* ------------------------------------ FUNÇÃO DE IR PARA O FINAL ------------------------------------- */
function bottomFunction() {
  window.scrollTo({top: 500, behavior: 'smooth'});
}


/* ------------------------------------ FUNÇÃO PARA DEFINIR O ESTADO DO STYLE INICIAL ------------------------------------- */
function set_initial_style(textarea){

  var caixa_resposta = document.getElementById("caixa_resposta")
  textarea.style.borderColor="rgb(61, 61, 61)";
  caixa_resposta.style.visibility="visible";
  caixa_resposta.children[1].style.display ="flex";
  caixa_resposta.style.background="rgba(38, 38, 38, 0.772)";
  caixa_resposta.children[0].textContent="Resultado"
}

/* ------------------------------------ FUNÇÃO PARA MONTAR A CAIDA DE ERRO ------------------------------------- */
function error(textarea){
  var caixa_resposta = document.getElementById("caixa_resposta")
  textarea.style.borderColor="#8b0f0f8b";
  caixa_resposta.style.background="rgba(47, 1, 1, 0.856)";
  caixa_resposta.style.visibility="visible";
  caixa_resposta.children[0].textContent="DIGITE UMA SEQUÊNCIA VÁLIDA!"
  caixa_resposta.children[1].style.visibility ="hidden";
  caixa_resposta.children[1].style.display ="none";
  caixa_resposta.children[2].style.visibility ="hidden";
  caixa_resposta.children[2].style.display ="none";
  caixa_resposta.children[3].style.visibility ="hidden";
  caixa_resposta.children[3].style.display ="none";
}


/* -------------------- FUNÇÃO PARA CAPTURAR OS NUMEROS DIGITADOS E TRANSFORMAR EM ARRAY ------------------------------------- */

function TextAreaToArray(textarea) {
  var textarea_replaced = textarea.value.replace(",", ".").replace(/\s/g, '');
  var lenght = textarea_replaced.length;

  if(textarea_replaced[lenght-1] === ';'){
    textarea_replaced = textarea.value.replace(",", ".").replace(/\s/g, '').replace(/.$/,".");
  }

  var arr = textarea_replaced.split(';')

  for(let i = 0; i<arr.length; i++){
    arr[i]=parseFloat(arr[i])
    if(isNaN(arr[i])){
      arr= undefined
      break;
    }
  }
  return arr;
}

/* ------------------------------------- CALCULO MODA ------------------------------------- */

function moda(array) {

  var frequency = [];
  var maxFreq = 0;
  var modes = [];

  for (var i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1;

    if (frequency[array[i]] > maxFreq) {
      maxFreq = frequency[array[i]];
    }
  }

  for (var k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    }
  }
  if(array.length == modes.length){
    modes = "Amodal"
  }

  return modes;
}

/* ------------------------------------- CALCULO MEDIA ------------------------------------- */

function media(array) {

  var length = array.length;
  var soma = 0;
  for (var i = 0; i < length; i++) {
    soma += parseInt(array[i])
  }
  var media = soma / length;
  return media.toFixed(2);

}

/* ------------------------------------- CALCULO MEDIANA ------------------------------------- */

const mediana = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

/* ------------------------------------- CALCULO VARIANCIA ------------------------------------- */

function variancia(array){

  let mediaVar = media(array);
  let somatorio = 0;

  for(let i=0; i <array.length; i++){
    somatorio += (Math.pow((array[i]-mediaVar), 2))
  }
  let length = array.length;

  let variancia = somatorio/length-1;
  return variancia.toFixed(2);

}

/* ------------------------------------- CALCULO DESVIO PADRAO AMOSTRAL------------------------------------- */

function desvPadrao(array){
  let mediaVar = media(array);
  let somatorio = 0;

  for(let i=0; i <array.length; i++){
    somatorio += (Math.pow((array[i]-mediaVar), 2))
  }
  let length = array.length;
  let desvPadrao = Math.sqrt(somatorio/length);

  return desvPadrao.toFixed(2);
 // return 0;
}
/* ------------------------------------- CALCULO DESVIO PADRAO DA POPULAÇÃO------------------------------------- */

function desvPadraoPop(array){
  let mediaVar = media(array);
  let somatorio = 0;

  for(let i=0; i <array.length; i++){
    somatorio += (Math.pow((array[i]-mediaVar), 2))
  }
  let length = array.length-1;
  let desvPadraoPop = Math.sqrt(somatorio/length);

  return desvPadraoPop.toFixed(2);
}

/* ------------------------------------- CALCULO COEFICIENTE DE VARIAÇÃO ------------------------------------- */

function coefVariacao(array){
  let mediaVar = media(array);
  let desvPadraoVar = desvPadrao(array);
  let coefVariacao = desvPadraoVar/mediaVar*100
  return coefVariacao.toFixed(2);
}

/* ------------------------------------- CALCULO ERRO PADRAO ------------------------------------- */

function errPadrao(array){
  let desvPadraoVar = desvPadrao(array);
  let errPadrao = desvPadraoVar/Math.sqrt(array.length)
  return errPadrao.toFixed(2);
}

/* ------------------------------------- FUNÇAO QUE REALIZA TODOS OS CÁLCULOS----------------------------- */

function calcular() {
  var caixa_resposta = document.getElementById("caixa_resposta")
  let textarea = document.getElementById("textarea_intervalo");
  var textarea_value = textarea.value;
  let array = TextAreaToArray(textarea)
  
  if (textarea_value === undefined || textarea_value === "" || array == undefined) {
    error(textarea)
  }
  else {
    var moda_box = document.getElementById("moda");
    var media_box = document.getElementById("media");
    var mediana_box = document.getElementById("mediana");
    var variancia_box = document.getElementById("variancia");
    var desvpadrao_box = document.getElementById("desvpadrao");
    var desvpadraopop_box = document.getElementById("desvpadraopop");
    var cvariacao_box = document.getElementById("cvariacao");
    var errpadrao_box = document.getElementById("errpadrao");
    var qtdeElementos_box = document.getElementById("qtdeElementos");

    set_initial_style(textarea)

    moda_box.innerText = moda(array).toString().replace(",", " e ");
    media_box.innerText = media(array);
    mediana_box.innerText = mediana(array);
    variancia_box.innerText = variancia(array);
    desvpadrao_box.innerText = desvPadrao(array);
    desvpadraopop_box.innerText = desvPadraoPop(array);
    cvariacao_box.innerText = coefVariacao(array)+"%";
    errpadrao_box.innerText = errPadrao(array);
    qtdeElementos_box.innerText = array.length

  }
  caixa_resposta.style.display = "block";

}
/* -------------------------------------------- BOTÃO DE LIMPAR TELA --------------------------------- */

function limpar() {
  let textarea = document.getElementById("textarea_intervalo");
  let caixa_resposta = document.getElementById("caixa_resposta")
  caixa_resposta.style.visibility="hidden";
  textarea.style.borderColor = "rgb(61, 61, 61)";
  textarea.textContent = "";
  textarea.value = "";
}

