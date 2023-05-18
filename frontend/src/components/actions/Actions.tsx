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
        <div className="absolute top-0 left-0 w-[100%] flex flex-col items-center">
          <h4 className="font-sans font-bold text-2xl text-white mb-5 mt-10 text-center drop-shadow-md">
            Проведение свадеб
          </h4>
          <p className="font-sans font-normal text-sm text-white text-center drop-shadow-md">
            В нашем глэмпинге вы можете отпраздновать свадьбу и провести медовый
            месяц. Всем молодоженам мы дарим комплимент (бутылка шампанского и
            фрукты) и предлагаем множество скидок.
          </p>
          <button
            onClick={() => navigate("/book")}
            className="w-52 h-12 drop-shadow-md rounded-full border-solid border-2 border-white font-sans font-normal text-base mt-5 mb-8 text-white"
          >
            Забронировать
          </button>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" src="./carusel_2.jpg" height={400} />
        <div className="absolute top-0 left-0 w-[100%] flex flex-col items-center">
          <h4 className="font-sans font-bold text-xl text-white mb-5 mt-10 text-center drop-shadow">
            Корпоративные мероприятия
          </h4>
          <p className="font-sans font-normal text-sm text-white text-center drop-shadow">
            В нашем Парк-отеле вы можете организовать семинары, тренинги,
            конференции, спортивные соревнования и любые другие важные
            мероприятия для вашей компании: дни рождения, выходные, банкеты.
          </p>
          <Link to="/book">
            <button
              onClick={() => navigate("/book")}
              className="w-52 h-12 drop-shadow rounded-full border-solid border-2 border-white font-sans font-normal text-base mt-5 mb-8 text-white"
            >
              Забронировать
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" src="./carusel_3.jpg" height={400} />
        <div className="absolute top-0 left-0 w-[100%] flex flex-col items-center">
          <h4 className="font-sans font-bold text-2xl text-white mb-2 mt-10 text-center drop-shadow">
            Банкеты и вечеринки
          </h4>
          <p className="font-sans font-normal text-sm text-white text-center drop-shadow">
            На территории отеля есть очень большой дом на 50 человек для
            проведения праздников с множеством гостей. Чаще всего, это дом для
            больших свадебных вечеринок, когда праздничная программа рассчитана
            на несколько дней.
          </p>
          <Link to="/book">
            <button
              onClick={() => navigate("/book")}
              className="w-52 h-12 drop-shadow rounded-full border-solid border-2 border-white font-sans font-normal text-base mt-2 mb-8 text-white"
            >
              Забронировать
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};
