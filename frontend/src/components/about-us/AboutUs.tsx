import { DoubleRightOutlined } from '@ant-design/icons'

export const AboutUs = () => {
  return (
    <div>
      <div className="pl-2 pr-2">
        <h3 className="mb-4 font-sans font-bold text-3xl ">О нас</h3>
        <p className="mb-10 font-sans font-normal text-xl">
          Наш отель расположен на берегу реки Вятки и окружен сосновым лесом. В
          реке можно купаться, плавать на лодке и рыбачить. Здесь соблюдён
          идеальный баланс - отдых на общей территории, посиделки у костра,
          рыбалка, "тихая охота" и совместное времяпровождение в одном шаге от
          вашего сафари-тента.
        </p>
      </div>
      <div className="relative">
        <img src="./o_nas_1.jpg" alt="" />
        <div className="absolute bottom-2 left-4">
          <p className="font-sans font-bold text-3xl text-white mb-5 ">TERRA GLAMP</p>
          <p className="font-sans font-normal text-sm text-white pr-4">
            Это пространство для восстановления сил: природа, которая согревает
            душу, запах костра, смех друзей, вкусная еда, свежий воздух, закаты
            и рассветы, которые остаются в памяти, «свои» люди вокруг, наша
            искренняя забота о вас
          </p>
          <div className="flex justijy-center mt-2">
            <DoubleRightOutlined rotate={90} className="m-auto text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
