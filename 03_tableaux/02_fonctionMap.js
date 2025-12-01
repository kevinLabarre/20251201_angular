// La fonction map crée une copie du tableau existant, et applique la même opération sur chacun des éléments de notre tableau
// La fonction map NE MODIFIE PAS le tableau existant
const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

// --> on a besoin d'un tableau de string, chacune des chaînes de caractère contenant prénom + nom
const personsAfterMap = persons.map(
  (person) => person.firstName + " " + person.lastName
);

console.log(persons);
console.log(personsAfterMap);

const chiffres = [1, 2, 3, 4, 5];
// ==> on veut un nouveau talbeau contenant le valeurs au carré du tableau précédent.
// Résult attendu : [1,4,9,16,25]

const chiffreCarre = chiffres.map((n) => n * n);
const chiffreCarre2 = chiffres.map((n) => Math.pow(n, 2));
console.log(chiffreCarre, chiffreCarre2);

// Le .map doit avoir un return !!
const chiffreCarre3 = chiffres.map((n) => {
  return n * n;
});
console.log(chiffreCarre3);
