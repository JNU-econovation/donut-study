import '@css/Card.css';
import ProfileImage from '@image/ProfileImage.png';
import { fontSize, fontWeight } from '../styles/theme';
import { CARD_CONTENTS } from '../constants/CardData';
import { useState } from 'react';

const Card = () => {
  const githubUrl = 'https://github.com/Klomachenko';
  const youtubeUrl = 'https://www.youtube.com/channel/UCpxKdR3scZUtwjz_E-uIDyw';
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);
  };

  return (
    <div className={`card-layout ${darkMode ? 'dark-mode' : ''}`}>
      <div className='left-box'>
        <img src={ProfileImage} alt='Profile Image' />
      </div>
      <div className='right-box'>
        <div className='title-box'>
          <h1
            style={{
              fontSize: fontSize.title,
              fontWeight: fontWeight.heavy,
              color: darkMode ? 'white' : 'black',
            }}
          >
            Kyumin Lee
          </h1>
        </div>
        <div className='content-box'>
          {CARD_CONTENTS.map((content, index) => (
            <p key={index} style={{ color: darkMode ? 'white' : 'black' }}>
              {content}
            </p>
          ))}
        </div>
        <div className='button-box'>
          <button
            onClick={() => {
              window.open(githubUrl);
            }}
          >
            GitHub
          </button>
          <button
            onClick={() => {
              window.open(youtubeUrl);
            }}
          >
            YouTube
          </button>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
