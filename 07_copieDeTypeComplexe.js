// Copie de type complexe
const names = ["Riri", "Fifi", "Loulou"];
// const names2 = names;
const names2 = [...names];

names2.push("Toto");

console.log(names);
console.log(names2);

names.push("Tata");
console.log(names);
console.log(names2);

// SUR UN OBJET

const person = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = { ...person };
person2.fisrtName = "Toto";
console.log(person);
console.log(person2);

// Sans spread operator
const copie = Object.assign({}, person);
console.log(copie);
