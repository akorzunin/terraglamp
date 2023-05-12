import { Space } from "antd";
import { FC } from "react";
import { Inst } from "../../icons/Inst";
import { VK } from "../../icons/VK";
import { WhatsApp } from "../../icons/WhatsApp";

const footerTextStyle = "text-black  text-center text-xl font-bold";

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-300">
      <div className="flex flex-col gap-2 pt-5">
        <p className={footerTextStyle}>+7 912 700 95 65</p>
        <p className={footerTextStyle}>terra.glamp@mail.ru</p>
        <p className="text-gray-700 text-center text-sm py-4">
          Кировская обл., Слободской р-н, п.Чирковский завод, дачное
          товарищество "Лесник"
        </p>
        <Space className="justify-center">
          <VK />
          <Inst />
          <WhatsApp />
        </Space>
        <p className="text-gray-700 text-center text-sm py-4">
          © 2023 TerraGlamp. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
