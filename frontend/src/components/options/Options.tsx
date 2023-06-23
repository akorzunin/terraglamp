import { Image, Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const buttonClassName =
  "w-52 h-12 ml-auto mr-auto rounded-full border-solid border-2 border-black font-sans font-normal text-base mt-5 mb-8";

export const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 pl-2 pr-2" id="tents">
      <div className="flex flex-col">
        <h3 className="mb-8 text-center font-sans text-2xl font-bold">
          Варианты размещения
        </h3>
        <p className="mb-10 pl-10 pr-10 text-center font-sans text-base font-normal">
          Для создания интерьеров мы используем только экологичные материалы
        </p>
        <Carousel waitForAnimate>
          <Image src="./r1c1_prisma.jpg" />
          <Image src="./r3c1.jpg" />
          {/* <Image src="./r4c1.jpg" /> TODO add this image */}
        </Carousel>
        <h4 className="mt-7 font-sans text-2xl font-bold">Призма</h4>
        <p className="font-sans text-base font-normal">Стоимость аренды:</p>
        <p className="mb-5 font-sans text-base font-normal">
          С пн-чт: 4 500 р. С пт-вс: 6 000 р.
        </p>
        <ul className="font-sans text-base font-normal">
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
        <button
          onClick={() => navigate("/book?tentType=prisma")}
          className={`${buttonClassName}`}
        >
          Забронировать
        </button>
      </div>
      <div className="flex flex-col">
        <Carousel waitForAnimate>
          <Image src="./shater.jpg" />
          <Image src="./r3c1.jpg" />
          <Image src="./shater.jpg" />
        </Carousel>
        <h4 className="mt-7 font-sans text-2xl font-bold">Шатёр</h4>
        <p className="font-sans text-base font-normal">Стоимость аренды:</p>
        <p className="mb-5 font-sans text-base font-normal">
          С пн-чт: 3 500 р. С пт-вс: 4 500 р.
        </p>
        <ul className="font-sans text-base font-normal">
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
        <button
          onClick={() => navigate("/booking")}
          className={`${buttonClassName}`}
        >
          Забронировать
        </button>
      </div>
      <div className="flex flex-col">
        <Carousel waitForAnimate>
          <Image src="./safaritent.jpg" height={405} />
          <Image src="./r3c1.jpg" />
          <Image src="./shater.jpg" />
        </Carousel>
        <h4 className="mt-7 font-sans text-2xl font-bold">Сафари-тент</h4>
        <p className="font-sans text-base font-normal">Стоимость аренды:</p>
        <p className="mb-5 font-sans text-base font-normal">
          С пн-чт: 6 000 р. С пт-вс: 7 000 р.
        </p>
        <ul className="font-sans text-base font-normal">
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
        <button
          onClick={() => navigate("/book?tentType=safaritent")}
          className={`${buttonClassName}`}
        >
          Забронировать
        </button>
      </div>
    </div>
  );
};
