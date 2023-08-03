//* Generar contraseñas o numeros de cuenta aleatorios 

//!------------------------------------------------------------------!\\
//!----------------------------OPCION N 1----------------------------!\\
//!------------------------------------------------------------------!\\

//* Variables para las contraseñas o numeros de cuenta aleatorios
// const numbers = "0123456789";
// const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const symbols = ".?,;-_¡!¿*#$%&/\(){}[]|@<>";
// const allCombination = numbers + letters + symbols;
// const allCombinationNumbersLetters = numbers + letters;

// //* Funcion aleatoria, puede ser de solo numero, letras, simbolo o convinadas 
// const randomClue = (lengthCharacters) => {
//     let resultRandom = "";
//     for (let x = 0; x < lengthCharacters; x++) {
//         let randomCharacter = Math.floor(Math.random() * numbers.length);
//         resultRandom += numbers.charAt(randomCharacter);
//     }
//     return resultRandom;
// };
// randomClue(6);
// //console.log(randomClue(6)); //? Comprobar que si genera las claves aleaotrias

// //* Exportacion 
// module.exports = randomClue;

//!------------------------------------------------------------------!\\
//!----------------------------OPCION N 2----------------------------!\\
//!------------------------------------------------------------------!\\

const randomClue = () => {
    const date = new Date();
    const now =
        date.getSeconds().toString() +
        date.getDate().toString() +
        date.getDay().toString() +
        date.getFullYear().toString() +
        date.getHours().toString();

    const randomNumber = Math.floor(
        Math.random() * (999 - 111 + 1) + 111
    ).toString();

    return + (now + randomNumber);

};

module.exports = randomClue; 