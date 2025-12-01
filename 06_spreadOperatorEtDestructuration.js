// 1. Le spread operator avec les tableaux

const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];

console.log(...numbersOne);
console.log(1, 2, 3, 4, 5); // Equivalent à la ligne ci-dessus

const numbersCopy = [...numbersOne];
console.log(numbersCopy);

// Copie + ajout de deux nouveaux chiffres
const numbersThree = [...numbersOne, 6, 7];
console.log(numbersThree);

// Concaténer plusieurs tableaux
const allNumbers = [...numbersOne, ...numbersTwo];
console.log(allNumbers);

// 2. Fonction qui utilise un paramètre avec spread operator
const sum = (...numbers) => {
  let result = 0;
  numbers.forEach((n) => (result += n));
  //   numbers.forEach((n) => (result = result + n)); // Equivalent ligne ci-dessus
  return result;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// 3. Spread operator sur les objets
const user = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
};

// console.log(...user); // Impossible avec les objets !

// Copie de l'objet
const userCopy = { ...user };
console.log(userCopy);

// Copie + ajout de propriétés
const newUser = { ...user, city: "New York", country: "USA" };
console.log(newUser);

// Copie + modification des valeurs existantes
const newUser2 = { ...user, fisrtName: "Jojo" };
console.log(newUser2);

// Concaténation d'objets
const userInfo = {
  city: "New-york",
  phone: "01 02 03 04 05",
};

const fullUser = { ...user, ...userInfo };
console.log(fullUser);

// 4. Destructuration
console.log("__________ DESTRUCTURATION __________");

const cars = ["Mustang", "Corvette", "F-150", "Focus"];

const [car1, car2, car3, car4] = cars; // Equivalent à lignes ci-dessous. C'est à dire que l'on créé une variable pour chaque valeur du tableau cars
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];
// const car4 = cars[3];

const [, , , car5] = cars; // On peut extraire uniquement ce dont on a besoin (exemple d'extraction de la dernière valeur uniquement)
console.log(car5);

const calculate = (a, b) => {
  const add = () => a + b;
  const sub = () => a - b;
  const mult = () => a * b;
  const div = () => a / b;

  return [add, sub, mult, div];
};

const [addition, , division] = calculate(4, 2);
console.log(`4 + 2 = ${addition()}  |  4 / 2 = ${division()}`);

// Destructuration sur les objets
const person = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
};

// Avec les objets ce n'est plus l'ordre qui compte mais le nom de la propriété
const { age, fisrtName } = person;
console.log(age, fisrtName);

// Avec renommage de la variable lors de la destructuration
const { fisrtName: prenom } = person;
console.log(prenom);

const calculate2 = (a, b) => {
  const add = () => a + b;
  const sub = () => a - b;
  const mult = () => a * b;
  const div = () => a / b;

  //   return { add: add, sub: sub, mult: mult, div: div };
  return { add, sub, mult, division: div };
};

const { add, division: myDivision } = calculate2(4, 2); // division est une variable qui existe déja, nous la renommons en "myDivision"
console.log(`4 + 2 = ${add()}  |  4 / 2 = ${myDivision()}`);

// 5. Destrucuration + spread operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const [n1, n2, n3, ...rest] = numbers;
console.log(rest); // [ 4, 5, 6, 7, 9, 10 ]

// Attention, rest n'est pas un mot clé !!
const [n4, ...toto] = numbers;
console.log(toto);
