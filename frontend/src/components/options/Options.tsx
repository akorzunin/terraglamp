import { Image, Carousel } from "antd";

export const Options = () => {
  return (
    <div className="mt-10 pr-2 pl-2">
      <div className="flex flex-col">
        <h3 className="mb-8 font-sans font-bold text-2xl text-center">
          Варианты размещения
        </h3>
        <p className="mb-10 font-sans font-normal text-base text-center pr-10 pl-10">
          Для создания интерьеров мы используем только экологичные материалы
        </p>
        <Carousel autoplay waitForAnimate>
          <Image src="./r1c1_prisma.jpg" />
          <Image src="./r3c1.jpg" />
          {/* <Image src="./r4c1.png" /> */}
        </Carousel>
        <h4 className="font-sans font-bold text-2xl mt-7">Призма</h4>
        <p className="font-sans font-normal text-base">Стоимость аренды:</p>
        <p className="font-sans font-normal text-base mb-5">
          С пн-чт: 4 500 р. С пт-вс: 6 000 р.
        </p>
        <ul className="font-sans font-normal text-base">
          <li>
            Уютная палатка с двумя односпальными (или одной двуспальной)
            кроватями, белоснежным постельным бельём и всем необходимым для
            комфортного пребывания.
          </li>
          <li>Терраса с видом на реку Вятку.</li>
          <li>Завтрак входит в стоимость.</li>
          <li>Летняя кухня и санитарный блок в общей зоне.</li>
          <li>
            Дети до 6 лет размещаются бесплатно, без предоставления
            дополнительного спального места. Время заезда с 14:00 , время выезда
            до 12:00.
          </li>
        </ul>
        <button className="w-[184px] h-[56px] rounded-3xl border-solid border-2 border-black font-sans font-normal text-base mt-5 mb-8">
          Забронировать
        </button>
      </div>
      <div className="flex flex-col">
        <Image src="./shater.jpg" />
        <h4 className="font-sans font-bold text-2xl mt-7">Шатёр</h4>
        <p className="font-sans font-normal text-base">Стоимость аренды:</p>
        <p className="font-sans font-normal text-base mb-5">
          С пн-чт: 3 500 р. С пт-вс: 4 500 р.
        </p>
        <ul className="font-sans font-normal text-base">
          <li>Проживание в двухместном шатре.</li>
          <li>
            Уютная палатка с двумя односпальными кроватями, белоснежным
            постельным бельём и всем необходимым для комфортного пребывания.
          </li>
          <li>Терраса с видом на реку Вятку.</li>
          <li>Завтрак входит в стоимость.</li>
          <li>
            Летняя кухня и санитарный блок в общей зоне. Обращаем Ваше внимание,
            что в данном шатре дополнительное спальное место не предусмотрено.
          </li>
          <li>Время заезда с 14:00 , время выезда до 12:00.</li>
        </ul>
        <button className="w-[184px] h-[56px] rounded-3xl border-solid border-2 border-black font-sans font-normal text-base mt-5 mb-8">
          Забронировать
        </button>
      </div>
      <div className="flex flex-col">
        <Image src="./safaritent.jpg" />
        <h4 className="font-sans font-bold text-2xl mt-7">Сафари-тент</h4>
        <p className="font-sans font-normal text-base">Стоимость аренды:</p>
        <p className="font-sans font-normal text-base mb-5">
          С пн-чт: 6 000 р. С пт-вс: 7 000 р.
        </p>
        <ul className="font-sans font-normal text-base">
          <li>
            Уютная палатка с двумя односпальными (или одной двуспальной)
            кроватями, белоснежным постельным бельём и всем необходимым для
            комфортного пребывания.
          </li>
          <li>Терраса с мебелью.</li>
          <li>Завтрак входит в стоимость.</li>
          <li>Летняя кухня и санитарный блок в общей зоне.</li>
          <li>
            Дети до 6 лет размещаются бесплатно, без предоставления
            дополнительного спального места. Время заезда с 14:00 , время выезда
            до 12:00.
          </li>
        </ul>
        <button className="w-[184px] h-[56px] rounded-3xl border-solid border-2 border-black font-sans font-normal text-base mt-5 mb-8">
          Забронировать
        </button>
      </div>
    </div>
  );
};
