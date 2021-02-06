//
// healthbar = player.healthbar


/*
TO DO:
-

BONUS:
- Page size reactive, health bars squish together

*/

user = prompt("Hello what is your username?")

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

function Player({color, size, health, healthBar, maxHealth, attackPoints, username = 'Computer'} = {}) {
    this.color = color,
    this.size = size,
    this.health = health,
    this.healthBar = healthBar,
    this.maxHealth = maxHealth,
    this.attackPoints = attackPoints,
    this.username = username;
};


const players = {
  gray: {
    healthBar: document.querySelector('.playerhr'),
    color: 'gray',
    size: 'small',
    health: 500,
    maxHealth: 500,
    attackPoints: 10,
    username: user,
  },
  red: {
    healthBar: document.querySelector('.playerhr'),
    color: 'red',
    size: 'large',
    health: 100,
    maxHealth: 100,
    attackPoints: 50,
    username: user,
  },
  green: {
    healthBar: document.querySelector('.playerhr'),
    color: 'green',
    size: 'med',
    health: 250,
    maxHealth: 250,
    attackPoints: 25,
    username: user,
  }
};
console.log("hi!");

function Enemy({ color = "brown",
size = "small",
health = 500,
maxHealth,
healthBar,
attackPoints = 10, username = 'Enemy'} = {})
{   this.e_color = color,
    this.e_size = size,
    this.e_health = health,
    this.e_healthBar = healthBar,
    this.e_attackPoints = attackPoints,
    this.e_username = username;
};



const enemy = {
  brown: {
    e_color: 'brown',
    e_size: 'small',
    e_health: 500,
    e_maxHealth: 500,
    e_attackPoints: 10,
    e_username: 'Eliminator!',
  },
<<<<<<< HEAD
  black: {
    e_color: 'black',
    e_size: 'large',
    e_health: 100,
    e_maxHealth: 100,
    e_attackPoints: 50,
    e_username: 'Extinguisher!',
=======
  gold: {
    color: 'gold',
    size: 'large',
    health: 100,
    attackPoints: 50,
    username: 'enemy2',
>>>>>>> enemy player box updates
  },
  yellow: {
    e_color: 'yellow',
    e_size: 'med',
    e_health: 250,
    e_maxHealth: 250,
    e_attackPoints: 25,
    e_username: 'Exterminator!',
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
<<<<<<< HEAD
    var computerPlayerStats = enemy[Object.keys(enemy)[placeHolderRandomNo]];
    badguy = new Enemy(computerPlayerStats);
=======
     var computerPlayerStats = enemy[Object.keys(enemy)[placeHolderRandomNo]];
//    myEnemy= enemy[Object.keys(enemy)[placeHolderRandomNo]];

>>>>>>> enemy player box updates
    console.log(computerPlayerStats);
    console.log(placeHolderRandomNo);
    console.log(badguy);
  }
};

<<<<<<< HEAD
=======






>>>>>>> enemy player box updates
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

///////////////////////////////ANIMATIONS
// HOW TO DIE:
//

// let x = prompt("Health of player? ");

function myFunction() {
  var element = document.getElementById("myDiv");
  element.classList.toggle(player.color + "fight");
  var elementTwo = document.getElementById("myEnemy");
  elementTwo.classList.toggle(badguy.e_color + "fight");
  var buttonWords = document.querySelector(".fightbtn");
  if (buttonWords.innerHTML === "FIGHT") {
    buttonWords.innerHTML = "RELOAD!";
  } else {
    buttonWords.innerHTML = "FIGHT";
  }
  fight()
};
//////////
// enemy.health = 100;
// enemy.attackPoints = 20;
// enemy.username = "Bad Guy";
////////////////////////////////////
function fight() {
  var buttonWords = document.querySelector(".fightbtn");
  if (badguy.e_health < 1) {
    console.log(`${player.username} has won!`);
    endGameDisplay()
  }
  else if (player.health < 1) {
    console.log(`${badguy.e_username} has won...GAME OVER.`);
    endGameDisplay()
  }
  else if(buttonWords.innerHTML === "RELOAD!"){
    console.log(badguy.e_attackPoints);
    player.health = player.health - badguy.e_attackPoints;
    badguy.e_health = badguy.e_health - player.attackPoints;
    healthBarMath(badguy, badguy.e_attackPoints, "-");
    healthBarMath(player, player.attackPoints, "-");
    console.log('badguyhealth', badguy.e_username, badguy.e_health);
    console.log('playerhealth', player.username, player.health);
  } else if(buttonWords.innerHTML === "FIGHT") {
    console.log("Reloading");
  }
};
////////////////////////////////HANDLEBARS

const generateOrgs = (data) => {
  const source = document.getElementById("game").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.getElementById("gamediv").innerHTML = html;
};
///////////////////////////////////
function endGameDisplay() {
  if (badguy.e_health < 1) {
    //append this
    document.querySelector(".winner").innerText = `${player.username} has WON!`;
    console.log(`${badguy.e_username} has lost. ${player.username} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  } else if (player.health < 1) {
    document.querySelector(".winner").innerText = `${badguy.e_username} has beated you!... GAME OVER`;
    console.log("%c GAME OVER", "color:red");
    console.log(`${player.username} has lost. ${badguy.e_username} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  }
};




//  testing board ends



//////////// deal with player health value, modify length of health bar

// const playerHealthBar =
const enemyHealthBar = document.querySelector('.enemyhr');
let death = false;


function healthBarMath(character, healthIncrement, operation) {
  let newHealth;
  var healthBar = document.querySelector(".healthbar");
  if (operation === "+") {
    newHealth = ((500 / character.maxHealth) * character.health) + ((500 / character.maxHealth) * healthIncrement);
  } else if (operation === "-") {
    newHealth = ((500 / character.maxHealth) * character.health) - ((500 / character.maxHealth) * healthIncrement);
  };
  healthBar.style.width = `${newHealth}px`;
}

// function healthBar(character) {
//   healthbar = document.querySelector(".healthbar");
//    healthbar.style.width = `${character.health}px`;
// };


// console.log(playerHealthBar.style.width)
