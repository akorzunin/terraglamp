import { Image, Space } from "antd";
import { VK } from "../../icons/VK";
import { Inst } from "../../icons/Inst";
import { WhatsApp } from "../../icons/WhatsApp";
import { useNavigate } from "react-router-dom";

const headerClassName = "font-sans font-normal text-sm text-white";
const headerTitleClassName =
  "hover:opacity-60 transition-opacity cursor-pointer";

export const HeaderMobile = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 z-10 flex w-full flex-col items-center bg-[rgba(0,0,0,0.5)] pb-5 pt-5 aria-hidden:animate-pulse">
      <Image src="./logo.jpg" width={80} height={80} />
      <p
        className={`${headerClassName} mt-8 ${headerTitleClassName}`}
        onClick={() => scrollTo("about-us")}
      >
        О НАС
      </p>
      <p
        className={`${headerClassName} mt-2 ${headerTitleClassName}`}
        onClick={() => scrollTo("leisure")}
      >
        РАЗВЛЕЧЕНИЯ
      </p>
      <p
        className={`${headerClassName} mt-2 ${headerTitleClassName}`}
        onClick={() => scrollTo("tents")}
      >
        ПАЛАТКИ
      </p>
      <p className={`${headerClassName} mt-5`}>+7 912 700 95 65</p>
      <Space className="mt-2 justify-center">
        <VK />
        <Inst />
        <WhatsApp />
      </Space>
      <button
        onClick={() => navigate("/booking")}
        className="mt-5 rounded-full bg-amber-400 pb-3 pl-10 pr-10 pt-3 font-sans text-base font-bold"
      >
        Забронировать
      </button>
    </header>
  );
};
