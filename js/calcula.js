function set_initial_style(textarea){
  var caixa_resposta = document.getElementById("caixa_resposta")
  textarea.style.borderColor="rgb(61, 61, 61)";
  caixa_resposta.style.visibility="visible";
  caixa_resposta.children[1].style.display ="flex";
  caixa_resposta.style.background="rgba(38, 38, 38, 0.772)";
  caixa_resposta.children[0].textContent="Resultado"
}

function error(textarea){
  var caixa_resposta = document.getElementById("caixa_resposta")
  textarea.style.borderColor="#8b0f0f8b";
  caixa_resposta.style.background="rgba(47, 1, 1, 0.856)";
  caixa_resposta.style.visibility="visible";
  caixa_resposta.children[0].textContent="DIGITE UMA SEQUÊNCIA VÁLIDA!"
  caixa_resposta.children[1].style.visibility ="hidden";
  caixa_resposta.children[1].style.display ="none";
}



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
  return modes;
}

function media(array) {
  var length = array.length;
  var soma = 0;
  for (var i = 0; i < length; i++) {
    soma += parseInt(array[i])
  }
  var media = soma / length;
  return media.toFixed(2);
}


const mediana = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

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

    set_initial_style(textarea)

    moda_box.innerText = moda(array).toString().replace(",", " e ");
    media_box.innerText = media(array);
    mediana_box.innerText = mediana(array);

    //console.log("MODA: " + moda(array).toString().replace(",", " e "))
    //console.log("MEDIA: " + media(array))
    //console.log("MEDIANA: " + mediana(array))
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

/* ------------------------------------ ANIMAÇÃO SUAVIZAÇÃO DE SCROLL ------------------------------------- */
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
