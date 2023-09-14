import React, {useState} from 'react';

import CharacterForm from "./CharacterForm";
import diceRoller from "./DiceRoller";

const CharacterColumn = ({ characterNumber }) => {
    const [resultat, setResultat] = useState('');

    const handleRollDice = (formule) => {
        // Appeler la logique de lancer de dés avec la formule
        const resultatDuLancer = diceRoller(formule);

        // Mettre à jour le résultat dans l'état local
        setResultat(resultatDuLancer);
    };

    return (
        <div className="col-md-4">
            <h3>Personnage {characterNumber}</h3>
            <CharacterForm onSubmit={handleRollDice} />
            <div>
                {resultat !== '' && (
                    <p>Résultat du lancer de dés : {resultat}</p>
                )}
            </div>
        </div>
    );
};

export default CharacterColumn;
