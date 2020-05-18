class Person {
    constructor(name, health){
    this.name = name;
    this.health = health;
    }
increaseHealth(){
    this.health++;
}
}
const ann = new Person("Ann", 100);
    
module.exports = {
Person,ann 
}