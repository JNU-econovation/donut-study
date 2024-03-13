import { Routes, Route } from "react-router-dom";
import { NameCardPage } from "../pages/Mission1";

export const Router = () => {
  return (
    <Routes>
      <Route path="/mission1" element={<NameCardPage />} />
    </Routes>
  );
};
