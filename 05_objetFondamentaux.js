// 1. Création d'un objet 'à la volée'
const user = { firstName: "John", lastName: "Doe", age: 25 };
console.log(user);

// 2. Création en passant par un modèle ( class )

class User {
  // En javasctipt, nous ne sommes pas obligés d'écrire les propriétés dont les valeurs sont assignées par le constructeur
  //   firstName;
  //   lastName;
  //   age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const user2 = new User("John", "Doe", 25);

console.log(user2);

// 3. Utilisation de méthodes de class et de getter/setter
class Car {
  #model;

  constructor(name, model, year) {
    this.name = name;
    this.year = year;

    // En passant par le setter
    this.model = model;

    // Sans passer par le setter
    // this.#model = model;
  }

  display() {
    console.log(
      `Voiture ${this.name}, modèle: ${this.#model}, annee: ${this.year}`
    );
  }

  get model() {
    console.log("accès au modèle via le getter");
    return this.#model;
  }

  set model(newModel) {
    // Vérification de données / Traitement
    console.log("modification modèle via le setter");
    this.#model = newModel;
  }
}

const myCar = new Car("Toyota", "Camry", 2022);

// Accès aux propriétés / méthodes de class
myCar.display();

const carName = myCar.name;
console.log(carName);

// Accès aux propriétés avec getter
const modelViaGetter = myCar.model;
console.log(modelViaGetter);

// Modification des propriétés
myCar.name = "Honda";
myCar.display();

myCar.model = "Civic";
myCar.display();

// Attention, on peut ajouter des attributs 'à la volée', donc attention aux fautes de frappes lorsqu'on
// veut modifier la valeur d'un des attributs de notre objet :

myCar.yeear = 2021;
console.log(myCar);
