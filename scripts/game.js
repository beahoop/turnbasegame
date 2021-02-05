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
  gray: {
    color: 'gray',
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
let getPlayer;

const selectPlayer = (event) => {
  const selection = event.target.value;
  player = new Player(players[selection]);
  generateOrgs(player);
  // localStorage.setItem('selectedPlayer', JSON.stringify(player));
  console.log(player);
};

const grayButton = document.querySelector('.gray');
grayButton.addEventListener('click', selectPlayer);
const redButton = document.querySelector('.red');
redButton.addEventListener('click', selectPlayer);
const greenButton = document.querySelector('.green');
greenButton.addEventListener('click', selectPlayer);

//////////// deal with player health value, modify length of health bar

const playerHealthBar = document.querySelector('.playerhr');
const enemyHealthBar = document.querySelector('.enemyhr');

// let x = prompt("Health of player? ");

playerHealthBar.style.width = `${x}px`;
console.log(playerHealthBar.style.width)

////////////testing animation
function myFunction() {
  var element = document.getElementById("myDiv");
  element.classList.toggle(player.color+"fight");
  var buttonWords = document.querySelector(".fightbtn");
 if (buttonWords.innerHTML === "FIGHT") {
   buttonWords.innerHTML = "RELOAD!";
 } else {
   buttonWords.innerHTML = "FIGHT";
 }
  // var element = document.getElementById("myEnemy");
  // element.classList.toggle("enemyfight");
}
////////////////////////////////

const generateOrgs = (data) => {
  const source = document.getElementById("game").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.getElementById("gamediv").innerHTML = html;
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
