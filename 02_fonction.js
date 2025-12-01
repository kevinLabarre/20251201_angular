function hello() {
  console.log("Hello world");
}

function helloName(name) {
  console.log("Hello " + name);
}

function helloName2(name) {
  return "Hello " + name;
}

hello();
helloName("Toto");
console.log(helloName2("Riri"));

const HELLO = helloName2("Fifi");
console.log(HELLO);

console.log("____________ Fonctions fléchées : ____________");

const helloFleche = () => {
  console.log("Hello world");
};

const helloNameFleche = (name) => {
  console.log("Hello " + name);
};

const helloNameFleche2 = (name) => {
  return "Hello " + name;
};

helloFleche();
helloNameFleche("Toto");
console.log(helloNameFleche2("Riri"));

// Return d'une fonction fléchée
// --> le return est implicite si on n'utilise pas d'accolades ('{' '}')

const helloNameFleche3 = (name) => {
  // instruction, traitement, vérif ....

  return "Hello " + name;
};

const helloNameFleche4 = (name) => "Hello " + name;

console.log(helloNameFleche3("Fifi"));
console.log(helloNameFleche4("Fifi"));
