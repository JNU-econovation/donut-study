import { Routes, Route } from "react-router-dom";
import { NameCardPage } from "../pages/NameCard.page";

export function Router() {
  return (
    <Routes>
      <Route path="/mission1" element={<NameCardPage />} />
    </Routes>
  );
}
