import { BookForm } from "../forms/book_form";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/main_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/book" element={<BookForm />} />
    </Routes>
  );
}

export default App;
