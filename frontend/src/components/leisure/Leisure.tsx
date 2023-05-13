import { Image } from "antd";

export const Leisure = () => {
  return (
    <div className="flex flex-col items-center mt-10 pl-3 pr-3">
      <h3 className="mb-4 font-sans font-bold text-3xl ">Развлечения</h3>
      <p className="mb-10 font-sans font-normal text-xl">
        На территории глэмпинга множество семейных развлечений на любой вкус
      </p>
      <Image src="./plaj_page.png" width={140} />
      <h3 className="mb-4 font-sans font-bold text-3xl mt-5">Пляж</h3>
      <p className="mb-10 font-sans font-normal text-xl">
        В 100м от нашего глэмпинга находится песчаный пляж, протяженностью более
        километра. Где каждый получит удовольствие от купания в реке и тёплого
        песочка. Здесь можно устроить романтическое свидание на закате.
      </p>
      <Image src="./rybalka.png" width={140} />
      <h3 className="mb-4 font-sans font-bold text-3xl mt-5">Рыбалка</h3>
      <p className="mb-10 font-sans font-normal text-xl">
        На реке Вятка вы сможете насладиться и тишиной и удачной рыбалкой в
        окружении природы. В реке Вятка можно поймать : щуку, судака, окуня,
        налима и даже стерлядь.
      </p>
      <Image src="./sport.png" width={140} />
      <h3 className="mb-4 font-sans font-bold text-3xl mt-5">Спорт</h3>
      <p className="mb-10 font-sans font-normal text-xl">
        В глэмпинге есть "Босоногая тропа", которая с помощью массажа стоп
        активирует прилив жизненной энергии, а так же настольный теннис. Занятия
        йогой на террасе вашего домика. Велопрогулки по сосновому бору и по
        берегу реки Вятки снимают стресс и объединяют с природой.
      </p>
    </div>
  );
};
