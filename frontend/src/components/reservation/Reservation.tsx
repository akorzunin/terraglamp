import { useNavigate } from "react-router-dom";

export const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mb-20">
      <h3 className="mb-4 font-sans font-bold text-2xl mt-5">
        Забронируйте отдых
      </h3>
      <p className="mb-10 font-sans font-normal text text-center">
        Напишите, в какие дни вы хотите к нам приехать и запланируйте отдых в
        глэмпинге
      </p>
      <button
        onClick={() => navigate("/booking")}
        className="bg-amber-400 font-sans text-base font-bold pt-3 pb-3 pl-10 pr-10 rounded-full"
      >
        Забронировать апартаменты
      </button>
    </div>
  );
};
