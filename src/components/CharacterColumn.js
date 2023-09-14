import React, {useState} from 'react';

import CharacterForm from "./CharacterForm";
import diceRoller from "./DiceRoller";

const CharacterColumn = ({ characterNumber }) => {
    const [results, setResults] = useState([]);
    const [nomColonne, setNomColonne] = useState('');
    const [nomColonneSaisi, setNomColonneSaisi] = useState(false);

    const handleRollDice = (formule) => {
        // Appeler la logique de lancer de dés avec la formule
        if(!nomColonneSaisi){
            const nomColonneSaisi = prompt("Entrez le nom du personnage :");
            if(!nomColonneSaisi) {
                return;
            }
            setNomColonne(nomColonneSaisi);
            setNomColonneSaisi(true); // Indique que le nom est désormais existant
        }

        // Appeler la logique de lancer de dés avec la formule
        const resultRollDice = diceRoller(formule);

        // Ajouter le résultat au tableau des résultats
        setResults((prevResults) => [...prevResults, resultRollDice]);

    };

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    {nomColonne && (
                        <h3 className="card-title">{nomColonne}</h3>
                    )}
                </div>
                <div className="card-body">
                    <CharacterForm onSubmit={handleRollDice} />
                    {results.length > 0 && (
                        <div className="mt-3">
                            <h5>Tableau des résultats :</h5>
                            <ul>
                                {results.map((result, index) => (
                                    <li key={index}>Lancer {index + 1}: {result}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterColumn;
