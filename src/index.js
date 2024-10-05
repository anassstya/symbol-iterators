class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.team = [
      new Character('Лучник', 'Bowman', 50, 1, 40, 10), 
      new Character('Фехтовальщик', 'Swordsman', 100, 3, 20, 8),
      new Character('Волшебник', 'Magician', 70, 2, 10, 20),
      new Character('Демон', 'Daemon', 30, 2, 40, 15),
    ];
    this.currentIndex = 0;
  }
  
  next(){
    if(this.currentIndex < this.team.length){
      const character = this.team[this.currentIndex];
        this.currentIndex ++;
        return {
          value: character,
          done: false
        }
      }
        
    }
    
    
}


let b = new Team();
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())