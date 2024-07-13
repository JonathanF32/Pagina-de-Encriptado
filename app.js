function encriptarTexto() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let tituloMensaje = document.getElementById("h1");  
  let resultadoTextarea = document.getElementById("texto_2");
  let resultadoTextarea2 = document.getElementById("copy");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    resultadoTextarea.value = textoCifrado;
    resultadoTextarea2.value = textoCifrado
    tituloMensaje.textContent = "Texto encriptado correctamente!";
    
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";    
    alert("No has seleccionado ningún texto para encriptar");
  }
}

function desencriptarTexto() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let tituloMensaje = document.getElementById("h1");  
  let resultadoTextarea = document.getElementById("texto_2");
  

  let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    resultadoTextarea.value = textoDesencriptado;
    tituloMensaje.textContent = "El texto se ha desencriptado correctamente!";   
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";    
    alert("Selecciona el texto para desencriptar");
  }
}

function copiarTexto(copy) {
  let textarea = document.getElementById("copy");
  textarea.select();  
  document.execCommand("copy");    
  alert("Texto copiado correctamente");
}