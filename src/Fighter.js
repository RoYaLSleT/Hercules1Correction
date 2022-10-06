/* Fighter class definition */

const MAX_LIFE = 100;
class Fighter{
   constructor(cName, cStrength, cDexterity) {
      this.name = cName;
      this.strength = cStrength;
      this.dexterity = cDexterity;
      this.life = MAX_LIFE;
      console.log(`${this.name} a bien été créé. Il a ${this.life} pts de vie 💙`)
   }
   fight(enemy){
      let damage = this.generateRandomInteger(this.strength)
      //console.log(`Degats calculés : ${damage}.`)
      let mitigateDamage = damage - enemy.dexterity
      //console.log(`Degats mitigés : ${mitigateDamage}.`)
      // On impacte les points de vie enemy si les dégats mitigés sont supérieur à Z
      if(mitigateDamage > 0){
         enemy.life = enemy.life - mitigateDamage;
         // si la vie est inférieur à ZEro, on la remet à 0
         if(enemy.life < 0) enemy.life = 0
         console.log(`${enemy.name} a subit ${mitigateDamage} dégats. Il lui reste ${enemy.life}pts de vie 💙`)
      }
      else console.log(`L'attaque de ${this.name} manquée !`)
   }

   isAlive(){
      return this.life > 0;
   }

   generateRandomInteger(max){
      // Math.random() = 0 < 0.15558 < 0.5888 < 0.99999999
      // 0*1, 0*7 / 0.99 / 0.99 * 7 => 6.99999
      // 0 * 1 + 1 / 
      return Math.floor(Math.random() * max+1);
   }

}

module.exports = Fighter;