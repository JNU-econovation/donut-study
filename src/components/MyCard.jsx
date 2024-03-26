import React, { useState } from "react";
import "../style/style.css"

/*export default function MyCard()*/
    
    function App() {
        const [couponNum, setCouponNum] = useState(0);
        const [useCoupon, setUseCoupon] = useState(false);
        const [orderCoffee, setOrderCoffee] = useState(true);

        const buyCoffee = () => {
            setCouponNum(couponNum+1);
            if (couponNum === 10){
                setUseCoupon(true);
                setCouponNum(0);
                setOrderCoffee(false);
            }
            console.log(couponNum, useCoupon);
        };

        const drinkCoffee = () => {
            setUseCoupon(false);
            setOrderCoffee(true);
        }

      return(
        <div className="App">
            
            <h1>커피 쿠폰</h1>
            <p>
                쿠폰을 받아보세요! 주문할 때마다 쿠폰을 받을 수 있어요!
                10개를 모으면 무려 1개가 공짜?
            </p>
            <div>{couponNum}</div>

            <div>
                {!orderCoffee ? null : <button onClick={() => {buyCoffee()}}> 커피 결제 </button>}
                {useCoupon ? <button onClick={() => {drinkCoffee()}}> 쿠폰 사용 </button> : null }
            </div>
        </div>   
        );
        
    }
    export default App;