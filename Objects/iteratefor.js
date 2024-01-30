let person={
    Firstname:'Gopi',
    Lastname:'Nathan',
    age:30
};
let iter = person[Symbol.iterator]();
for (let index in person) {
    console.log(person[index]);
}
iter.next();

// for (let iter of person) {
//     console.log(iter);
// }