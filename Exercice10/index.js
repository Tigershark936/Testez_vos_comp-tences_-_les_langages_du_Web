//votre code ici


//  sert à exporter une valeur par défaut d’un fichier afin d'être importée ailleurs facilement.
export default function printNumbers(n){
    let result = ""; // Chaîne vide pour stocker les nombres

    for (let i = 1; i <= n; i++){
        result += i + " "; // Ajoute chaque nombre suivi d'un espace
    }
    return result.trim(); // Supprime l'espace final
};

console.log(printNumbers(5)); // Ce qui va affiché "1 2 3 4 5"
