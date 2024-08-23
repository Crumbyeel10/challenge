function encriptar() {
    const texto = document.getElementById('texto').value;
    let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi,   
   "ufat");
    document.getElementById('resultado').textContent   
   = textoEncriptado;
  }
  
  function desencriptar() {
    const texto = document.getElementById('texto').value;
    let textoDesencriptado = texto.replace(/enter/gi, "e")
                                  .replace(/imes/gi, "i")
                                  .replace(/ai/gi,   
   "a")
                                  .replace(/ober/gi,   
   "o") // Elimina la "g" extra
                                  .replace(/ufat/gi, "u");
    document.getElementById('resultado').textContent = textoDesencriptado;
  }