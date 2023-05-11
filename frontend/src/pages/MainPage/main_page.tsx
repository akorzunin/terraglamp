import { AboutUs } from "../../components/about-us/AboutUs";
import { Footer } from "../../components/footer/footer";
import { HeaderMobile } from "../../components/header-mobile/HeaderMobile";
import { Header } from "../../components/header/header";
import { TitleImage } from "../../components/TitleImage/TitleImage";

export const MainPage = () => {
  return (
    <main className="relative">
      {/* <Header /> */}
      <HeaderMobile />
      <TitleImage />
      <AboutUs />
      <div>MainPage</div>
      <Footer />
    </main>
  );
};
