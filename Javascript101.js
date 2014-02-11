function BoulderingProblem( name, difficulty, tries ) {

  this.name = name;
  this.difficulty = difficulty;
  this.tries = tries;

}
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
BoulderingProblem.prototype.toString = function () {
  return this.name + " Is a v" + this.difficulty + " and took " + this.tries + " tries to crush! ";
};
// Usage:
var checkerboard = new BoulderingProblem( "Checkerboard", 8, 7 );
var ironmantraverse = new BoulderingProblem( "Iron Man Travers", 4, 2 );
var kungfugrip = new BoulderingProblem( "Kund Fu Grip", 7, 5 );
var ironmantraverse = new BoulderingProblem( "Iron Man Travers", 4, 1 );
var goldfish = new BoulderingProblem( "Gold Fish", 7, 2 );
var hulk = new BoulderingProblem( "The Hulk", 6, 3 );
var discodiva = new BoulderingProblem( "Disco Diva", 8, 10 );

console.log( checkerboard.toString() );
console.log( ironmantraverse.toString() );
console.log( kungfugrip.toString() );
console.log( goldfish.toString() );
console.log( hulk.toString() );
console.log( discodiva.toString() );
