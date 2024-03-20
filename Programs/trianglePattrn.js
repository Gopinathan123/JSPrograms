let n = 5;

//upper left triangle
for (let i = 1; i <= n; i++) {
	let str = "* ";
	console.log(str.repeat(i));
}


//lower left triangle
for (let i = n; i >= 1; i--) {
	let str = "* ";
	console.log(str.repeat(i));
}


//upper right triangle
for (let i = 1; i <= n; i++) {
	let str = "* ";
	let space = '  ';
	console.log(space.repeat((n-i))+str.repeat(i));
}

//lower right triangle
for (let i = n; i >= 1; i--) {
	let str = "* ";
	let space = '  ';
	console.log(space.repeat(n-i)+str.repeat(i));
}

