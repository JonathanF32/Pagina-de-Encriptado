function encriptarTexto() {
  let texto = document.getElementById("texto").value.trim(); // Obtener el texto y eliminar espacios al inicio y al final
  let tituloMensaje = document.getElementById("h1");
  let resultadoTextarea = document.getElementById("texto_2");
  let resultadoTextarea2 = document.getElementById("copy");

  // Función para reemplazar letras sin acentos y en minúsculas
  function reemplazarLetra(letra) {
    switch (letra) {
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'a':
        return 'ai';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letra; // Devuelve la letra original si no es una vocal a encriptar
    }
  }

  // Verificar si el texto contiene letras prohibidas (mayúsculas o con acentos)
  let patronProhibido = /[áéíóúüÁÉÍÓÚÜA-Z!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
  if (patronProhibido.test(texto)) {
    tituloMensaje.textContent = "Error al encriptar texto";
    alert("No puedes encriptar palabras con letras mayúsculas, acentuadas o caracteres especiales.");
    return; // Termina la ejecución de la función si hay letras prohibidas
  }

  // Proceder con la encriptación en minúsculas y sin acentos
  let textoEncriptado = texto.toLowerCase().split('').map(reemplazarLetra).join('');

  if (texto.length != 0) {
    resultadoTextarea.value = textoEncriptado;
    resultadoTextarea2.value = textoEncriptado;
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