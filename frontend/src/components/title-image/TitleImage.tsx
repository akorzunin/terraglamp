import { FC } from "react";

import { DoubleRightOutlined } from "@ant-design/icons";

interface ITitleImage {
  isHeader?: boolean;
  text: string;
  image: string;
}

export const TitleImage: FC<ITitleImage> = ({
  isHeader = false,
  text,
  image,
}) => {
  return (
    <div className="relative w-full">
      <img
        src={image}
        alt="Кемпинг"
        className="max-h-screen w-full object-cover"
      />
      <div className="absolute bottom-2 left-4">
        {isHeader && (
          <p className="font-sans text-3xl font-bold text-white">Глэмпинг</p>
        )}
        <p className="mb-5 font-sans text-3xl font-bold text-white">
          TERRA GLAMP
        </p>
        <p className="pr-4 font-sans text-sm font-normal text-white">{text}</p>
        <div className="justijy-center mt-2 flex">
          <DoubleRightOutlined
            onClick={() => {
              document
                .querySelector(isHeader ? "#header-gallery" : "#leisure")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            rotate={90}
            className="m-auto animate-bounce cursor-pointer text-3xl text-white transition-opacity hover:opacity-60"
          />
        </div>
      </div>
    </div>
  );
};
