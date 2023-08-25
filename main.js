// Importer le module 'readline' pour lire l'entrée depuis le terminal
const readline = require("readline");

// Créer une interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction pour remplacer les caractères
function remplacerCaracteres(phrase) {
  let caracteres = phrase.split("");

  for (let i = 0; i < caracteres.length; i++) {
    if (caracteres[i] === "A") {
      // Règle de remplacement. Changez les valeurs entre les guillemets
      caracteres[i] = "#";
    }
    if (caracteres[i] === "l") {
      caracteres[i] = "!";
    }
    if (caracteres[i] === "E") {
      caracteres[i] = "€";
    }
    if (caracteres[i] === "e") {
      caracteres[i] = "3";
    }
    if (caracteres[i] === "a") {
      caracteres[i] = "@";
    }
    if (caracteres[i] === "u") {
      caracteres[i] = "^";
    }
  }

  let nouvellePhrase = caracteres.join("");
  nouvellePhrase = nouvellePhrase.replace(/\s+/g, ""); // Supprimer les espaces
  return nouvellePhrase;
}

// Demander à l'utilisateur de saisir une phrase
rl.question("Entrez une phrase : ", (phrase) => {
  let phraseModifiee = remplacerCaracteres(phrase);
  console.log("Phrase modifiée :", phraseModifiee);

  rl.close(); // Fermer l'interface de lecture
});
