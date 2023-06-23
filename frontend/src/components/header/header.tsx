import { useNavigate } from "react-router-dom";

const headerElementClass = "text-black text-1xl ";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky left-0 top-0 z-50 bg-[rgba(0,0,0,0.5)]">
      <div className="mx-auto flex max-h-20 w-[60%] justify-between bg-transparent">
        <div className="flex items-center gap-3">
          <img src="./logo.jpg" alt="logo" className="h-20 w-20"></img>
          <p className={headerElementClass}>О НАС</p>
          <p className={headerElementClass}>РАЗВЛЕЧЕНИЯ</p>
          <p className={headerElementClass}>ПАЛАТКИ</p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <p>+7 912 700 95 65</p>
          <div className="flex gap-2">
            <p>VK</p>
            <p>IN</p>
            <p>WA</p>
          </div>
          <button
            className="rounded-3xl bg-yellow-400 px-7 py-2	 text-sm font-bold text-black transition-colors hover:bg-orange-400"
            onClick={() => navigate("/booking")}
          >
            Забронировать
          </button>
        </div>
      </div>
    </header>
  );
};
