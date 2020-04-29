
'use strict';



alert('Welcome! please answer a few questions.');

// First Question - for fun, console logs user name for future use.
var nameA = prompt('what is your name?');
console.log('the user\'s name is' + nameA);


// Q1 y/n:
var FirstVisit = prompt('Have you visited this website before? y/n').toLowerCase();



// greeting
if(FirstVisit === 'y'){
  alert('Welcome back, ' + nameA +'!');
  console.log('This user has visited the site before');
}
else { alert('Welcome! This page is apparently, all about me! Just like the rest of the world. Humility is my greatest trait. I am extremely humble. Bow before my humility.');
  console.log('This user has not visited the site before');
}


// Q2 y/n: 
var sarcasm = prompt('Do you enjoy sarcasm, ' + nameA + ' (y/n)').toLowerCase();

if(sarcasm === 'y'){
  alert('How fantastic! Me too!');
  console.log('Correct.');
}
else { alert('How fantastic!...We have nothing in common!');
  console.log('Incorrect.');
}


//Q3 y/n:
var Microsoft = prompt('Did I work at Microsoft? (y/n)').toLowerCase();

if(Microsoft === 'y'){
  alert('Microsoft should be so lucky. ;) ');
  alert('Just kidding. Love you Microsoft.');
  console.log('Incorrect.');
}
else { alert('Correct! I worked at the Apple Store for the last 6 years.');
  console.log('Correct.');

}


//Q4 y/n:
var soccer = prompt('Do I love soccer? (y/n)').toLowerCase();

if(soccer === 'y'){
  alert('Yes! WITH MY WHOLE HEART AND SOUL.');
  console.log('Correct.');
}
else { alert('Incorrectamundo. I am annoyingly in love with soccer.');
  console.log('Incorrect.');
}


//Q5 y/n: 
var enjoy = prompt('Is there an \'H\' in my name?').toLowerCase();

if(enjoy === 'y'){
  alert('Radical! You have passed my riddles three, ' + nameA + ' *Zelda treasure chest noise*');
  console.log('Correct.');
}
else { alert('Sarah with an H!');
  console.log('Incorrect.');

}
