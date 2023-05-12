import { AboutUs } from "../../components/about-us/AboutUs";
import { Footer } from "../../components/footer/footer";
import { Gallery } from "../../components/gallery/Gallery";
import { HeaderMobile } from "../../components/header-mobile/HeaderMobile";
import { Header } from "../../components/header/header";
import { Leisure } from "../../components/leisure/Leisure";
import { Options } from "../../components/options/Options";
import { TitleImage } from "../../components/TitleImage/TitleImage";

export const MainPage = () => {
  return (
    <main className="relative">
      <Header />
      <HeaderMobile />
      <TitleImage />
      <AboutUs />
      <Leisure />
      <Gallery />
      <Options />
      <div>MainPage</div>
      <Footer />
    </main>
  );
};
