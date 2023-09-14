// CharacterForm.js
import React, { useState } from 'react';

const CharacterForm = ({ onSubmit }) => {
    const [formule, setFormule] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formule);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Formule de lancer de dés :</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="sous la forme {x}d{y}(+{z}"
                        value={formule}
                        onChange={(e) => setFormule(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Lancer les dés
                </button>
            </form>
            {/* Ajoutez ici l'affichage du résultat du lancer de dés */}
        </div>
    );
};

export default CharacterForm;