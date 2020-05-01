
'use strict';

var correctAnswers = 0;

alert('Welcome to my page! Let\'s play a game... How well do you know me?');

// First Question - for fun, console logs user name for future use.
var visitor;

function fvistor(){
  visitor = prompt('First, what is your name?');
}

console.log('the user\'s name is ' + visitor);

fvistor();

// Q1 y/n:
var FirstVisit;

function fFirstVisit(){
  FirstVisit = prompt('Have you visited this website before?').toLowerCase();

  // greeting response
  if(FirstVisit === 'yes' || FirstVisit === 'y'){
    alert('Welcome back, ' + visitor +'!');
    console.log('This user has visited the site before');
    correctAnswers++;
  }
  else if(FirstVisit === 'no' || FirstVisit === 'n'){
    alert('Welcome! This page is apparently all about me... Just like the rest of the world. Humility is my greatest trait. I am extremely humble. Bow before my humility.');
    console.log('This user has not visited the site before');
  }
}
fFirstVisit();

// Q2 y/n:
var sarcasm;

function fSarcasm(){
  sarcasm = prompt('Do you enjoy sarcasm, ' + visitor + '?').toLowerCase();

  if(sarcasm === 'yes' || sarcasm === 'y'){
    alert('How fantastic! Me too!');
    console.log('Correct.');
    correctAnswers++;
  }
  else if(sarcasm === 'no' || sarcasm === 'n'){
    alert('How fantastic!...We have nothing in common!');
    console.log('Incorrect.');
  }
}
fSarcasm();

//Q3 y/n:
var Microsoft;

function fMicrosoft(){
  Microsoft = prompt('Did I work at the Microsoft store? (y/n)').toLowerCase();

  if(Microsoft === 'yes' || Microsoft === 'y'){
    alert('Microsoft should be so lucky. ;) ');
    alert('....Just kidding. Love you Microsoft.');
    console.log('Incorrect.');
  }

  else if(Microsoft === 'no' || Microsoft === 'n'){ alert('Correct! I worked at the Apple Store for the last 6 years.');
    console.log('Correct.');
    correctAnswers++;
  }
}
fMicrosoft();

//Q4 y/n:
var H;

function fH(){
  H = prompt('Is there an \'H\' in my name?').toLowerCase();

  if(H === 'yes' || H === 'y'){
    alert('Radical, ' + visitor + '! *Zelda treasure chest noise*' );
    console.log('Correct.');
    correctAnswers++;
  }
  else if (H === 'no' || H === 'n'){ alert('Incorrect. It\'s Sarah with an H!');
    console.log('Incorrect.');

  }
}
fH();

//Q5 y/n:

var soccer;

function fsoccer(){

  soccer = prompt('Do I love soccer? (y/n)').toLowerCase();

  if(soccer === 'yes' || soccer === 'y'){
    alert('Yes! WITH MY WHOLE HEART AND SOUL.');
    console.log('Correct.');
    correctAnswers++;
  }
  else if(soccer === 'no' || soccer === 'n'){ alert('Incorrectamundo. I am annoyingly in love with soccer.');
    console.log('Incorrect.');
  }
}
fsoccer();

// Q6, For loop
var correctAnswer = '6';
var numberGuess;

function fnumberGuess(){


  for(var i = 0; i < 4; i++){
    numberGuess = prompt('What number does my favorite former Seattle Sounders player, Alonso, wear?');
    console.log('numberGuess = ' + numberGuess);
    console.log('correctAnswer = ' + correctAnswer);

    if(numberGuess === correctAnswer){
      break;
    }
    else if(numberGuess < correctAnswer){
      alert('too low! Try Again.');
    }
    else if(numberGuess > correctAnswer){
      alert('too high! Try Again.');
    }

    if (i === 1){
      alert('Only two guesses left...good luck!');
    }
  }

  if(numberGuess === correctAnswer){
    alert('Great job! My heart is with Ozzie forever');
    console.log('correct.');
    correctAnswers++;
  }
  else{
    alert('You were looking for "6"');
  }
}
fnumberGuess();

// Q7 For loop


var Officeppls = ['Michael', 'Michael Scott', 'Dwight', 'Pam', 'Creed','Jim', 'Kevin', 'Stanley', 'Angela', 'Darryl', 'Toby', 'Erin', 'Kelly', 'Ryan', 'Phyllis', 'Andy', 'Meredith', 'Oscar', 'Nate', 'Mose', 'Devin'];
var Bestguess;

function fbestGuess(){

  for(var i = 0; i < 6; i++){
    Bestguess = prompt('You know me so well! Since you know that my favorite show of all time is \'The Office\', name my favorite character.').toUpperCase();

    if(Bestguess === Officeppls[0].toUpperCase() ||
     Bestguess === Officeppls[1].toUpperCase() ||
     Bestguess === Officeppls[2].toUpperCase() ||
     Bestguess === Officeppls[3].toUpperCase() ||
     Bestguess === Officeppls[4].toUpperCase() ||
     Bestguess === Officeppls[8].toUpperCase())
    {
      alert('YES! ' + Bestguess + ' is THE BEST!');
      alert('Possible correct answers: Michael, Dwight, Pam, or Creed');
      alert('But honestly, let\'s be real...they\'re all fantastic!');
      console.log('correct.');
      correctAnswers++;
      break;
    }
    else if(Bestguess === Officeppls[4].toUpperCase() ||
          Bestguess === Officeppls[5].toUpperCase() ||
          Bestguess === Officeppls[6].toUpperCase() ||
          Bestguess === Officeppls[7].toUpperCase() ||
          Bestguess === Officeppls[9].toUpperCase() ||
          Bestguess === Officeppls[10].toUpperCase() ||
          Bestguess === Officeppls[11].toUpperCase() ||
          Bestguess === Officeppls[12].toUpperCase() ||
          Bestguess === Officeppls[13].toUpperCase() ||
          Bestguess === Officeppls[14].toUpperCase() ||
          Bestguess === Officeppls[15].toUpperCase() ||
          Bestguess === Officeppls[16].toUpperCase() ||
          Bestguess === Officeppls[17].toUpperCase() ||
          Bestguess === Officeppls[18].toUpperCase() ||
          Bestguess === Officeppls[19].toUpperCase() ||
          Bestguess === Officeppls[20].toUpperCase())
    {
      alert('That\'s an awesome guess! I love ' + Bestguess + '!!!, BUT try again...');
    }
    else
    {
      alert('Who the holy hell is that? Guess again');
    }
  }
}
fbestGuess();
alert('You got ' + correctAnswers + ' right out of 7! Great Job! Thumbs Up!');
