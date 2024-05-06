import { useEffect, useState } from "react";
import TypingGame from "./components/TypingGame";
import GAME_CONSTANTS from "./constants/gameConstants";

export default function App() {
  const [flush, setFlush] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlush((prev) => !prev);
    }, GAME_CONSTANTS.INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <TypingGame flush={flush} />;
}
