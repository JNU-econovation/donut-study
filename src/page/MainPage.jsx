import Header from '../components/Header';
import styles from '../css/MainPage.module.css';
import YouTube from 'react-youtube';

function MainPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.videoBox}>
        <YouTube
          videoId='YDErLmbjSRM'
          opts={{
            width: '1700px',
            height: '1062px',
            playerVars: {
              autoplay: 1,
              mute: 1,
              loop: 1,
            },
          }}
          containerClassName={styles.videoContainer}
        />
      </div>
    </div>
  );
}

export default MainPage;
