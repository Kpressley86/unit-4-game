$(document).ready(function () {

    let marvelHeros = {

        name: ["juggernaut", "wolverine", "venom"],

        damage: [10, 20, 30],

        health: [100, 150, 200, 250],

        counterAttack: [5, 10, 15, 20],
    }

    let ponyHeros = {

        name: [ "pinkiepie", "rainbowdash", "nightmaremoon"],

        damage: [10, 20, 30],

        health: [100, 150, 200, 250],

        counterAttack: [5, 10, 15, 20],
    }
  
    // Object //
    let heroStats = {

        name: ["juggernaut", "wolverine", "venom", "pinkiepie", "rainbowdash", "nightmaremoon"],

        damage: [20, 40, 60, 80],

        health: [100, 150, 200, 250],

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













});