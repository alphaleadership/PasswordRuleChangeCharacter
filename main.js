const readline = require("readline");

const rules = [
  ["A", "#"],
  ["l", "!"],
  ["E", "€"]
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function remplacerCaracteres(phrase) {
  let nouvellePhrase = phrase; // Initialise nouvellePhrase avec la phrase d'origine

  for (let i = 0; i < rules.length; i++) {
    console.log(nouvellePhrase);
    nouvellePhrase = nouvellePhrase.split(rules[i][0]).join(rules[i][1])
  }

  return nouvellePhrase;
}

rl.question("Entrez une phrase : ", (phrase) => {
  let phraseModifiee = remplacerCaracteres(phrase);
  console.log("Phrase modifiée :", phraseModifiee);

  rl.close();
});
