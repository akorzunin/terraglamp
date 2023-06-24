import { AboutUs } from "../../components/about-us/AboutUs";
import { Actions } from "../../components/actions/Actions";
import { Footer } from "../../components/footer/footer";
import { Gallery } from "../../components/gallery/Gallery";
import { HeaderGallery } from "../../components/header-gallery/HeaderGallery";
import { Leisure } from "../../components/leisure/Leisure";
import { Options } from "../../components/options/Options";
import { Reservation } from "../../components/reservation/Reservation";
import { TitleImage } from "../../components/title-image/TitleImage";
import { CommonHeader } from "../../components/headers/CommonHeader";

export const MainPage = () => {
  return (
    <main className="relative grid h-full w-full grid-cols-1">
      <CommonHeader />
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
