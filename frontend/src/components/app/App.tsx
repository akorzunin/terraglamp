import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/main_page";
import { BookFormPage } from "../../pages/book_from_page";
import { BookingSuccess } from "../../pages/booking_success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/booking" element={<BookFormPage />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
    </Routes>
  );
}

export default App;
