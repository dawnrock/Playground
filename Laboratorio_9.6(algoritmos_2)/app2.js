// ENIGMA

var plainAlphabet =     "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "hola mundo";

var textScrypt = "";


// Esta función nos devuelve la posicón de la letra target, en el alfabeto que escogamos.

var getIndex = (alphabet, target) => {

    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === target) return i;
    }
    return target;
}

// Esta función nos devuelve la letra de la posición introducida en el parametro "number" de nuestro diccionario encriptado.

var coderChar = number => {
    var charReturn = "";

    if ( number < encryptedAlphabet.length && number >= 0 ){
        charReturn = encryptedAlphabet[number]; 
        } 

    return charReturn;
}

// Esta función nos devuelve la letra de la posición introducida en el parametro "number de nuestro diccionario base(plainAlphabet)." 

var decoderChar = number => {
    var charReturn = "";

    if ( number < plainAlphabet.length && number >= 0 ){
        charReturn = plainAlphabet[number]; 
        } 
    return charReturn;
}

// Esta función nos devuelve el texto introducido (text) encriptado.

var encryptString = text => {
    
    // Definimos variables locales para la función; 
    
    var cryptedText = ""; // variable string para texto encriptado
    var indexTextContainer ; //variable numerica con la posición(indice) de la letra en el diccionario(indice para usarlo en plainAlphabet)

    // Recorremos todas las letras del texto (text)

    for (var i = 0; i < text.length; i++) {
        
        //Obtenemos la posicion de la letra dentro del diccionario base (plainAlphabet)

        indexTextContainer = getIndex(plainAlphabet, text[i]);
        
        // Evaluamos si el texto es un espacio (" ").

        if (text[i] === " ") {

            // En el caso que sea un espacio introducimos un espacio.

            cryptedText = cryptedText + " ";
            // console.log(indexTextContainer +   "    " + text[i] + "     " + " ");
        } 
        else {

            // En el caso que no sea un espacio, metemos la letra encriptada correspondiente

            cryptedText = cryptedText + coderChar(indexTextContainer);
            // console.log(indexTextContainer +   "    " + text[i] + "     " + coderChar(indexTextContainer));
            }

    }
    return cryptedText;
}

// Esta función nos devuelve el texto introducido (text) desencriptado.

var uncryptString = text => {
    var unCryptedText = "" ;
    var indexEncryptedContainer;

    for (var i = 0; i < text.length; i++) {
       
        indexEncryptedContainer = getIndex(encryptedAlphabet, text[i]);
        
        if (text[i] === " ") {

            unCryptedText = unCryptedText + " ";
    
        } 
        
        else {

            unCryptedText = unCryptedText + decoderChar(indexEncryptedContainer);
            
            }
    
    }
    return unCryptedText;
    
}


textScrypt = encryptString(text);

console.log("texto codificado: " + textScrypt);


console.log("texto descodificado: " + uncryptString(textScrypt));




