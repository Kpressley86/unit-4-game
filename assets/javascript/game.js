$(document).ready(function () {

    function run(game) {
        $(".char-box").on("click", game, game.setupFight);
        $("#attack").on("click", game, game.fight);
        $("#start").hide();
        $("#start").on("click", game, game.start);
      }
      
      //
      // Game class
      //
      class Game {
        constructor() {
          this.player = null;      // player's character name
          this.enemy = null;       // enemy's character name
          this.attacker = null;    // player in the fight section
          this.defender = null;    // enemy in the fight section
          this.numAttacks = 0;     // the number of attacks
          this.isOver = false;     // game status boolean
          this.charBoxes = [];     // save removed character boxes  
        }
      
        //
        // fight setup through a user character selections 
        //
        setupFight(event) {
          let section_name = $(this).parent().attr("id");
          console.log($(this).attr("id") + " is clicked on");
          console.log("parent: " + $(this).parent().attr("id"));
      
          // All character boxes are at top initially  
          if (section_name === 'initial-row') {
            event.data.player = $(this).attr("id");
            console.log("You: " + $(this).attr("id") + " is selected");
            $(this).addClass("char-box-you");
            $(this).appendTo("#you");
            $("#initial-row > .char-box").addClass("char-box-enemy");
            $("#initial-row > .char-box").appendTo("#enemy-section");
          }
          // Character elements in the Enemy section
          else if (section_name === 'enemy-section') {
            if (!event.data.enemy) {
              event.data.enemy = $(this).attr("id");
              console.log("Enemy " + $(this).attr("id") + " is selected");
              $(this).addClass("char-box-defender");
              $(this).appendTo("#defender-section");
              event.data.clearMsg();
            }
          }
          // user can move the enemy defender back to the Enemy section
          else if (section_name === 'defender-section') {
            console.log("Enemy " + $(this).attr("id") + " is removed from the defender-section");
            $(this).removeClass("char-box-defender");
            $(this).addClass("char-box-enemy");
            $(this).appendTo("#enemy-section");
            event.data.enemy = null;
            event.data.defender = null;
          }
        }
      
        //
        // fight as a user clicks on the Attack button 
        // Fighter class keeps track of character data. 
        //
        fight(event) {
          let thisFight = event.data;
      
          if (thisFight.player && !thisFight.attacker) {
            thisFight.attacker = new Fighter(thisFight.player, 10, 1.0);
          }
          if (thisFight.enemy && !thisFight.defender) {
            thisFight.defender = new Fighter(thisFight.enemy, 10, 1.8);
          }
          if (!thisFight.attacker || !thisFight.defender || thisFight.isOver) {
            if (!thisFight.attacker) {
              $("#msg1").text("Please select your character");
            }
            else if (!thisFight.isOver && !thisFight.defender) {
              $("#msg1").text("Please select an enemy to attack");
            }
            return;
          }
      
          thisFight.numAttacks++;
          let damage = thisFight.attack();
          thisFight.displayMessage(damage);
      
          if (thisFight.defender.outOfHealthPoints()) {
            // detach and save it for restart 
            thisFight.charBoxes.push(thisFight.defender.elem.detach());
            thisFight.defender = null;
            thisFight.enemy = null;
          }
        }
      
        //
        // A facilitator function for fight()
        //
        attack() {
          let damage = this.attacker.ap * this.numAttacks;
          this.defender.healthPoints -= damage;
      
          if (!this.defender.outOfHealthPoints()) {
            this.attacker.healthPoints -= this.defender.cAp;
      
            if (this.attacker.outOfHealthPoints()) {
              this.isOver = true;
            }
          }
      
          return damage;
        }
      
        //
        // Display the game fighting status messages
        // game.isOver condition may be updated
        //
        displayMessage(damage) {
          this.clearMsg();
      
          // player defeated the enemy
          if (this.defender.outOfHealthPoints()) {
            if (this.remainingEnemies() === 0) { // No enemies left
              $("#msg1").text("You Won!!! GAME OVER!!!");
              $("#start").show();
              this.isOver = true;
            } else {
              $("#msg1").text(`You have defeated ${this.defender.name}. You can choose to fight another enemy.`);
            }
          }
          // player is out of the Health Point; i.e. lost
          else if (this.attacker.outOfHealthPoints()) {
            $("#msg1").text("You've been defeated. GAME OVER!!!");
            $("#start").show();
            this.isOver = true;
          }
          // still in fight
          else {
            $("#msg1").text(`You attacked ${this.defender.name} for ${damage} damage`);
            $("#msg2").text(`${this.defender.name} attacked you back for ${this.defender.cAp} damage`);
          }
        }
      
        //
        // Clear the game status messages at the bottom
        //
        clearMsg() {
          $("#msg1").text("");
          $("#msg2").text("");
        }
      
        //
        // The remaining number of enemies
        //
        remainingEnemies() {
          return $("#enemy-section > .char-box").length;
        }
      
        //
        // (re-)start the game
        //
        start(event) {
          let thisGame = event.data;
          ['player', 'enemy', 'attacker', 'defender'].forEach(function(e) {
            thisGame[e] = null;
          });
          thisGame.numAttacks = 0;
          thisGame.isOver = false;
          thisGame.clearMsg();
          $("#start").hide();
          thisGame.resetCharData();
        }
      
        //
        // facilitator function for start()
        //
        resetCharData() {
          for (let i = 0; i < this.charBoxes.length; i++) {
            this.charBoxes[i].appendTo($("#initial-row"));
          }
          $(".char-box").appendTo("#initial-row");
          $(".char-box").removeClass("char-box-you");
          $(".char-box").removeClass("char-box-enemy");
          $(".char-box").removeClass("char-box-defender");
          $(".char-box").addClass("char-box");
          $(".char-hp").each(function() {
            this.innerText = Math.floor(Math.random() * 70) + 100;
          });
        }
      }
      
      //
      // Character info as a fighter
      // Keeps track of
      // * Name
      // * Health Point
      // * Attack Power
      // * Counter Attack Power 
      //
      class Fighter {
        constructor(id, apMax = 10, cApFactor = 1.0) {
          this.elem = $(`#${id}`);
          this.name = $(`#${id} h3.char-name`).text();
          this.hp = $(`#${id} h3.char-hp`); // Health Point
          this.ap = this.attackPower(apMax);
          this.cAp = this.counterAttackPower(cApFactor);
        }
      
        attackPower(max = 10, base = 3) {
          return Math.floor(Math.random() * (max - base)) + base;
        }
      
        counterAttackPower(factor = 1.0) {
          return Math.floor(this.ap * factor);
        }
      
        outOfHealthPoints() {
          if (this.healthPoints < 0) {
            this.healthPoints = 0;
          }
          return (this.healthPoints === 0);
        }
      
        set healthPoints(point) {
          this.hp.text(point);
        }
      
        get healthPoints() {
          return parseInt(this.hp.text());
        }
      }


});