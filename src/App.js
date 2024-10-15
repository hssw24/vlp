import React, { useState } from "react";

const verbs = [
  { word: "gehen", syllables: ["ge", "hen"] },
  { word: "kommen", syllables: ["kom", "men"] },
  { word: "sehen", syllables: ["se", "hen"] },
  { word: "sagen", syllables: ["sa", "gen"] },
  { word: "hören", syllables: ["hö", "ren"] },
  { word: "laufen", syllables: ["lau", "fen"] },
  { word: "essen", syllables: ["es", "sen"] },
  { word: "trinken", syllables: ["trin", "ken"] },
  { word: "lesen", syllables: ["le", "sen"] },
  { word: "schreiben", syllables: ["schrei", "ben"] },
  { word: "spielen", syllables: ["spie", "len"] },
  { word: "schlafen", syllables: ["schla", "fen"] },
  { word: "stehen", syllables: ["ste", "hen"] },
  { word: "sitzen", syllables: ["sit", "zen"] },
  { word: "springen", syllables: ["sprin", "gen"] },
  { word: "helfen", syllables: ["hel", "fen"] },
  { word: "lernen", syllables: ["ler", "nen"] },
  { word: "kaufen", syllables: ["kau", "fen"] },
  { word: "fahren", syllables: ["fah", "ren"] },
  { word: "machen", syllables: ["ma", "chen"] },
  { word: "arbeiten", syllables: ["ar", "bei", "ten"] },
  { word: "kochen", syllables: ["ko", "chen"] },
  { word: "malen", syllables: ["ma", "len"] },
  { word: "schwimmen", syllables: ["schwim", "men"] },
  { word: "lachen", syllables: ["la", "chen"] },
  { word: "weinen", syllables: ["wei", "nen"] },
  { word: "fragen", syllables: ["fra", "gen"] },
  { word: "antworten", syllables: ["ant", "wor", "ten"] },
  { word: "singen", syllables: ["sin", "gen"] },
  { word: "tanzen", syllables: ["tan", "zen"] },
  { word: "finden", syllables: ["fin", "den"] },
  { word: "suchen", syllables: ["su", "chen"] },
  { word: "öffnen", syllables: ["öff", "nen"] },
  { word: "schließen", syllables: ["schlie", "ßen"] },
  { word: "geben", syllables: ["ge", "ben"] },
  { word: "nehmen", syllables: ["neh", "men"] },
  { word: "rufen", syllables: ["ru", "fen"] },
  { word: "tragen", syllables: ["tra", "gen"] },
  { word: "bringen", syllables: ["brin", "gen"] },
  { word: "bleiben", syllables: ["blei", "ben"] },
  { word: "zahlen", syllables: ["zah", "len"] },
  { word: "hören", syllables: ["hö", "ren"] },
  { word: "zeigen", syllables: ["zei", "gen"] },
  { word: "klatschen", syllables: ["klat", "schen"] },
  { word: "rennen", syllables: ["ren", "nen"] },
  { word: "riechen", syllables: ["rie", "chen"] },
  { word: "fallen", syllables: ["fal", "len"] },
  { word: "zählen", syllables: ["zäh", "len"] },
  { word: "werfen", syllables: ["wer", "fen"] },
  { word: "drücken", syllables: ["drü", "cken"] },
];



const VerbApp = () => {
  const [index, setIndex] = useState(0);  // Start mit dem ersten Verb

  const handleNextVerb = () => {
    // Setzt das nächste Verb oder startet von vorne, wenn das Ende erreicht ist
    setIndex((prevIndex) => (prevIndex + 1) % verbs.length);
  };

  return (
    <div style={styles.container}>
      <h1>Verben</h1>
      <div style={styles.verbBox}>
        <h2>{verbs[index].word}</h2>
        <p>
          {verbs[index].syllables.join(" - ")}
        </p>
      </div>
      <button style={styles.button} onClick={handleNextVerb}>Nächstes Verb</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  verbBox: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  }
};

export default VerbApp;
