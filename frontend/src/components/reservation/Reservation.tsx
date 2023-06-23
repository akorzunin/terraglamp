import { useNavigate } from "react-router-dom";

export const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-20 flex flex-col items-center">
      <h3 className="mb-4 mt-5 font-sans text-2xl font-bold">
        Забронируйте отдых
      </h3>
      <p className="text mb-10 text-center font-sans font-normal">
        Напишите, в какие дни вы хотите к нам приехать и запланируйте отдых в
        глэмпинге
      </p>
      <button
        onClick={() => navigate("/booking")}
        className="rounded-full bg-amber-400 pb-3 pl-10 pr-10 pt-3 font-sans text-base font-bold"
      >
        Забронировать апартаменты
      </button>
    </div>
  );
};
