import analyzer from './analyzer.js';

//SELECTORES DEL DOM
const texto = document.getElementsByName("user-input")[0];
const resetear = document.getElementById("reset-button");
const wordCount = document.querySelector("li[data-testid='WordCount']");
const characterCount = document.querySelector("li[data-testid='CharacterCount']");
const characterCountExcludingSpaces = document.querySelector("li[data-testid='CharacterCountExcludingSpaces']");
const averageWordLength = document.querySelector("li[data-testid='AverageWordLength']");
const numberCount = document.querySelector("li[data-testid='NumberCount']");
const numberSum = document.querySelector("li[data-testid='NumberSum']");


const resultOneElement = document.querySelector("li[data-testid='WordCount']");
const resultTwoElement = document.querySelector("li[data-testid='CharacterCount']");
const resultThreeElement = document.querySelector("li[data-testid='CharacterCountExcludingSpaces']");
const resultFourElement = document.querySelector("li[data-testid='AverageWordLength']");
const resultFiveElement = document.querySelector("li[data-testid='NumberCount']");
const resultSixElement = document.querySelector("li[data-testid='NumberSum']");

function resetearContadores() {
  // Establecemos el contenido de los contadores a 0
  resultOneElement.textContent = "Palabras 0";
  resultTwoElement.textContent = "Caracteres 0";
  resultThreeElement.textContent = "Caracteres sin espacios 0";
  resultFourElement.textContent = "Longitud promedio 0";
  resultFiveElement.textContent = "Números 0";
  resultSixElement.textContent = "Suma de números 0";
}

//EVENTOS DEL DOM
resetear.addEventListener("click", () => {
  texto.value = "";
  resetearContadores();
});


texto.addEventListener("keyup", function () {
  //llamando a primera función
  const resultOne = analyzer.getWordCount(texto.value);
  wordCount.innerHTML = 'Palabras ' + resultOne;

  //llamando a segunda función
  const resultTwo = analyzer.getCharacterCount(texto.value);
  characterCount.innerHTML = 'Caracteres ' + resultTwo;

  //llamando a tercera función
  const resultThree = analyzer.getCharacterCountExcludingSpaces(texto.value);
  characterCountExcludingSpaces.innerHTML = 'Caracteres sin espacios ' + resultThree;

  //llamando a cuarta función
  const resultFour = analyzer.getAverageWordLength(texto.value);
  averageWordLength.innerHTML = 'Longitud promedio ' + resultFour;

  //llamando a quinta función
  const resultFive = analyzer.getNumberCount(texto.value);
  numberCount.innerHTML = 'Números ' + resultFive;

  //llamando a sexta función
  const resultSix = analyzer.getNumberSum(texto.value);
  numberSum.innerHTML = 'Suma de números ' + resultSix;

})

