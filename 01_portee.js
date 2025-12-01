{
  var myVar = "Hello world";
  let myLet = 10;
  const MY_CONST = false;
}

console.log(myVar);
// console.log(myLet); // erreur -> variable non définie
// console.log(MY_CONST); // erreur -> variable non définie

console.log("__________Exo portée : __________");

var x = 10;
console.log("1", x); // 1, 10

{
  let x = 2;
  console.log("2", x); // 2, 2
  var y = 5;
  const Z = 6;
}

console.log("3", x); // 3, 10
console.log("4", y); // 4, 5
console.log("5", Z); // erreur -> variable non définie
