import { MenuOutlined } from "@ant-design/icons";
import { FC } from "react";

interface IBurgerMenu {
  onClick: (arg: boolean) => void;
  active: boolean;
}

export const BurgerMenu: FC<IBurgerMenu> = ({ onClick, active }) => {
  return (
    <div
      className="fixed right-7 top-5 z-20 text-black"
      onClick={() => onClick(!active)}
    >
      <MenuOutlined className="text-xl" />
    </div>
  );
};
