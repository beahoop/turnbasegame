// user = prompt("Hello what is your username?")

// player {
//   color:
//   size:
//   health:
//   attack-points:
//   username:
// }
// enemy {
//   color:
//   size:
//   health:
//   attack-points:
//   username: enemy1
// }
// const dog = new Dog(sarah);
// const sarah = {name: 'sarah', age:27};
// dog.name would equal Sarah
//
console.log("hi!");
function Player({color, size, health, attackPoints, username ='Computer'} = {}) {
  this.color = color,
  this.size = size,
  this.health  = health,
  this.attackPoints = attackPoints,
  this.username = username;
};


const players = {
  grey: {
    color: 'grey',
    size: 'small',
    health: 100,
    attackPoints: 10,
    username: 'user',
  },
  red: {
    color: 'red',
    size: 'large',
    health: 100,
    attackPoints: 50,
    username: 'user',
  },
  green: {
    color: 'green',
    size: 'med',
    health: 250,
    attackPoints: 25,
    username: 'user',
  }
};
// const enemies = [];

let player;

const selectPlayer = (event) => {
  const selection = event.target.value;
  player = new Player(players[selection]);
  console.log(player);
}

const greyButton = document.querySelector('.grey');
greyButton.addEventListener('click', selectPlayer);
const redButton = document.querySelector('.red');
redButton.addEventListener('click', selectPlayer);
const greenButton = document.querySelector('.green');
greenButton.addEventListener('click', selectPlayer);

//////////// deal with player health value, modify length of health bar

const playerHealthBar = document.querySelector('.playerhr');
const enemyHealthBar = document.querySelector('.enemyhr');

let x = prompt("Health of player? ");

playerHealthBar.style.width = `${x}px`;
console.log(playerHealthBar.style.width)

////////////testing animation
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("playerfight");
  var element = document.getElementById("myEnemy");
  element.classList.toggle("enemyfight");
}


/// testing board


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', alertValue);
}

function alertValue(event) {
  const buttonValue = event.target.value;
  console.log(buttonValue);
  var firstUp = buttonValue;
  valArr.push(buttonValue);
}


//  testing board ends
