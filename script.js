

function encriptar(){

    let texto = document.getElementById("input-texto").value;
    texto = normalizar(texto);
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');
    
    document.getElementById("msg").value = texto;
    document.getElementById("msg").focus();
 
 }
 
 function desencriptar(){
 
    let texto = document.getElementById("input-texto").value;
    texto = normalizar(texto);
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');
 
    document.getElementById("msg").value = texto;
 
 }
 
 function borrar_mensaje(){
 
     document.getElementById("input-texto").value = "";
 
 }
 
 
 function pegar(){
 
 document.getElementById("input-texto").value = document.getElementById("msg").value;
 
 }
 
 function borrar_resultado(){
 
     document.getElementById("msg").value = "";
 
 }
 
 
 function copiar(){
 
     let contenido = document.getElementById('msg');
     contenido.select();
     document.execCommand('copy');
     document.getElementById('input-texto').focus();
 
 }
 
 function normalizar(texto) {
   return texto.normalize('NFD').replace(/([aeiou])[\u0300-\u0308]/gi,"$1").normalize().toLowerCase();
 }