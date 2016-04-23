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

function calculateSpeed() {
  time_end = new Date();
  diff = (time_end.getTime() - time_start.getTime())/1000;
  return Math.ceil(diff/total_words) + " seconds/word";
}

function checkTyping(e) {
  //numpad
  var keycodes = [42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  e = e || window.event;
  console.log(e.keyCode);
  if (current_word == 0 && current_latter == 0) {
    time_start = new Date();
  }
  if (current_word == (total_words-1) && current_latter == (word_size-1)) {
    alert('Finished! Correct Keys: ' + correct_letters + ' Wrong Keys: ' + wrong_letters + ' Speed: ' + calculateSpeed());
    correct_letters = 0;
    wrong_letters = 0;
    current_word = 0;
    current_latter = 0;
    word_size = 5;
    total_words = 25;
    var typehint = document.getElementById('typehint');
    typehint.innerHTML = randomWords(word_size,total_words);
    document.getElementsByClassName('word')[current_word].classList.add('underline');
    document.getElementsByClassName('word')[0].children[current_latter].classList.add('highlight');
    return false;
  }
  if (keycodes.includes(e.keyCode)) {
    target_key = document.getElementsByClassName('word')[current_word].children[current_latter].innerText;
    if (String.fromCharCode(e.keyCode) == target_key){
      correct_letters +=1;
    } else {
      //wrong key pressed
      wrong_letters +=1;
      document.getElementsByClassName('word')[current_word].children[current_latter].classList.add('dim');
    }
    //num keys pressed
    document.getElementsByClassName('word')[current_word].children[current_latter].classList.remove('highlight');
    if (current_latter == (word_size-1)) {
      document.getElementsByClassName('word')[current_word].classList.remove('underline');
      current_latter = 0;
      current_word +=1;
      document.getElementsByClassName('word')[current_word].classList.add('underline');
    } else {
      current_latter +=1;
    }
    document.getElementsByClassName('word')[current_word].children[current_latter].classList.add('highlight');

  } else {
    //non num keys pressed
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  correct_letters = 0;
  wrong_letters = 0;
  time_start = '';
  time_end  = '';
  current_word = 0;
  current_latter = 0;
  word_size = 5;
  total_words = 25;
  var typehint = document.getElementById('typehint');
  typehint.innerHTML = randomWords(word_size,total_words);
  document.getElementsByClassName('word')[current_word].classList.add('underline');
  document.getElementsByClassName('word')[0].children[current_latter].classList.add('highlight');
});

//listen to keycode
document.addEventListener("keypress", function (e) {
  checkTyping(e);
});

