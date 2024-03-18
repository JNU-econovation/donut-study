import '@css/Card.css';
import ProfileImage from '@image/ProfileImage.png';
import { fontSize, fontWeight } from '../styles/theme';

const Card = () => {
  const githubUrl = 'https://github.com/Klomachenko';
  const youtubeUrl = 'https://www.youtube.com/channel/UCpxKdR3scZUtwjz_E-uIDyw';

  return (
    <div className='card-layout'>
      <div className='left-box'>
        <img src={ProfileImage} alt='Profile Image' />
      </div>
      <div className='right-box'>
        <div className='title-box'>
          <h1
            style={{ fontSize: fontSize.title, fontWeight: fontWeight.heavy }}
          >
            Kyumin Lee
          </h1>
        </div>
        <div className='content-box'>
          <p>Econovation : 23th</p>
          <p>제 카드를 보러 와주신 멘토님 환영하고 감사합니다!</p>
          <p>스터디 참여 누구보다 열심히 하겠습니다!</p>
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
        </div>
      </div>
    </div>
  );
};

export default Card;
