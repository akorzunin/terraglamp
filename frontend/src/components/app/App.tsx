import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/main_page";
import { BookFormPage } from "../../pages/book_from_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/book" element={<BookFormPage />} />
    </Routes>
  );
}

export default App;
