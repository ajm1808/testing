class Person{
    constructor(name,health,favSongs){
        this.name=name;
        this.health=health;
        this.favSongs=favSongs;
    }
    increaseHealth(){
        this.health++;
    }
    decreaseHealth(){
        this.health--;
    }
    // getName(){
    //     return (`${this.name} is a dick`);
    // }
    // getSongs(){
    //     return this.favSongs;
    // }
};

const ann = new Person("Ann",100,["nothing happened","song2"]);

module.exports={
    Person,
    ann
};