$(document).ready(function () {

    // Declare Global Variables for Game Flow
    var charSelected = false;
    var yourChar;

    var enemySelected = false;
    var yourEnemy;
    var enemyName;
    var readyToAttack = false;

    var bodyCount = 0;



    // Declare Global Variables for Character Attributes
    var yourHealth;
    var enemyHealth;

    // Enemy Counter Attacks
    var enemyAttack;
    var juggernautCountAttack = 12;
    var wolverineCountAttack = 9;
    var venomCountAttack = 17;
    var nightmaremoonCountAttack = 21;
    var pinkiepieCounterAttack = 19;
    var rainbowdashCounterAttack = 11;

    // Your Base Attacks
    var yourAttack = 0;
    var yourBaseAttack;
    var juggernautBaseAttack = 8;
    var wolverineBaseAttack = 20;
    var venomBaseAttack = 6;
    var nightmaremoonBaseAttack = 9;
    var pinkiepieBaseAttack = 13;
    var rainbowdashBaseAttack = 16;



    // Move Characters to Enemy Div on Selection of your character
    $(".stats_card").on("click", function () {
        if (charSelected == false) {

            // Remove any old Battle commentary
            $('.commented').remove()

            // Blindly move all characters to enemy
            $("#juggernaut").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#wolverine").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#venom").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#nightmaremoon").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#pinkiepie").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#rainbowdash").appendTo("#enemy_list").addClass("enemy_stats_card");


            // Move selected character back to your div
            $(this).removeClass("enemy_stats_card").addClass("your_stats_card").appendTo("#char_list");


            // Collect id of your character and attributes
            yourChar = this.id;
            yourHealth = $(this).attr('value');


            // Set your base attack
            if (yourChar == 'juggernaut') {
                yourBaseAttack = juggernautBaseAttack;
            }
            if (yourChar == 'wolverine') {
                yourBaseAttack = wolverineBaseAttack;
            }
            if (yourChar == 'venom') {
                yourBaseAttack = venomBaseAttack;
            }
            if (yourChar == 'nightmaremoon') {
                yourBaseAttack = nightmaremoonBaseAttack;
            }
            if (yourChar == 'pinkiepie') {
                yourBaseAttack = pinkiepieBaseAttack;
            }
            if (yourChar == 'rainbowdash') {
                yourBaseAttack = rainbowdashBaseAttack;
            }


            // Change global variable and return
            charSelected = true;
            return;
        }
    });




    // Move selected Enemy to Defender Div
    $(".stats_card").on("click", function () {
        if (this.id != yourChar && enemySelected == false) {

            // Move enemy to defend area
            $(this).appendTo("#defend_list").removeClass('enemy_stats_card').addClass('defender_stats_card');

            // Collect id of your enemy and attributes
            yourEnemy = this.id;
            enemyHealth = $(this).attr('value');

            // Remove any old Battle commentary
            $('.commented').remove();

            // Change global variable and return
            enemySelected = true;
            readyToAttack = true;
            return;
        }

    });




    // Begin the battle
    $("#attack").on("click", function () {

        if (readyToAttack) {

            // Test you and defender are alive
            if (yourHealth > 0 && enemyHealth > 0) {

                // Remove any old Battle commentary
                $('.commented').remove();


                // Increment your attack
                yourAttack += yourBaseAttack;


                // Determine Enemy Counter Attack
                if (yourEnemy == 'juggernaut') {
                    enemyAttack = juggernautCountAttack;
                }
                if (yourEnemy == 'wolverine') {
                    enemyAttack = wolverineCountAttack;
                }
                if (yourEnemy == 'venom') {
                    enemyAttack = venomCountAttack;
                }
                if (yourEnemy == 'nightmaremoon') {
                    enemyAttack = nightmaremoonCountAttack;
                }
                if (yourEnemy == 'pinkiepie') {
                    enemyAttack = pinkiepieCountAttack;
                }
                if (yourEnemy == 'rainbowdash') {
                    enemyAttack = rainbowdashCountAttack;
                }


                // Battle Logic
                yourHealth = yourHealth - enemyAttack;
                enemyHealth = enemyHealth - yourAttack;


                // Play Light Saber sound
                saberSound.play();


                // Change Enemy Stats on screen
                if (yourEnemy == 'juggernaut') {
                    $('#juggernautHp').html(enemyHealth);
                    enemyName = "Juggernaut";
                }
                if (yourEnemy == 'wolverine') {
                    $('#wolverineHp').html(enemyHealth);
                    enemyName = "Wolverine";
                }
                if (yourEnemy == 'venom') {
                    $('#venomHp').html(enemyHealth);
                    enemyName = "Venom";
                }
                if (yourEnemy == 'nightmaremoon') {
                    $('#nightmaremoonHp').html(enemyHealth);
                    enemyName = "Nightmare Moon";
                }
                if (yourEnemy == 'pinkiepie') {
                    $('#pinkiepieHp').html(enemyHealth);
                    enemyName = "Pinkie Pie";
                }
                if (yourEnemy == 'rainbowdash') {
                    $('#rainbowdashHp').html(enemyHealth);
                    enemyName = "Rainbow Dash";
                }


                // Change Your Stats on screen
                if (yourChar == 'juggernaut') {
                    $('#juggernautHp').html(yourHealth);
                }
                if (yourChar == 'wolverine') {
                    $('#wolverineHp').html(yourHealth);
                }
                if (yourChar == 'venom') {
                    $('#venomHp').html(yourHealth);
                }
                if (yourChar == 'nightmaremoon') {
                    $('#nightmaremoonHp').html(yourHealth);
                }
                if (yourChar == 'pinkiepie') {
                    $('#pinkiepieHp').html(yourHealth);
                }
                if (yourChar == 'rainbowdash') {
                    $('#rainbowdashHp').html(yourHealth);
                }


                // Display battle commentary
                $('#battle_comments').append("<p class = 'commented'>You attacked " + "<span class = inline_bold>" + enemyName + "</span>" + " for " + "<span class = inline_bold>" + yourAttack + "</span>" + " damage.</p>");
                $('#battle_comments').append("<p class = 'commented'>" + enemyName + " attacked <span class = inline_bold>you</span> back for " + "<span class = inline_bold>" + enemyAttack + "</span>" + " damage.</p>");

            }

            // Lose - you are dead
            if (yourHealth <= 0) {

                // Remove any old Battle commentary
                $('.commented').remove();

                // Display loser message
                $('#battle_comments').append("<p>You have been defeated... Game Over!</p>");
                $('#battle_comments').append("<button id = 'restart'>Try Again!</button>");

                // Restart the page for loss
                $("#restart").on("click", function () {
                    location.reload();
                });

                // Change global variable and return
                readyToAttack = false;
                return;

            }

            // Win - defender is dead
            if (enemyHealth <= 0) {

                // Increment the body count
                bodyCount += 1;


                // Remove any old Battle commentary
                $('.commented').remove();


                // Hide the dead body...
                if (yourEnemy == 'juggernaut') {
                    $('#juggernaut').addClass('hide_dead_enemy');
                    enemyName = "Juggernaut";
                }
                if (yourEnemy == 'wolverine') {
                    $('#wolverine').addClass('hide_dead_enemy');
                    enemyName = "Wolverine";
                }
                if (yourEnemy == 'venom') {
                    $('#venom').addClass('hide_dead_enemy');
                    enemyName = "Darth venomous";
                }
                if (yourEnemy == 'nightmaremoon') {
                    $('#nightmaremoon').addClass('hide_dead_enemy');
                    enemyName = "Darth nightmaremoon";
                }
                if (yourEnemy == 'pinkiepie') {
                    $('#pinkiepie').addClass('hide_dead_enemy');
                    enemyName = "Pinkie Pie";
                }
                if (yourEnemy == 'rainbowdash') {
                    $('#rainbowdash').addClass('hide_dead_enemy');
                    enemyName = "Rainbow Dash";
                }


                // Check to see if all enemies are dead
                if (bodyCount < 3) {

                    // Ask User to challenge another guy
                    $('#battle_comments').append("<p class = 'commented'>You have defeated " + "<span class = inline_bold>" + enemyName + "</span>" + ", choose another opponent!</p>");

                    // Change global variable and return
                    readyToAttack = false;
                    enemySelected = false;
                    return;
                }
                else {

                    // Remove any old Battle commentary
                    $('.commented').remove();

                    $('#battle_comments').append("<p class = 'commented'>Everyone is dead YOU WIN!</p>");
                    $('#battle_comments').append("<button id = 'replay'>Reset Game</button>");

                    // Restart the page for loss
                    $("#replay").on("click", function () {
                        location.reload();
                    });

                    // Change global variable and return
                    readyToAttack = false;
                    return;
                }

            }

        }

        // No Character Selected
        else if (charSelected == false) {
            // Remove any old Battle commentary
            $('.commented').remove();
            $('#replay').remove();

            // Display idiot message
            $('#battle_comments').append("<p class = commented>Please select a HERO!</p>");
        }
        // No Enemy to attack
        else if (enemySelected == false) {
            // Remove any old Battle commentary
            $('.commented').remove();
            $('#replay').remove();

            // Display idiot message
            $('#battle_comments').append("<p class = commented>Please select an ENEMY!</p>");
        }

    });
});




//  // HEALTH BAR //

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
//   $if(bi(level) > 90, #00FF00, bi(level) > 70, #22AA00, bi(level) > 50, #999900, #FF4400)$
