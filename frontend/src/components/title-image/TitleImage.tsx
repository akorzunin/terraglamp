import { FC } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";

interface ITitleImage {
  isHeader?: boolean;
  text: string;
  image: string;
}

export const TitleImage: FC<ITitleImage> = ({ isHeader, text, image }) => {
  return (
    <div className="relative">
      <img src={image} alt="Кемпинг" />
      <div className="absolute bottom-2 left-4">
        {isHeader && (
          <p className="font-sans font-bold text-3xl text-white">Глэмпинг</p>
        )}
        <p className="font-sans font-bold text-3xl text-white mb-5 ">
          TERRA GLAMP
        </p>
        <p className="font-sans font-normal text-sm text-white pr-4">{text}</p>
        <div className="flex justijy-center mt-2">
          <DoubleRightOutlined
            rotate={90}
            className="m-auto text-white text-3xl"
          />
        </div>
      </div>
    </div>
  );
};
