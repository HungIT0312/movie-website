import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" />
        <Route path="/Movie/:idMovie" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
