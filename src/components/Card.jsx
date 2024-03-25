import '@css/Card.css';
import ProfileImage from '@image/ProfileImage.png';
import { fontSize, fontWeight } from '../styles/theme';
import { CARD_CONTENTS, URL } from '../constants/CardData';
import { Suspense, useState } from 'react';

const Card = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);
  };

  return (
    <div className={`card-layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='left-box' tabIndex='0'>
        {imgError ? (
          <div>Loading...</div>
        ) : (
          <img
            src={ProfileImage}
            alt='Profile Image'
            onError={handleImgError}
          />
        )}
      </div>
      <div className='right-box' tabIndex='1'>
        <div className='title-box'>
          <h1
            style={{
              fontSize: fontSize.title,
              fontWeight: fontWeight.heavy,
            }}
          >
            Kyumin Lee
          </h1>
        </div>
        <div className='content-box'>
          {CARD_CONTENTS.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <div className='button-box'>
          <button
            onClick={() => {
              window.open(URL.github);
            }}
          >
            GitHub
          </button>
          <button
            onClick={() => {
              window.open(URL.youtube);
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
