class Person { 
	constructor (name, age) { 
		this.name = name; 
		this.age = age; 
	} 
	atWork() { 
		return this.name + " is at work, "; 
	} 
	atHome() { 
		return this.name + " is at home"; 
	} 
	sleeping () { 
		return this.name + " is sleeping"; 
	} 
} 
class FashionDesigner extends Person { 
	constructor (name, age) { 
		super (name, age); 
	} 
	profession () { 
		return this.name + " is a Fashion Designer"; 
	} 
	doTasks() { 
		return super.atWork() + this.profession(); 
	} 
} 
function display(content) { 
	console.log(content); 
} 
const character = new FashionDesigner("Sayan", 30); 
display(character.profession()); 
display(character.atHome()); 
display(character.doTasks());
