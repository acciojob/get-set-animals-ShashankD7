//complete this code
class Animal {
	constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
	constructor(species) {
        super(species);
    }

    makeSound() {
        console.log("Woof");
    }
}

class Cat extends Animal {
	constructor(species) {
        super(species);
    }

    makeSound() {
        console.log("Meow");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
