import { Image, Carousel } from "antd";

export const Actions = () => {
  return (
    <Carousel autoplay waitForAnimate>
      <div className="relative">
        <Image src="./carusel_1_wedding.jpg" height={300} />
        <div className="absolute top-0 left-0 w-[100%] flex flex-col items-center">
          <h4 className="font-sans font-bold text-2xl text-white mb-5 mt-10 text-center drop-shadow-md">
            Проведение свадеб
          </h4>
          <p className="font-sans font-normal text-sm text-white text-center drop-shadow-md">
            В нашем глэмпинге вы можете отпраздновать свадьбу и провести медовый
            месяц. Всем молодоженам мы дарим комплимент (бутылка шампанского и
            фрукты) и предлагаем множество скидок.
          </p>
          <button className="w-[184px] h-[56px] drop-shadow-md rounded-3xl border-solid border-2 border-white font-sans font-normal text-base mt-5 mb-8 text-white">
            Забронировать
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src="./carusel_2.jpg" height={300} />
        <div className="absolute top-0 left-0 w-[100%] flex flex-col items-center">
          <h4 className="font-sans font-bold text-xl text-white mb-5 mt-10 text-center drop-shadow">
            Корпоративные мероприятия
          </h4>
          <p className="font-sans font-normal text-sm text-white text-center drop-shadow">
            В нашем Парк-отеле вы можете организовать семинары, тренинги,
            конференции, спортивные соревнования и любые другие важные
            мероприятия для вашей компании: дни рождения, выходные, банкеты.
          </p>
          <button className="drop-shadow w-[184px] h-[56px] rounded-3xl border-solid border-2 border-white font-sans font-normal text-base mt-5 mb-8 text-white">
            Забронировать
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src="./carusel_3.jpg" height={300} />
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
          <button className="drop-shadow w-[184px] h-[56px] rounded-3xl border-solid border-2 border-white font-sans font-normal text-base mt-2 mb-8 text-white">
            Забронировать
          </button>
        </div>
      </div>
    </Carousel>
  );
};
