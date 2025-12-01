// 1. Création d'un tableau

let myArray = [];
const myNames = ["Riri", "Fifi", "Loulou"];

let myArray2 = new Array(5);

//  2. Accès aux éléments
const myFirstName = myNames[0];
const my2ndName = myNames[1];

console.log("2. accès aux éléments: ", myFirstName, my2ndName);

// 3. Ajout / Suppression / 'remplacement' d'une valeur

//  Ajout -> .push()
myArray.push("Toto");
myNames.push("Toto");
myArray2.push("Toto");

console.log("3. ajout d'une valeur: ", myArray, myNames, myArray2);

// Suppresion -> .splice()
//  --> on veut supprimer 'Fifi' de notre 2e liste  ([ 'Riri', 'Fifi', 'Loulou', 'Toto' ])

// Avec .splice(): 1er argument = index du 1er élément à supprimer, 2e argument = nb de valeurs à supprimer
myNames.splice(1, 1);
console.log("3. suppression de 'Fifi' dans 'myNames': ", myNames);

// Remplacement d'un valeur
// --> on veut remplacer 'Loulou' par 'Fifi' dans notre 2e liste (myNames)  ([ 'Riri', 'Loulou', 'Toto' ])
myNames.splice(1, 1, "Fifi");
console.log("3. remplacement de 'Loulou' par 'Fifi' dans 'myNames': ", myNames);

// Injecter une valeur à un emplacement précis
// --> on veut injecter 'Loulou' à la 3e position de notre liste 'myNames'   ([ 'Riri', 'Fifi', 'Toto' ])
myNames.splice(2, 0, "Loulou");
console.log("3. injecter 'Loulou' en 3e position: ", myNames);

// 4. Parcourir un tableau
console.log("______ 4. Parcourir un tableau ______");

for (name of myNames) {
  console.log(name);
}

console.log("__________________________");

myNames.forEach(function (name) {
  console.log(name);
});

console.log("__________________________");

myNames.forEach(function (name, index, array) {
  console.log("name: " + name, "index: " + index, "array: " + array);
});

// A savoir : en JS, les développeurs utilisent toujours des fonctions fléchées pour les fonctions de callback
//  ( pour les fonctions passés en argument d'autres fonctions )
console.log("__________________________");

myNames.forEach((name, index, array) =>
  console.log("name: " + name, "index: " + index, "array: " + array)
);
