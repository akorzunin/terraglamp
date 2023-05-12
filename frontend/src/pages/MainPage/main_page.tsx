import { useState } from "react";
import { AboutUs } from "../../components/about-us/AboutUs";
import { Actions } from "../../components/actions/Actions";
import { BurgerMenu } from "../../components/burger-menu/BurgerMenu";
import { Footer } from "../../components/footer/footer";
import { Gallery } from "../../components/gallery/Gallery";
import { HeaderGallery } from "../../components/header-gallery/HeaderGallery";
import { HeaderMobile } from "../../components/header-mobile/HeaderMobile";
import { Header } from "../../components/header/header";
import { Leisure } from "../../components/leisure/Leisure";
import { Options } from "../../components/options/Options";
import { Reservation } from "../../components/reservation/Reservation";
import { TitleImage } from "../../components/title-image/TitleImage";

export const MainPage = () => {
  const [mobileMenuActive, setMobileMenuiActive] = useState(false);
  return (
    <main className="relative">
      <BurgerMenu onClick={setMobileMenuiActive} active={mobileMenuActive} />
      {/* <Header /> */}
      {mobileMenuActive && <HeaderMobile />}
      <TitleImage
        isHeader
        image="./main.jpg"
        text="Здесь можно проникнуться шорохом травы, дуновением ветра, 
        шумом течения реки. У нас наполняешься энергией, восстанавливаешь 
        силы и встречаешь именно то, что ищешь"
      />
      <HeaderGallery />
      <AboutUs />
      <Leisure />
      <Gallery />
      <Options />
      <Actions />
      <Reservation />
      <Footer />
    </main>
  );
};
