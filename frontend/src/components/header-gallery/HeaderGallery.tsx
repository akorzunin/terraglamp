import { Image } from "antd";

export const HeaderGallery = () => {
  return (
    <div className="mt-20 pl-2 pr-2" id="header-gallery">
      <Image src="./o_nas_1.jpg" width={"100%"} />
      <Image src="./o_nas_2.jpg" width={"100%"} />
      <Image src="./o_nas_3.jpg" />
    </div>
  );
};
