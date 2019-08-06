//

var contadorDeath = 0;
var contadorWin = 0;

let cotainerScoreGame = document.querySelector('.container-score-game');

let gameScore = document.createElement('span');
gameScore.classList.add('score-game');
gameScore.textContent = `Score: ${contadorWin}`;

let totalDeaths = document.createElement('span');
totalDeaths.classList.add('total-deaths');
totalDeaths.textContent = `Death: ${contadorDeath}`;

cotainerScoreGame.appendChild(gameScore);
cotainerScoreGame.appendChild(totalDeaths);

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 5;
    this.speed = speed;
    this.step = 101;
    this.limit = this.step * 5;
    this.reset = this.step;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.limit) {
        this.x += this.speed * dt;
    }
    else {
        this.x = -this.reset;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

class Hero {
    // Defining Hero Positions
    constructor() {
        this.step = 100;
        this.jump = 88;
        this.startY = (this.jump * 4) + 55;
        this.startX = this.step * 2;
        this.x = this.startX;
        this.y = this.startY;
        this.sprite = 'images/char-horn-girl.png';
    }

    // Here we start the game again if the hero wins or loses

    resetHero() {
        this.x = this.startX;
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Keyboard and tray movements

    handleInput(input) {
        if(input === 'left') {
            if(this.x > 0) {
                this.x -= this.step;
            }
        }
        
        if(input === 'right') {
            if(this.x < this.step * 4) {
                this.x += this.step;
            }
        }

        if(input === 'up') {
            if(this.y > 0) {
                this.y -= this.jump;
            }
        }

        if(input === 'down') {
            if(this.y < this.jump * 4) {
                this.y += this.jump;
            }
        }
    }

    // Movements of each enemy
    update() {
        for(let enemy of allEnemies) {
            if(parseInt((enemy.x) + 50) >= this.x && parseInt(enemy.x) <= this.x) {
                if(this.y == enemy.y) {
                    alert('Game over');
                    this.resetHero();
                    contadorDeath++;
                    totalDeaths.textContent = `Death: ${contadorDeath}`;
                }
            }
        }
        
        if(this.y == -33) {
            
            setTimeout(function() {
                alert(`You win!`);
            }, 50);
            this.resetHero();
            contadorWin++;
            gameScore.textContent = `Score: ${contadorWin}`;
        }
    }
}

// Here we are instantiating the Hero and the Enemies.
// We have several enemies with different positions and speed.

let player = new Hero();
let enemy01 = new Enemy(-100, 50, 100);
let enemy02 = new Enemy(-250, 138, 150);
let enemy03 = new Enemy(0, 226, 400);
let enemy04 = new Enemy(50, 50, 180);
let enemy05 = new Enemy(-250, 138, 300);

// All enemies have been placed in an array

var allEnemies = [];
allEnemies.push(enemy01, enemy02, enemy03, enemy04, enemy05);