$(document).ready(function () {

    // Variables// 

    let wins = 0;

    let losses = 0;


    
    // Object //

    let marvelHeros = {

        name: ["juggernaut", "wolverine", "venom"],

        damage: [10, 20, 30],

        health: [150, 200, 250],

        counterAttack: [5, 10, 15],

        RandomMarvelStats : function() {
            
          }
    };

    let ponyHeros = {

        name: [ "pinkiepie", "rainbowdash", "nightmaremoon"],

        damage: [10, 20, 30],

        health: [150, 200, 250],

        counterAttack: [5, 10, 15],

        randomPonyStats : function() {
            
          }
    };
  

 
    // object example and access //

    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };

    objectName.methodName();
    name = person.fullName();
    //.....................................///

    // Arrays //
    let heroArray = ["juggernaut", "wolverine", "pony1", "pony2"];
    
    let dmgArray = [20, 40, 60, 80];
    
    let healthArray = [100, 150, 200, 250];



// HEALTH BAR //

    function move() {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + '%';
          }
        }
      }







});