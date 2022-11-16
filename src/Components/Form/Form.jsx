import { useState } from 'react';
import React from 'react'
import './form.css';


const Form = () => {

  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState("");

  const handleFetch = (e) => { //tämä hakee tiedon API:sta ja muuttaa sen json:iksi
    e.preventDefault();

    fetch('https://api.datamuse.com/words?rel_syn=' + word) //lisätään variable stringiin. "word" ollaan updatettu useStateen inputin perusteella.
    .then((response) => response.json())
    .then((data) => setSynonyms(data));
  };

  return (

    
    <div className="form__section">
        <form onSubmit={handleFetch}>
          <input 
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id='enter__word'
            className='form__input'
          ></input>
          <button>Search</button>
        </form>

        <div className='word__section'>  
        {synonyms.map((synonym) => (
          <div className="word__container" key={synonym.word}>
            <ul>
              <li>
                {synonym.word}
              </li>
            </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Form