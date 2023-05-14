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
      <div className="flex justify-center items-center h-screen">
        Booking success
      </div>
      <Footer />
    </>
  );
};
