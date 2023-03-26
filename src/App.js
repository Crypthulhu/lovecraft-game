import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [choice, setChoice] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async () => {
    const prompt = choice === '1' ? 'Une scène mystérieuse inspirée de Lovecraft avec le Dr. Morgan' : 'Une scène mystérieuse inspirée de Lovecraft enquêtant sur la famille Morgan';
    // Remplacez cette URL par l'URL de votre API
    const response = await axios.post('https://your-api-url.com/generate-image', { prompt });
    setImageUrl(response.data.imageUrl);
  };

  return (
    <div className="App">
      <h1>Jeu inspiré de Lovecraft</h1>
      <div>
        <label>
          <input type="radio" name="choice" value="1" onChange={(e) => setChoice(e.target.value)} />
          Rencontrer le Dr. Morgan
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="choice" value="2" onChange={(e) => setChoice(e.target.value)} />
          Enquêter sur le Dr. Morgan et sa famille
        </label>
      </div>
      <button onClick={generateImage} disabled={!choice}>
        Faites votre choix
      </button>
      {imageUrl && (
        <>
          <h2>Scène :</h2>
          <img src={imageUrl} alt="Scène générée" />
        </>
      )}
    </div>
  );
}

export default App;
