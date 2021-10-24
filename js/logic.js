// ------------variable side------------

// handle play pause button
let play_Btn_Element = document.getElementById("playButtonId");

// handle play the song
let audioElement = new Audio("../songs/Believe Song Download Mp3 Emiway.mp3");

// handle music gif
let musicGifElement = document.getElementById("music-gif");
let musicGifTextElement = document.getElementById("gif-text");

// ------------functions side------------

function press_Play_Button() {
  play_Btn_Element.classList.remove("playButtonClass");
  play_Btn_Element.classList.add("pauseButtonClass");

  audioElement.play();
  musicGifElement.style.opacity = 1;
  musicGifTextElement.style.opacity = 1;
}

