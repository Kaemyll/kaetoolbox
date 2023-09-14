// DiceRoller.js
const DiceRoller = (formule) => {
    // Test de la conformité de la formule saisie par l'utilisateur
    const regex = /^(\d+)d(\d+)(?:\+(\d+))?$/;
    const match = formule.match(regex);

    if (!match){
        // formule ne correspond pas au pattern attendu
        return "Formule invalide. utilisez le format {x}d{y} et/ou +{z}."
    }

    // Divisez la formule en ses composants (nombre de dés, nombre de faces et modificateur)
    const [nombreDes, reste] = formule.split('d');
    const [nombreFaces, modificateur] = reste.split('+').map((part) => part.trim());

    // Convertissez les chaînes en nombres
    const x = parseInt(nombreDes);
    const y = parseInt(nombreFaces);
    const z = modificateur ? parseInt(modificateur) : 0;

    // Effectuez le lancer de dés
    let resultat = 0;
    for (let i = 0; i < x; i++) {
        resultat += Math.floor(Math.random() * y) + 1;
    }

    // Ajoutez le modificateur
    resultat += z;

    return resultat;
};

export default DiceRoller;