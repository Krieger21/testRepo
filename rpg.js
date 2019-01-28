var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        message: "What player character do you choose?",
        choices: ["Seid", "Ohlandt", "Urner", "Turin"],
        name: "you"
        
    },

    {
        type: "list",
        message: "Who would you like to figth?",
        choices: ["Seid", "Ohlandt", "Urner", "Turin"],
        name: "them"
    }
]).then(function(userResponse){
    
    // function attack() {
    //     var hitters = 
    // }

    var you = userResponse.you
    var them = userResponse.them
    
    function NewChar(name, profession, gender, age, strength, hitpoints) {
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
        this.printStats = function() {
          console.log("Name: " + this.name + "\n","Profession: " + this.profession + "\n", "Gender: " +this.gender + "\n", "Age: " + this.age + "\n", "Strength: " + this.strength + "\n", "Hit Points: " + this.hitpoints + "\n")
          this.isAlive = function() {
              if (hitpoints > 0) {
                  console.log(this.name + " is alive.")
              }
          }
        };
      }
      
    
      var seid = new NewChar("Seid", "Warrior", "Male", "Unknown", 87, 496) 
      var ohlandt = new NewChar("Ohlandt", "Servant", "Male", "6056", 90, 340)
      var urner = new NewChar("Urner", "Royal Executioner", "Male", "53", 65, 205)
      var turin = new NewChar("Turin", "Assassin", "Male", "25", 32, 275)
     
      
    //   function attack() {
    //       var attack
    //   }
      
//  if (you === "Seid") {
//      console.log("-------Your character-------")
//       seid.printStats()
//       seid.isAlive()
//       console.log(" ")
//   } else if (you === "Ohlandt") {
//     console.log("-------Your character-------")
//       ohlandt.printStats()
//       ohlandt.isAlive()
//       console.log(" ")
//   } else if (you === "Urner") {
//     console.log("-------Your character-------")
//       urner.printStats()
//       urner.isAlive()
//       console.log(" ")
//   } else if (you === "Turin") {
//     console.log("-------Your character-------")
//       turin.printStats()
//       turin.isAlive()
//       console.log(" ")
//   } 

//     if (them === "Seid") {
//         console.log("--------Your Enemy--------")
//         seid.printStats()
//         seid.isAlive()
//         console.log(" ")
//     } else if (them === "Ohlandt") {
//         console.log("--------Your Enemy--------")
//         ohlandt.printStats()
//         ohlandt.isAlive()
//         console.log(" ")
//     } else if (them === "Urner") {
//         console.log("--------Your Enemy--------")
//         urner.printStats()
//         urner.isAlive()
//         console.log(" ")
//     } else if (them === "Turin") {
//         console.log("--------Your Enemy--------")
//         turin.printStats()
//         turin.isAlive()
//         console.log(" ")
//     } 

console.log(seid.hitpoints)

    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Fight", "Befriend", "Ignore", "Walk Away"],
            name: "options"
            
        }
    ]).then(function(userResponse){


        if (userResponse.name === "Fight") {
            
        }
    })

    
    })