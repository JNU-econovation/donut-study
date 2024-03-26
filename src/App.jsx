import { useState } from "react";

export default function App() {
  const [order, setOrder] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-3xl text-center font-bold mt-20">쿠폰함</h1>
      <p className="mt-12 ">
        쿠폰을 받아보세요! 주문할 때마다 쿠폰을 받을 수 있어요! 10개를 모으면
        무려 1개가 공짜??
      </p>
      <button
        className="my-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() =>
          setOrder((prevOrderCount) => {
            if (prevOrderCount >= 10) {
              return 10;
            }
            return ++prevOrderCount;
          })
        }
      >
        주문하기
      </button>
      <hr />
      <div className="flex gap-12 justify-center p-20">
        {Array.from({ length: order }).map((_, index) => (
          <div
            key={index}
            className="text-white bg-slate-400 font-bold py-2 px-4 rounded-lg"
          >
            쿠폰
          </div>
        ))}
      </div>

      <button
        className={`my-12 text-white font-bold py-2 px-4 rounded-lg ${
          order < 10
            ? "bg-blue-500 opacity-50"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
        onClick={() => {
          if (order < 10) {
            return;
          }
          alert("와우! 하나가 공짜?????");
          setOrder(0);
        }}
      >
        쿠폰 제출하기 💥💥
      </button>
    </div>
  );
}
