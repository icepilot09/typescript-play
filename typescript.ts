
interface Name {
	firstName: string;
	lastName: string;
	age: number;
	jobTitle?: string;
	getFullName(): string;
	
}

function greeter (n: Name) : string {
	return 'Hello, my name is ' + n.getFullName() + " and my age is " + n.age;
}

var n :Name ={
	firstName: 'Michael',
	lastName: 'McDonald',
	age: 36,
	getFullName: function getFullName(): string {
		return this.firstName + " " + this.lastName;
	}
};

console.log(greeter(n));