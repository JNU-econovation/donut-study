import '@css/Card.css';
import ProfileImage from '@image/ProfileImage.png';
import { color, fontSize, fontWeight } from '../styles/theme';

const Card = () => {
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
          <button style={{ backgroundColor: color.green, color: color.white }}>
            GitHub
          </button>
          <button style={{ backgroundColor: color.green, color: color.white }}>
            YouTube
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
