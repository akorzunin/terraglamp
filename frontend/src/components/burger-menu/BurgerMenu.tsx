import { MenuOutlined } from "@ant-design/icons";
import { FC } from "react";

interface IBurgerMenu {
  onClick: (arg: boolean) => void;
  active: boolean;
}

export const BurgerMenu: FC<IBurgerMenu> = ({onClick, active}) => {
  return (
    <div className="fixed right-5 top-5 text-black z-10" onClick={() => onClick(!active)}>
      <MenuOutlined className="text-xl"/>
    </div>
  );
};
