import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<HomePage />} />
        {/* <Route path="/login" /> */}
        <Route path="/Movie/:idMovie" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
