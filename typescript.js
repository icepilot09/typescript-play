function greeter(n) {
    return 'Hello, my name is ' + n.getFullName() + " and my age is " + n.age;
}
var n = {
    firstName: 'Michael',
    lastName: 'McDonald',
    age: 36,
    getFullName: function getFullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(greeter(n));
