import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterColumn from './components/CharacterColumn';

function App() {
    const [nombrePersonnages, setNombrePersonnages] = useState('');
    const [colonnes, setColonnes] = useState([]);

    const creerColonnes = () => {
        const nombre = parseInt(nombrePersonnages, 10);
        const nouvellesColonnes = [];

        for (let i = 1; i <= nombre; i++) {
            nouvellesColonnes.push(
                <CharacterColumn key={i} characterNumber={i} />
            );
        }

        setColonnes(nouvellesColonnes);
        setNombrePersonnages(''); // Réinitialise le champ de saisie après la création des colonnes
    };

    return (
        <div className="container">
            <h1>KAE ToolBox</h1>

            <div className="form-group">
                <label htmlFor="nombrePersonnages">Nombre de personnages :</label>
                <input
                    type="number"
                    className="form-control"
                    id="nombrePersonnages"
                    value={nombrePersonnages}
                    onChange={(e) => setNombrePersonnages(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={creerColonnes}>
                Créer les colonnes
            </button>
            <div className="row" id="resultats">
                {colonnes}
            </div>
        </div>
    );
}

export default App;

