import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { TitleImage } from "../../components/TitleImage/TitleImage";

export const MainPage = () => {
  return (
    <main className="relative">
      <Header />
      <TitleImage />
      <div>MainPage</div>
      <Footer />
    </main>
  );
};
