import { Routes, Route } from "react-router-dom";
import { Mission1 } from "../pages/Mission1";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Mission1 />} />
    </Routes>
  );
};
