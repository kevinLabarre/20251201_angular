const number = 10;
const text = "mon texte";
const displayText = () => "mon texte via la fonction";

const result = `Valeur de number: ${number}. Mon texte est: ${text}.
Mon nombre multiplié par 2 est : ${number * 2}.
${displayText()}
`;

console.log(result);
