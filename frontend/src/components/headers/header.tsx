import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import { VK } from "../../icons/VK";
import { Inst } from "../../icons/Inst";
import { WhatsApp } from "../../icons/WhatsApp";

const headerElementClass = "text-white text-1xl ";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed z-50 w-screen bg-[rgba(0,0,0,0.5)]">
      <div className="mx-auto flex max-h-20 w-[90%] justify-between bg-transparent">
        <div className="flex items-center gap-6">
          <img src="./logo.jpg" alt="logo" className="h-20 w-20"></img>
          <p className={headerElementClass}>О НАС</p>
          <p className={headerElementClass}>РАЗВЛЕЧЕНИЯ</p>
          <p className={headerElementClass}>ПАЛАТКИ</p>
        </div>
        <div className="flex items-center justify-end gap-6">
          <p className="text-2xl font-bold text-white">+7 912 700 95 65</p>
          <div className="flex items-center justify-end gap-6">
            <Space className="gap-2">
              <VK />
              <Inst />
              <WhatsApp />
            </Space>
            <button
              className="rounded-3xl bg-yellow-400 px-7 py-2	 text-sm font-bold text-black transition-colors hover:bg-orange-400"
              onClick={() => navigate("/booking")}
            >
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
