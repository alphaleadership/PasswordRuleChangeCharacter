// Importer le module 'readline' pour lire l'entrée depuis le terminal
const readline = require("readline");
const rules=[
  ["A","#"],
  ["l","!"],
  ["E","€"]
]
// Créer une interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction pour remplacer les caractères
function remplacerCaracteres(phrase) {


  for (let i = 0; i < rules.length; i++) {
    phrase.replace(rules[i][0],rules[i][1])
  }

  let nouvellePhrase = phrase
  nouvellePhrase = nouvellePhrase.replace(/\s+/g, ""); // Supprimer les espaces
  return nouvellePhrase;
}

// Demander à l'utilisateur de saisir une phrase
rl.question("Entrez une phrase : ", (phrase) => {
  let phraseModifiee = remplacerCaracteres(phrase);
  console.log("Phrase modifiée :", phraseModifiee);

  rl.close(); // Fermer l'interface de lecture
});
