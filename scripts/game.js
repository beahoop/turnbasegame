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

player.health

const players = {
  purple: {
    color: 'purple',
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

const purpleButton = document.querySelector('.purple');
purpleButton.addEventListener('click', selectPlayer);
const redButton = document.querySelector('.red');
redButton.addEventListener('click', selectPlayer);
const greenButton = document.querySelector('.green');
greenButton.addEventListener('click', selectPlayer);


////////////testing animation
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("playerfight");
  var element = document.getElementById("myEnemy");
  element.classList.toggle("enemyfight");
}
