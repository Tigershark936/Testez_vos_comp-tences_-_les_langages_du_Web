// votre code ici

const checkAge = (age) => { // Ici, age est le paramètre
    // - Si l'âge est **inférieur à 18 ans**, affichez `Vous êtes mineur.`
    if (age < 18){
        console.log("Vous êtes mineur.");
    // - Si l'âge est **compris entre 18 et 65 ans** (inclus), affichez `Vous êtes majeur.`
    } else if (age > 19 && age < 65){
        console.log("Vous êtes majeur.");
        // - Si l'âge est **supérieur à 65 ans**, affichez `Vous êtes senior.`
    } else {
        console.log("Vous êtes sénior.");
    }
};

checkAge(15);   // Affiche "Vous êtes mineur."
checkAge(30);   // Affiche "Vous êtes majeur."
checkAge(75);   // Affiche "Vous êtes senior."