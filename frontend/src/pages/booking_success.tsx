import { useState } from "react";
import { BurgerMenu } from "../components/burger-menu/BurgerMenu";
import { Footer } from "../components/footer/footer";
import { HeaderMobile } from "../components/header-mobile/HeaderMobile";

export const BookingSuccess = () => {
  const [mobileMenuActive, setMobileMenuiActive] = useState(false);

  return (
    <>
      <BurgerMenu onClick={setMobileMenuiActive} active={mobileMenuActive} />
      {mobileMenuActive && <HeaderMobile />}
      <div className="flex h-screen items-center justify-center">
        Booking success
      </div>
      <Footer />
    </>
  );
};
