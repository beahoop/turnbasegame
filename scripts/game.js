//
// healthbar = player.healthbar



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

function Player({color, size, health, attackPoints, username = 'Computer'} = {})
{   this.color = color,
    this.size = size,
    this.health = health,
    this.attackPoints = attackPoints,
    this.username = username;
};


const players = {
  gray: {
    color: 'gray',
    size: 'small',
    health: 500,
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
console.log("hi!");

function Enemy({ color = "brown",
size = "small",
health = 500,
attackPoints = 10, username = 'Enemy'} = {})
{   this.color = color,
    this.size = size,
    this.health = health,
    this.attackPoints = attackPoints,
    this.username = username;
};



const enemy = {
  brown: {
    color: 'brown',
    size: 'small',
    health: 500,
    attackPoints: 10,
    username: 'enemy1',
  },
  black: {
    color: 'black',
    size: 'large',
    health: 100,
    attackPoints: 50,
    username: 'enemy2',
  },
  yellow: {
    color: 'yellow',
    size: 'med',
    health: 250,
    attackPoints: 25,
    username: 'enemy3',
  }
};

var nums = [0, 1, 2]; // number of color possiblities
var gen_nums = []; // place holder for previous pick possiblities...
// this array prevents previous pics..
function in_array(array, el) {
  for (var i = 0; i < array.length; i++)
    if (array[i] == el) return true;
  return false;
};

function get_rand(array) {
  var rand = array[Math.floor(Math.random() * array.length)];
  if (!in_array(gen_nums, rand)) {
    gen_nums.push(rand);
    return rand;
  }
  return get_rand(array);
};

for (var i = 0; i < 1; i++) {
  if (i < 1) {
    var placeHolderRandomNo = (get_rand(nums));
    var computerPlayerStats = enemy[Object.keys(enemy)[placeHolderRandomNo]];
    console.log(computerPlayerStats);
    console.log(placeHolderRandomNo);
  }
};


let player;
let getPlayer;

const selectPlayer = (event) => {
  const selection = event.target.value;
  player = new Player(players[selection]);
  console.log("hi");
  generateOrgs(player);
  console.log(player);
};

const grayButton = document.querySelector('.gray');
grayButton.addEventListener('click', selectPlayer);
const redButton = document.querySelector('.red');
redButton.addEventListener('click', selectPlayer);
const greenButton = document.querySelector('.green');
greenButton.addEventListener('click', selectPlayer);

//////////// deal with player health value, modify length of health bar

// const playerHealthBar = document.querySelector('.playerhr');
// const enemyHealthBar = document.querySelector('.enemyhr');
//
// function healthBarMath(healthBar, healthMax, healthIncrement) {
//   newHealth = currentHealth - ((250 / healthMax) * healthIncrement)
//   healthBar.style.width = `${newHealth}px`;
// }

// let x = prompt("Health of player? ");


// console.log(playerHealthBar.style.width)

///////////////////////////////ANIMATIONS
function myFunction() {
  var element = document.getElementById("myDiv");
  element.classList.toggle(player.color + "fight");
  var elementTwo = document.getElementById("myEnemy");
  elementTwo.classList.toggle("enemyfight");
  var buttonWords = document.querySelector(".fightbtn");
  if (buttonWords.innerHTML === "FIGHT") {
    buttonWords.innerHTML = "RELOAD!";
  } else {
    buttonWords.innerHTML = "FIGHT";
  }
  fight()
};
////////////////////////////////////
function fight() {
  enemy.health = enemy.health - player.attackPoints;
  console.log('enemyhealth',enemy.health);
  console.log('playerAP',player.attackPoints);
}
////////////////////////////////HANDLEBARS

const generateOrgs = (data) => {
  const source = document.getElementById("game").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.getElementById("gamediv").innerHTML = html;
};


/// testing board

//
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', alertValue);
// }
//
// function alertValue(event) {
//   const buttonValue = event.target.value;
//   console.log(buttonValue);
//   var firstUp = buttonValue;
//   valArr.push(buttonValue);
// }


//  testing board ends
