import "../style/NameCard.style.css";

export const NameCard = () => {
  const cardImg = "../src/img/cardImg.jpg";

  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={cardImg} alt="nameCardImg" />
      </div>
      <div className="card-text-container">
        <div className="card-title-container">
          <h1 className="card-title">25기 김동완</h1>
        </div>
        <div className="card-content-container">
          <p className="card-content">에코노베이션 25기 프론트엔드로 활동 중인 김동완입니다.</p>
          <p className="card-content">.</p>
        </div>
      </div>
    </div>
  );
};
