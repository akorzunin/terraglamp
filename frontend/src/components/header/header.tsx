import { useNavigate } from "react-router-dom";

const headerElementClass = "text-black text-1xl ";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between w-[60%] mx-auto bg-transparent sticky top-0 left-0 z-50 max-h-20">
      <div className="flex items-center gap-3">
        <img src="./logo.jpg" alt="logo" className="w-20 h-20"></img>
        <p className={headerElementClass}>О НАС</p>
        <p className={headerElementClass}>РАЗВЛЕЧЕНИЯ</p>
        <p className={headerElementClass}>ПАЛАТКИ</p>
      </div>
      <div className="flex justify-end items-center gap-3">
        <p>+7 912 700 95 65</p>
        <div className="flex gap-2">
          <p>VK</p>
          <p>IN</p>
          <p>WA</p>
        </div>
        <button
          className="bg-yellow-400 text-black rounded-3xl text-sm	 font-bold px-7 py-2 transition-colors hover:bg-orange-400"
          onClick={() => navigate("/book")}
        >
          Забронировать
        </button>
      </div>
    </header>
  );
};
