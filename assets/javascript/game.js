$(document).ready(function () {

    // Game Variables //
    var player = {};
    var enemy = {};
    var heroArray = [juggernaut, wolverine, venom, nightmaremoon, pinkiepie, rainbowdash];
    var enemyDefeated = [];
    var heroActive = true;
    var enemyActive = true;
    var heroSelected = false;
    var enemySelected = false;

    // Character Variables //
    var juggernaut = new Character($("#juggernaut"), "Juggernaut", 5800, 480, 1200)
    var wolverine = new Character($("#wolverine"), "Wolverine", 6600, 420, 1350);
    var venom = new Character($("#venom"), "Venom", 7800, 330, 1050);
    var nightmaremoon = new Character($("#nightmaremoon"), "Nightmare Moon", 5400, 360, 900);
    var pinkiepie = new Character($("#pinkiepie"), "Pinkie Pie", 5700, 450, 1500);
    var rainbowdash = new Character($("#rainbowdash"), "Rainbow Dash", 4800, 390, 1650);


    // Object Function //
    function Character(charId, name, health, attack, counter) {
        this.reference = charId;
        this.name = name;
        this.hp = health;
        this.power = attack;
        this.defense = counter;

        this.fight = function (enemy) {
            enemy.hp -= this.attack;
            if (enemy.hp <= 0) {
                this.attack += this.attack;
                return enemyActive = false;
            } else {
                this.attack += this.attack;
                this.hp -= enemy.defense;
                if (this.hp <= 0) {
                    return heroActive = false;
                }
                return enemyActive = true;
            }
        }
    }

    function stats(object) {
        if (heroSelected === false || object === player) {
            if (object.hp <= 0) {
                $("#heroHealth").text("0");
            } else {
                $("#heroHealth").text(object.hp);
            }
            $("#heroName").text(object.name);
            $("#heroAttack").text(object.attack);
        } else if (heroSelected === true && enemySelected === false || object === enemy) {
            if (object.hp <= 0) {
                $("#enemyHealth").text("0");
            } else {
                $("#enemyHealth").text(object.hp);
            }
            $("#enemyName").text(object.name);
            $("#enemyDefense").text(object.defense);
        }
    }

    // Character and Enemy Selection Functions //

    function heroSelected() {
        for (let i = 0; i < heroArray.length; i++) {
            $(heroArray[i].reference).on("mouseover", function () {
                stats(heroArray[i]);
            })
            $(heroArray[i].reference).on("click", function () {
                if (heroSelected === true) {
                    $("heroArray[i].refrence").attr("#hero");
                    $(this).removeAttr("#heroSelectRow");
                    player = {
                        ...heroArray[i]
                    };
                    heroSelected = true;
                } else if (heroSelected === false && enemySelected === false) {
                    if ($(this).attr("src") != $("#hero").attr("src") && !enemyDefeated.includes(heroArray[i])) {
                        $("#enemy").attr("src", $(this).attr("src"));
                        $("#enemy").removeClass("enemy1");
                        $(this).addClass("");
                        enemy = {
                            ...heroArray[i]
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

        heroActive = true;
        enemyActive = true;
        heroSelected = false;
        enemySelected = false;

        $("#player")
            .removeClass("char-selected-defeated")
            .attr("src", "./assets/images/venom2.gif");
        $("#enemy").attr("src", "./assets/images/pony5.gif");
        $(".char-banner").removeClass("char-banner-defeated char-banner-player char-banner-enemy");
        heroSelected();
    }

    // Attack Function //

    function fightOnClick() {
        if (heroActive === true && enemyActive === true && enemySelected === true) {
            player.fight(enemy);
            stats(enemy);
            stats(player);
            if (heroActive === false) {
                $(player.reference).addClass("char-banner-defeated");
                $("#player").addClass("char-selected-defeated");

            } else if (enemyActive === false) {
                enemySelected = false;
                $(enemy.reference).addClass("char-banner-defeated");
                $("#enemy").addClass("char-selected-defeated");
                enemyDefeated.push(enemy);

                if (enemyDefeated.length != 4) {
                    heroSelected();

                } else {
                    $("#enemy")
                        .removeClass("char-selected-defeated")

                }
            }
        }
    }

    // Attack Button //

    $("#attack-btn").on("click", function (event) {
        event.preventDefault();

        if (heroSelected === true && enemySelected === true) {
            fightOnClick();
        }
    });

    // Reset Button //

    $("#reset-btn").on("click", function (event) {
        event.preventDefault();
        reset();
    });

    heroSelected();

});