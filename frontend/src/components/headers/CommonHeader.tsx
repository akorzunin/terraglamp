import { useState } from "react";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { HeaderMobile } from "./HeaderMobile";
import { Header } from "./header";

export const CommonHeader = () => {
  const [mobileMenuActive, setMobileMenuiActive] = useState(false);
  return (
    <>
      <div className="sm:hidden">
        <BurgerMenu onClick={setMobileMenuiActive} active={mobileMenuActive} />
        <HeaderMobile mobileMenuActive={mobileMenuActive} />
      </div>
      <div className="hidden sm:block">
        <Header />
      </div>
    </>
  );
};
