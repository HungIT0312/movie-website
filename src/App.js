import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" />
        <Route path="/movie/:idMovie" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
