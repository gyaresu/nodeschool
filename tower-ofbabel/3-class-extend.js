class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    if (character !instanceof Character) throw new Error('');
    character.health_ -= 10;
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  attack(character) {
    super.attack(character);
    character.health_ -= 5;
  }
}

/* Above here be dragons */

var util = require('util');

class Character {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  };
  damage() {
    super(x,y);
    this.health_ - 10;
  }
}
/* Below here be dragons */

var util = require('util');
var Character = function(x, y) {
  this.x = x;
  this.y = y;
  this.health_ = 100;
};

Character.prototype.damage = function() {
  this.health_ = this.health_ - 10;
};

Character.prototype.getHealth = function() {
  return this.health_;
};

Character.prototype.toString = function() {
  return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
};

var Player = function(x, y, name) {
  Character.call(this, x, y);
  this.name = name;
};

util.inherits(Player, Character);

Player.prototype.move = function(dx, dy){
  this.x += dx;
  this.y += dy;
};

Player.prototype.toString = function() {
  return "name: " + this.name + " " + Player.super_.prototype.toString.call(this);
};