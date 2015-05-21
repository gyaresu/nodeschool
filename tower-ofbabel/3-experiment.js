class SomeClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }
    sayAge() {
        console.log(this.age);
    }
}

class Child extends SomeClass {
    constructor(name, age) {
        super(name, age);
    }

    // Override the SomeClass method above
    sayName() {
        // This will call SomeClass.sayName() triggering the old alert
        // Which will just display our name
        super.sayName();

        // This will trigger the new alert which has labels and our age
        console.log('Name:' + this.name + ' Age:' + this.age);
    }
}

var mySomeClass = new SomeClass('bob', 50);
var myChild = new Child('dwayne', 27);

mySomeClass.sayName();
mySomeClass.sayAge();
myChild.sayName();
myChild.sayAge();

// ⇒ babel-node 3-experiment.js

// bob

// dwayne
// Name:dwayne Age:27