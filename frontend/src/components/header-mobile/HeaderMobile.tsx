import { Image, Space } from "antd";
import { VK } from "../../icons/VK";
import { Inst } from "../../icons/Inst";
import { WhatsApp } from "../../icons/WhatsApp";

export const HeaderMobile = () => {
  return (
    <header className="bg-[rgba(0,0,0,0.5)] flex flex-col items-center pt-5 pb-5">
      <Image src="./logo.jpg" width={80} height={80} />
      <p className="font-sans font-normal text-sm text-white mt-8">О НАС</p>
      <p className="font-sans font-normal text-sm text-white mt-2">
        РАЗВЛЕЧЕНИЯ
      </p>
      <p className="font-sans font-normal text-sm text-white mt-2">ПАЛАТКИ</p>
      <p className="font-sans font-normal text-sm text-white mt-5">
        +7 912 700 95 65
      </p>
      <Space className="justify-center mt-2">
        <VK />
        <Inst />
        <WhatsApp />
      </Space>
      <button className="bg-amber-400 font-sans text-base font-bold pt-3 pb-3 pl-10 pr-10 rounded-full mt-5">
        Забронировать
      </button>
    </header>
  );
};
