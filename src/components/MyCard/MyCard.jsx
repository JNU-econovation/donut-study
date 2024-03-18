import styles from "./App.module.css";

export default function MyComponent() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="/src/assets/images/hero.jpg"
        alt="hi"
      />
      <div className={styles.content}>
        <h1 className={styles.header}>안녕하세요! 26기 박건규 입니다!</h1>
        <p>
          저는 소프트웨어 공학과 20학번 박건규 입니다! 이번에 React 스터디에
          참여해서 너무 신납니다! 다들 너무 열정적인 자세로 참여해주셔서
          스터디가 끝난 후 성장해있을 모습이 너무 기대됩니다! 다들 열심히
          해봐요!!
        </p>
        <p>그리고 스터디에 도움을 주시는 OB분들에게 감사의 말씀 드립니다. </p>
      </div>
    </div>
  );
}
