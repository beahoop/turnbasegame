<<<<<<< HEAD
//
// healthbar = player.healthbar


=======
/*
TO DO:
-

BONUS:
- Page size reactive, health bars squish together

*/
>>>>>>> 29f8e72 (Add notes)

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


const playerHealthBar = document.querySelector('.playerhr');
const enemyHealthBar = document.querySelector('.enemyhr');
let death = false;

function healthBarMath(healthBar, currentHealth, healthMax, healthIncrement, operation) {
  let newHealth;
  if (operation === "+") {
    newHealth = ((500 / healthMax) * currentHealth) + ((500 / healthMax) * healthIncrement);
  } else if (operation === "-") {
    newHealth = ((500 / healthMax) * currentHealth) - ((500 / healthMax) * healthIncrement);
  };
  // if (newHealth >= 0) {
  //   newHealth = 0;
  //   death = true;
  //   console.log("You died!")
  // } else {
  healthBar.style.width = `${newHealth}px`;
}

healthBarMath(playerHealthBar, 500, 500, 0, "-")
console.log(playerHealthBar.style.width)


// console.log(playerHealthBar.style.width)

///////////////////////////////ANIMATIONS
// HOW TO DIE:
//

// let x = prompt("Health of player? ");

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
//////////
enemy.health = 100;
enemy.attackPoints = 20;
enemy.username = "Bad Guy";
////////////////////////////////////
function fight() {
  var buttonWords = document.querySelector(".fightbtn");
  if (enemy.health < 1) {
    console.log(`${player.username} has won!`);
    endGameDisplay()
  }
  else if (player.health < 1) {
    console.log(`${enemy.username} has won...GAME OVER.`);
    endGameDisplay()
  }
  else if(buttonWords.innerHTML === "RELOAD!"){
      console.log(enemy.attackPoints);
    player.health = player.health - enemy.attackPoints;
    enemy.health = enemy.health - player.attackPoints;
    console.log('enemyhealth', enemy.username, enemy.health);
    console.log('playerAP', player.username, player.health);
  }
  else if(buttonWords.innerHTML === "FIGHT" )
  console.log("Reloading");
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
  if (enemy.health < 1) {
    //append this
    document.querySelector(".winner").innerText = `${player.username} has WON!`;
    console.log(`${enemy.username} has lost. ${player.username} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  } else if (player.health < 1) {
    document.querySelector(".winner").innerText = `${enemy.username} has beated you!... GAME OVER`;
    console.log("%c GAME OVER", "color:red");
    console.log(`${player.username} has lost. ${enemy.username} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  }
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
