import { Image } from "antd";

export const Leisure = () => {
  return (
    <div className="mt-10 flex flex-col items-center pl-3 pr-3" id="leisure">
      <h3 className="mb-4 font-sans text-3xl font-bold ">Развлечения</h3>
      <p className="mb-10 font-sans text-xl font-normal">
        На территории глэмпинга множество семейных развлечений на любой вкус
      </p>
      <Image src="./plaj_page.png" width={140} />
      <h3 className="mb-4 mt-5 font-sans text-3xl font-bold">Пляж</h3>
      <p className="mb-10 font-sans text-xl font-normal">
        В 100м от нашего глэмпинга находится песчаный пляж, протяженностью более
        километра. Где каждый получит удовольствие от купания в реке и тёплого
        песочка. Здесь можно устроить романтическое свидание на закате.
      </p>
      <Image src="./rybalka.png" width={140} />
      <h3 className="mb-4 mt-5 font-sans text-3xl font-bold">Рыбалка</h3>
      <p className="mb-10 font-sans text-xl font-normal">
        На реке Вятка вы сможете насладиться и тишиной и удачной рыбалкой в
        окружении природы. В реке Вятка можно поймать : щуку, судака, окуня,
        налима и даже стерлядь.
      </p>
      <Image src="./sport.png" width={140} />
      <h3 className="mb-4 mt-5 font-sans text-3xl font-bold">Спорт</h3>
      <p className="mb-10 font-sans text-xl font-normal">
        В глэмпинге есть "Босоногая тропа", которая с помощью массажа стоп
        активирует прилив жизненной энергии, а так же настольный теннис. Занятия
        йогой на террасе вашего домика. Велопрогулки по сосновому бору и по
        берегу реки Вятки снимают стресс и объединяют с природой.
      </p>
    </div>
  );
};
