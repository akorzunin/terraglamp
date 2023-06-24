import { useState } from "react";
import { BurgerMenu } from "../components/burger-menu/BurgerMenu";
import { Footer } from "../components/footer/footer";
import { BookForm } from "../components/forms/book_form";
import { HeaderMobile } from "../components/headers/HeaderMobile";

export const BookFormPage = () => {
  const [mobileMenuActive, setMobileMenuiActive] = useState(false);

  return (
    <>
      <BurgerMenu onClick={setMobileMenuiActive} active={mobileMenuActive} />
      {mobileMenuActive && <HeaderMobile />}
      <BookForm />
      <Footer />
    </>
  );
};
