// La fonction filter crée une copie du tableau existant, la fonction filter de MODIFIE PAS le tableau d'origine.
// filter() applique un filtre sur les éléments

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// On veut un tableau qui contient tous les mots du tableau 'words' qui ont plus de 6 caractères
const wordsFilter = words.filter((word) => word.length > 6);
console.log(wordsFilter);

// On veut une fonction qui prend en paramètre une chaine de caractère (une entrée utilisateur)
// --> la fonction trie le tableau en fonction de ce qui est passé en paramètre

const textFilter = (entreeUtilisateur) =>
  words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);

const textFilter2 = (entreeUtilisateur) =>
  words.filter((word) => word.includes(entreeUtilisateur));

const result = textFilter("es");
const result2 = textFilter2("es");
console.log(result, result2);
