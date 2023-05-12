import { Image, Space } from "antd";

export const Gallery = () => {
  return (
    <div className="pl-2 pr-2">
      <Image src="./r1c1_prisma.jpg" />
        <Image src="./r1c2.jpg" />
        <Image src="./r1c3.jpg" />
      <Space>
      </Space>
      <Image src="./r2c3.jpg" />
      <Image src="./r3c1.jpg" />
      <Image src="./r3c2.jpg" />
    </div>
  );
};
