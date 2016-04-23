function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomWords(length=3, words=50) {
  var strings = "0123456789./*-+";
  var type_strings = '';
  for (var j=0; j<words; j++) {
    var one_word = '';
    for (var i=0; i<length; i++) {
      one_word += "<span class='letter l"+ i +"'>" + strings.substr(getRandomInteger(0,15), 1) + "</span>";
    }
    one_word = "<span class='word w" + j + "'>" + one_word + "</span>" + ' ';
    type_strings += one_word;
  }
  return type_strings;
}

function checkTyping(e) {
  var keycodes = [42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  e = e || window.event;
  console.log(e.keyCode);
  if (keycodes.includes(e.keyCode)) {
    //num keys pressed
  } else {
    //non num keys pressed
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  current_word = 0;
  current_latter = 0;
  word_size = 5;
  total_words = 25;
  var typehint = document.getElementById('typehint');
  typehint.innerHTML = randomWords(5,25);
  document.getElementsByClassName('word')[0].classList.add('underline');
  document.getElementsByClassName('word')[0].children[0].classList.add('highlight');
});

//listen to keycode
document.addEventListener("keypress", function (e) {
  checkTyping(e);
});

