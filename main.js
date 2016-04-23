function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomWords(length=3, words=50) {
  var strings = "0123456789./*-+";
  var type_strings = '';
  for (var j=0; j<words; j++) {
    var one_word = '';
    for (var i=0; i<length; i++) {
      one_word += strings.substr(getRandomInteger(0,15), 1);
    }
    one_word += '  ';
    type_strings += one_word;
  }
  return type_strings;
}

document.addEventListener("DOMContentLoaded", function(event) {
    var typehint = document.getElementById('typehint');
    typehint.innerText = randomWords(5,25);
  });

