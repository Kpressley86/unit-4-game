$(document).ready(function () {

    // VARIABLES //
    var players = [midnight = {
        name: "Midnight Moon",
        healthPoints: 220,
        initialAttackPower: 8,
        attackPower: 8,
        counterAttackPower: 2,
        isPlayerOne: false,
        isPlayerTwo: false,
    },
    wolverine = {
        name: "Wolverine",
        healthPoints: 200,
        initialAttackPower: 9,
        attackPower: 9,
        counterAttackPower: 5,
        isPlayerOne: false,
        isPlayerTwo: false,
    },
    juggernaut = {
        name: "Juggernaut",
        healthPoints: 250,
        initialAttackPower: 2,
        attackPower: 2,
        counterAttackPower: 20,
        isPlayerOne: false,
        isPlayerTwo: false,
    },
    venom = {
        name: "Venom",
        healthPoints: 280,
        initialAttackPower: 8,
        attackPower: 2,
        counterAttackPower: 25,
        isPlayerOne: false,
        isPlayerTwo: false,
    },
    pinkie = {
        name: "Pinkie Pie",
        healthPoints: 270,
        initialAttackPower: 1,
        attackPower: 7,
        counterAttackPower: 15,
        isPlayerOne: false,
        isPlayerTwo: false,
    },
    rainbow = {
        name: "Rainbow Bright",
        healthPoints: 230,
        initialAttackPower: 3,
        attackPower: 3,
        counterAttackPower: 20,
        isPlayerOne: false,
        isPlayerTwo: false,
    }]

    var player;
    var opponent;
    playerOneSelected = false;
    playerTwoSelected = false;
    gameStart = false;
    var enemiesRemaining = players.length - 1;
    playerSelect();
    startBattle();


    // SELECTING HERO //
    function playerSelect() {
        $("#midnight").on("click", function () {
            if (playerOneSelected === false) {
                $("#midnight").appendTo("#player-fight-area");
                $("#player-name").text(midnight.name);
                $("#player-total-hp").text(midnight.healthPoints);
                playerOneSelected = true;
                midnight.isPlayerOne = true;
                player = midnight;
                $("#midnight").addClass('flipped');
                setTimeout(enemySelect, 1000 * 2);
            }
        });

        $("#wolverine").on("click", function () {
            if (playerOneSelected === false) {
                $("#wolverine").appendTo("#player-fight-area");
                $("#player-name").text(wolverine.name);
                $("#player-total-hp").text(wolverine.healthPoints);
                playerOneSelected = true;
                wolverine.isPlayerOne = true;
                player = wolverine;
                setTimeout(enemySelect, 1000 * 2);
            }
        });

        $("#juggernaut").on("click", function () {
            if (playerOneSelected === false) {
                $("#juggernaut").appendTo("#player-fight-area");
                $("#player-name").text(juggernaut.name);
                $("#player-total-hp").text(juggernaut.healthPoints);
                $("#player-total-hp").text(juggernaut.healthPoints);
                playerOneSelected = true;
                juggernaut.isPlayerOne = true;
                player = juggernaut;
                setTimeout(enemySelect, 1000 * 2);
            }
        });

        $("#venom").on("click", function () {
            if (playerOneSelected === false) {
                $("#venom").appendTo("#player-fight-area");
                $("venom").addClass('flipped');
                $("#player-name").text(venom.name);
                $("#player-total-hp").text(venom.healthPoints);
                playerOneSelected = true;
                venom.isPlayerOne = true;
                player = venom;
                setTimeout(enemySelect, 1000 * 2);
            }
        });

        $("#pinkie").on("click", function () {
            if (playerOneSelected === false) {
                $("#pinkie").appendTo("#player-fight-area");
                $("pinkie").addClass('flipped');
                $("#player-name").text(pinkie.name);
                $("#player-total-hp").text(pinkie.healthPoints);
                playerOneSelected = true;
                pinkie.isPlayerOne = true;
                player = pinkie;
                setTimeout(enemySelect, 1000 * 2);
            }
        });

        $("#rainbow").on("click", function () {
            if (playerOneSelected === false) {
                $("#rainbow").appendTo("#player-fight-area");
                $("rainbow").addClass('flipped');
                $("#player-name").text(rainbow.name);
                $("#player-total-hp").text(rainbow.healthPoints);
                playerOneSelected = true;
                rainbow.isPlayerOne = true;
                player = rainbow;
                $("#rainbow").addClass('flipped');
                setTimeout(enemySelect, 1000 * 2);
            }
        });
    }

    // SELECTING ENEMY //
    function enemySelect() {
        $("#select-text").text("☠ Select your Opponent ☠");

        $("#midnight").on("click", function () {
            if (playerTwoSelected === false && midnight.isPlayerOne === false) {
                $("#midnight").appendTo("#opponent-fight-area");
                $("#opponent-name").text(midnight.name);
                $("#opponent-total-hp").text(midnight.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = midnight;
                $("#select-text").text("");
            }
        });

        $("#wolverine").on("click", function () {
            if (playerTwoSelected === false && wolverine.isPlayerOne === false) {
                $("#wolverine").appendTo("#opponent-fight-area");
                $("#opponent-name").text(wolverine.name);
                $("#opponent-total-hp").text(wolverine.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = wolverine;
                $("#wolverine").addClass('flipped');
                $("#select-text").text("");
            }
        });

        $("#juggernaut").on("click", function () {
            if (playerTwoSelected === false && juggernaut.isPlayerOne === false) {
                $("#juggernaut").appendTo("#opponent-fight-area");
                $("#opponent-name").text(juggernaut.name);
                $("#opponent-total-hp").text(juggernaut.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = juggernaut;
                $("#juggernaut").addClass('flipped');
                $("#select-text").text("");
            }
        });

        $("#venom").on("click", function () {
            if (playerTwoSelected === false && venom.isPlayerOne === false) {
                $("#venom").appendTo("#opponent-fight-area");
                $("#opponent-name").text(venom.name);
                $("#opponent-total-hp").text(venom.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = venom;
                $("#venom").addClass('flipped');
                $("#select-text").text("");
            }
        });

        $("#pinkie").on("click", function () {
            if (playerTwoSelected === false && pinkie.isPlayerOne === false) {
                $("#pinkie").appendTo("#opponent-fight-area");
                $("#opponent-name").text(pinkie.name);
                $("#opponent-total-hp").text(pinkie.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = pinkie;
                $("#pinkie").addClass('flipped');
                $("#select-text").text("");
            }
        });

        $("#rainbow").on("click", function () {
            if (playerTwoSelected === false && rainbow.isPlayerOne === false) {
                $("#rainbow").appendTo("#opponent-fight-area");
                $("#opponent-name").text(rainbow.name);
                $("#opponent-total-hp").text(rainbow.healthPoints);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = rainbow;
                $("#select-text").text("");
            }
        });
    }

    // GAME PROGRESS //
    function checkProgress() {
        if (enemiesRemaining === 0) {
            gameWin();
        }
        else {
            gameStart = false;
            $("#opponent-fight-area").empty();
            $("#opponent-name").text("");
            $("#opponent-total-hp").text("");
            setTimeout(function () { playerTwoSelected = false }, 1000 * 2.8);
            setTimeout(function () { $("#select-text").text("☠ Select your Opponent ☠") }, 1000 * 1);
        }
    }

    // HEALTH FUNCTIONS //
    function attack() {
        opponent.healthPoints = opponent.healthPoints - player.attackPower;
        $("#opponent-total-hp").text(opponent.healthPoints);
    }

    function counterAttack() {
        player.healthPoints = player.healthPoints - opponent.counterAttackPower;
        $("#player-total-hp").text(player.healthPoints);
        if (player.healthPoints <= 0) {
            gameLose();
        }
    }

    // INCREASE POWER FUNCTION //
    function increaseAttackPower() {
        player.attackPower = player.attackPower + player.initialAttackPower;
    }

    // RESET FUNCTION //
    function gameReset() {
        [midnight = {
            name: "Midnight Moon",
            healthPoints: 220,
            initialAttackPower: 8,
            attackPower: 8,
            counterAttackPower: 2,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        wolverine = {
            name: "Wolverine",
            healthPoints: 200,
            initialAttackPower: 9,
            attackPower: 9,
            counterAttackPower: 5,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        juggernaut = {
            name: "Juggernaut",
            healthPoints: 250,
            initialAttackPower: 2,
            attackPower: 2,
            counterAttackPower: 20,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        venom = {
            name: "Venom",
            healthPoints: 280,
            initialAttackPower: 1,
            attackPower: 1,
            counterAttackPower: 25,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        pinkie = {
            name: "Pinkie Pie",
            healthPoints: 270,
            initialAttackPower: 1,
            attackPower: 7,
            counterAttackPower: 15,
            isPlayerOne: false,
            isPlayerTwo: false,
        },
        rainbow = {
            name: "Rainbow Bright",
            healthPoints: 230,
            initialAttackPower: 3,
            attackPower: 3,
            counterAttackPower: 20,
            isPlayerOne: false,
            isPlayerTwo: false,
        }]

        playerOneSelected = false;
        playerTwoSelected = false;
        enemiesRemaining = players.length - 1;
        $("#select-text").text("☠ Select your Character ☠")
        $("#game-end-container").html("");
        $("#game-end-text-container").html("");
        $("#opponent-name").text("");
        $("#player-name").text("");
        $("#player-total-hp").text("");
        $("#opponent-total-hp").text("");
        $("#player-fight-area").html("");
        $("#opponent-fight-area").html("");
        $(".character-selection-section").html("");
        $("<img class ='character' id='juggernaut' src = './assets/images/jugger.gif'/>").appendTo(".character-selection-section");
        $("<img class ='character' id='wolverine' src = './assets/images/wolverine.gif'/>").appendTo(".character-selection-section");
        $("<img class ='character' id='venom' src = './assets/images/venom.gif' />").appendTo(".character-selection-section");
        $("<img class ='character' id='midnight' src = './assets/images/pony1.gif'/>").appendTo(".character-selection-section");
        $("<img class ='character' id='pinkie' src = './assets/images/pony2.gif'/>").appendTo(".character-selection-section");
        $("<img class ='character' id='rainbow' src = './assets/images/pony3.gif'/>").appendTo(".character-selection-section");
        playerSelect();
    }

    // WIN //
    function gameWin() {
        $("#opponent-total-hp").text(0);
        gameStart = false;
        $("#game-end-text-container").html("Victory is yours!");
        $("#game-end-text-container").css({
            "color": "red", "font-size": "30px", "font-family": "Trade Winds",
            "position": "absolute", "left": "50%", "margin-right": "-50%", "transform": "translate(-50%)",
            "text-shadow": "2px 2px 2px rgba(255,255,255,.6)"
        });
        setTimeout(gameReset, 1000 * 5);
    }

    // LOSE //
    function gameLose() {
        $("#player-total-hp").text(0);
        gameStart = false;
        $("#game-end-text-container").html("Game Over!");
        $("#game-end-text-container").css({
            "color": "red", "font-size": "30px", "font-family": "Trade Winds",
            "position": "absolute", "left": "50%", "margin-right": "-50%", "transform": "translate(-50%)",
            "text-shadow": "2px 2px 2px rgba(255,255,255,.6)"
        });
        setTimeout(gameReset, 1000 * 5);
    }
    // ATTACK BUTTON FUNCTION //
    function startBattle() {
        $("#attack-button").on("click", function () {
            if (gameStart === true) {
                attack();
                increaseAttackPower();
                if (opponent.healthPoints <= 0) {
                    enemiesRemaining--;
                    checkProgress();
                }
                else {
                    counterAttack();
                }
            }
        });
    }
});


 // HEALTH BAR //

//  function move() {
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }


//   // Color change on % //
// $if(bi(level) > 90, #00FF00, bi(level) > 70, #22AA00, bi(level)
// > 50, #999900, #FF4400)$
