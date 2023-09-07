const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = text.replace(/[\d]+/g, '').replace(/\s+/g, ' ');
    const words = text.split(' ');
    const wordsFilter = words.filter(word => word.trim() !== '');

    return wordsFilter.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const wordArray = text.trim();
    let characterCount = 0;

    for (let i = 0; i < wordArray.length; i++) {
      characterCount++;
    }
    return characterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const getCharacterCountExcludingSpaces = text.replace(/[.,#!$%&;:{}=\-_`~()]/g, "").replace(/\s/g, '');

    return getCharacterCountExcludingSpaces.length;

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/);
    const lengthSum = words.reduce((total, word) => {
      return total + word.length;
    }, 0);

    const avarageLength = lengthSum / words.length;

    const RoundedAverageWordLength = parseFloat(avarageLength.toFixed(2));

    return RoundedAverageWordLength;

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regex = /(?:^|\s)(\d+\.\d+|\d+)(?=$|\s)/g;
    const numbersFound = text.match(regex);

    if (!numbersFound) {
      return 0;
    }
    return numbersFound.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex = /(?:^|\s)(\d+\.\d+|\d+)(?=$|\s)/g;
    const numbersFound = text.match(regex);
    let numberSum = 0;

    if (numbersFound) {
      for (const number of numbersFound) {
        const decimalNumber = parseFloat(number);
        if (!isNaN(decimalNumber)) {
          numberSum += decimalNumber;
        }
      }
    }
    return numberSum;
  },

};

export default analyzer;
