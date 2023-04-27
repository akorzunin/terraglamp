import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { BookForm } from "./components/forms/book_form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookForm />
    </>
  );
}

export default App;
