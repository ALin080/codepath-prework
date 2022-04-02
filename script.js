// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 5;


//Global Variables
var clueHoldTime = 900; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0; //how far into guessing the pattern
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0; //where user is in sequence
var numLives = 3;
var myInterval; 
var timeLeft = 5;

function startGame(){
  numLives = 3;
  progress = 0;
  gamePlaying = true;
  pattern = []
  clueHoldTime = 900;
  timeLeft = 5;
  document.getElementById("livesLeft").innerHTML = numLives;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generatePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function generatePattern(){
  while(pattern.length < patternLength) {
    pattern.push(getRandomInt(1, 7))
  }
}

function getRandomInt(min, max) { //From javascript reference web docs 
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){1
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  //context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  console.log("delay " + delay);
  setTimeout(startTime, delay); //starts the countdown after the clues are all played
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){ //Correct guess
    if(progress == guessCounter){ //Turn over
      stopTime();
      if(pattern.length - 1 == progress) { //Last turn
        winGame();
      }else{ //Next turn
        progress = progress + 1;
        if (clueHoldTime > 200) { //Set a min
          clueHoldTime = clueHoldTime - 200 //Speed up after correct guess
        }
        playClueSequence();
        timeLeft = 5;
      }
    }else{ //Still in turn
      guessCounter = guessCounter + 1;
    }
  }else{ //wrong guess
    stopTime()
    numLives = numLives - 1;
    if (numLives > 0) { //lives left
      document.getElementById("livesLeft").innerHTML = numLives;
      alert("You have " + numLives + " live(s) left!");
      playClueSequence();
    }else{ //no more lives 
      loseGame();
    }
  }
}

function loseGame(){
  stopGame();
  stopTime();
  alert("You have 0 lives left! You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You won with " + numLives + " lives remaining!");
}


function startTime(){
  document.getElementById("remainingTime").innerHTML = timeLeft;
  myInterval = setInterval(updateTime, 1000);
}

function stopTime() {
  timeLeft = 5;
  document.getElementById("remainingTime").innerHTML = timeLeft;
  clearInterval(myInterval); //reset timer from 1000
}

function updateTime() {
  if(timeLeft > 0) {
    timeLeft = timeLeft - 1;  
    document.getElementById("remainingTime").innerHTML = timeLeft;
  } else {
    overTime();
  }
}

function overTime(){
  clearInterval(myInterval)
  numLives = numLives - 1;
  if (numLives > 0) { 
    document.getElementById("livesLeft").innerHTML = numLives;
    alert("Too slow! You have " + numLives + " live(s) left!");
    document.getElementById("remainingTime").innerHTML = timeLeft;
    timeLeft = 5;
    playClueSequence();
  }else{ //no more lives 
    stopTime();
    loseGame();
  }
}
  

/* Hide and reveal whole and cut fruits */ 
function appear(imageId) {
  document.getElementById(imageId).classList.remove("hidden")
}

function disappear(imageId) {
  document.getElementById(imageId).classList.add("hidden")
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.6,
  3: 329,
  4: 349.2,
  5: 392,
  6: 440
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)