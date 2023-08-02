//* Generar contraseñas o numeros de cuenta aleatorios

//* Variables para las contraseñas o numeros de cuenta aleatorios
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = ".?,;-_¡!¿*#$%&/\(){}[]|@<>";
const allCombination = numbers + letters + symbols;
const allCombinationNumbersLetters = numbers + letters;

//* Funcion aleatoria, puede ser de solo numero, letras, simbolo o convinadas 
const randomClue = (lengthCharacters) => {
    let resultRandom = "";
    for (let x = 0; x < lengthCharacters; x++) {
        let randomCharacter = Math.floor(Math.random() * numbers.length);
        resultRandom += numbers.charAt(randomCharacter);
    }
    return resultRandom;
};
randomClue(6);
//console.log(randomClue(6)); //? Comprobar que si genera las claves aleaotrias

//* Exportacion 
module.exports = randomClue;
