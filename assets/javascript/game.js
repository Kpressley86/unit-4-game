$(document).ready(function () {

    // Game Variables //
    var player = {};
    var enemy = {};
    var playerChars = [nightmaremoon, wolverine, venom, juggernaut, pinkiepie, rainbowdash];
    var enemyDefeated = [];
    var playerActive = true;
    var enemyActive = true;
    var playerSelected = false;
    var enemySelected = false;

    // Character Variables //
    var nightmaremoon = new Character($("#nightmaremoon"), "Nightmare Moon", 1800, 120, 300);
    var wolverine = new Character($("#wolverine"), "Wolverine", 2200, 140, 450);
    var venom = new Character($("#venom"), "Venom", 2600, 110, 350);
    var juggernaut = new Character($("#juggernaut"), "Juggernaut", 1800, 150, 400)
    var pinkiepie = new Character($("#pinkiepie"), "Pinkie Pie", 1600, 150, 500);
    var rainbowdash = new Character($("#rainbowdash"), "Rainbow Dash", 1600, 150, 500);


    // Object Function //
    function Character(reference, name, hp, attack, defense) {
        this.reference = reference;
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;

        this.combat = function (enemy) {
            enemy.hp -= this.attack;
            if (enemy.hp <= 0) {
                this.attack += this.attack;
                return enemyActive = false;
            } else {
                this.attack += this.attack;
                this.hp -= enemy.defense;
                if (this.hp <= 0) {
                    return playerActive = false;
                }
                return enemyActive = true;
            }
        }
    }

    function statusText(object) {
        if (playerSelected === false || object === player) {
            if (object.hp <= 0) {
                $("#playerHealth").text("0");
            } else {
                $("#playerHealth").text(object.hp);
            }
            $("#playerName").text(object.name);
            $("#playerAttack").text(object.attack);
        } else if (playerSelected === true && enemySelected === false || object === enemy) {
            if (object.hp <= 0) {
                $("#enemyHealth").text("0");
            } else {
                $("#enemyHealth").text(object.hp);
            }
            $("#enemyName").text(object.name);
            $("#enemyDefense").text(object.defense);
        }
    }

    // Character and Enemy Select Functions //

    function charSelect() {
        for (let i = 0; i < playerChars.length; i++) {
            $(playerChars[i].reference).on("mouseover", function () {
                statusText(playerChars[i]);
            })
            $(playerChars[i].reference).on("click", function () {
                if (playerSelected === false) {
                    $("#player").attr("src", $(this).attr("src"));
                    $(this).addClass("char-banner-player");
                    player = {
                        ...playerChars[i]
                    };
                    playerSelected = true;
                } else if (playerSelected === true && enemySelected === false) {
                    if ($(this).attr("src") != $("#player").attr("src") && !enemyDefeated.includes(playerChars[i])) {
                        $("#enemy").attr("src", $(this).attr("src"));
                        $("#enemy").removeClass("char-selected-defeated");
                        $(this).addClass("char-banner-enemy");
                        enemy = {
                            ...playerChars[i]
                        };
                        enemySelected = true;
                        enemyActive = true;
                    }
                }
            })
        }
    }

    // Resetting the game //

    function reset() {

        playerActive = true;
        enemyActive = true;
        playerSelected = false;
        enemySelected = false;

        $("#player")
            .removeClass("char-selected-defeated")
            .attr("src", "./assets/images/venom2.gif");
        $("#enemy").attr("src", "./assets/images/pony5.gif");
        $(".char-banner").removeClass("char-banner-defeated char-banner-player char-banner-enemy");
        charSelect();
    }

    // Attack Function //

    function combatOnClick() {
        if (playerActive === true && enemyActive === true && enemySelected === true) {
            player.combat(enemy);
            statusText(enemy);
            statusText(player);
            if (playerActive === false) {
                $(player.reference).addClass("char-banner-defeated");
                $("#player").addClass("char-selected-defeated");

            } else if (enemyActive === false) {
                enemySelected = false;
                $(enemy.reference).addClass("char-banner-defeated");
                $("#enemy").addClass("char-selected-defeated");
                enemyDefeated.push(enemy);

                if (enemyDefeated.length != 4) {
                    charSelect();

                } else {
                    $("#enemy")
                        .removeClass("char-selected-defeated")
                        .attr("src", "assets/images/victory.png");

                }
            }
        }
    }

    // Attack Button //

    $("#attack-btn").on("click", function (event) {
        event.preventDefault();

        if (playerSelected === true && enemySelected === true) {
            combatOnClick();
        }
    });

    // Reset Button //

    $("#reset-btn").on("click", function (event) {
        event.preventDefault();
        reset();
    });

    charSelect();

});