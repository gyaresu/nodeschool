var bob = {name: "bob", age: "42", smell: "chipper"}

function callAndApply(name, age, smell) {
    this.name = name
    this.age = age
    this.smell = smell
    this.wooble = "yes"
    console.log("My name is " +
        this.name +
        ". My age is " +
        this.age +
        ". And my smell is " +
        this.smell +
        ". Wooble?: " +
        this.wooble
    )
}

console.log(bob)
//callAndApply.call(bob, "fran", "80", "lavender")
//console.log(bob)
//callAndApply.apply(bob, ["stu", "12", "gross"])
//console.log(bob)

module.exports = callAndApply
