const Fighter = require("./src/Fighter")
// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const heracles = new Fighter("🧔 Heraclette", 20, 6);
const nemean = new Fighter("🦁 Simba", 11, 13);

let round = 1

do{
   console.log(`Round ${round}`)
   heracles.fight(nemean)
   if(nemean.isAlive()) {
      nemean.fight(heracles) 
   }
   round++;
}while(heracles.isAlive() && nemean.isAlive());

