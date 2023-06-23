import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image, Carousel } from "antd";

export const Actions: FC = () => {
  const navigate = useNavigate();
  return (
    <Carousel waitForAnimate dots fade>
      <div className="relative">
        <Image
          className="object-cover"
          src="./carusel_1_wedding.jpg"
          height={400}
        />
        <div className="absolute left-0 top-0 flex w-[100%] flex-col items-center">
          <h4 className="mb-5 mt-10 text-center font-sans text-2xl font-bold text-white drop-shadow-md">
            Проведение свадеб
          </h4>
          <p className="text-center font-sans text-sm font-normal text-white drop-shadow-md">
            В нашем глэмпинге вы можете отпраздновать свадьбу и провести медовый
            месяц. Всем молодоженам мы дарим комплимент (бутылка шампанского и
            фрукты) и предлагаем множество скидок.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="mb-8 mt-5 h-12 w-52 rounded-full border-2 border-solid border-white font-sans text-base font-normal text-white drop-shadow-md"
          >
            Забронировать
          </button>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" src="./carusel_2.jpg" height={400} />
        <div className="absolute left-0 top-0 flex w-[100%] flex-col items-center">
          <h4 className="mb-5 mt-10 text-center font-sans text-xl font-bold text-white drop-shadow">
            Корпоративные мероприятия
          </h4>
          <p className="text-center font-sans text-sm font-normal text-white drop-shadow">
            В нашем Парк-отеле вы можете организовать семинары, тренинги,
            конференции, спортивные соревнования и любые другие важные
            мероприятия для вашей компании: дни рождения, выходные, банкеты.
          </p>
          <Link to="/booking">
            <button
              onClick={() => navigate("/booking")}
              className="mb-8 mt-5 h-12 w-52 rounded-full border-2 border-solid border-white font-sans text-base font-normal text-white drop-shadow"
            >
              Забронировать
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" src="./carusel_3.jpg" height={400} />
        <div className="absolute left-0 top-0 flex w-[100%] flex-col items-center">
          <h4 className="mb-2 mt-10 text-center font-sans text-2xl font-bold text-white drop-shadow">
            Банкеты и вечеринки
          </h4>
          <p className="text-center font-sans text-sm font-normal text-white drop-shadow">
            На территории отеля есть очень большой дом на 50 человек для
            проведения праздников с множеством гостей. Чаще всего, это дом для
            больших свадебных вечеринок, когда праздничная программа рассчитана
            на несколько дней.
          </p>
          <Link to="/booking">
            <button
              onClick={() => navigate("/booking")}
              className="mb-8 mt-2 h-12 w-52 rounded-full border-2 border-solid border-white font-sans text-base font-normal text-white drop-shadow"
            >
              Забронировать
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};
