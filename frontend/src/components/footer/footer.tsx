const footerTextStyle = "text-black  text-center text-xl font-bold";

export const Footer = () => {
  return (
    <footer className="bg-slate-300">
      <div className="flex flex-col gap-2 max-w-[40%] mx-auto pt-4">
        <p className={footerTextStyle}>+7 912 700 95 65</p>
        <p className={footerTextStyle}>terra.glamp@mail.ru</p>
        <p className="text-gray-700 text-center text-sm py-4">
          Кировская обл., Слободской р-н, п.Чирковский завод, дачное
          товарищество "Лесник"
        </p>
        <div className="flex gap-2 justify-center">
          <p>VK</p>
          <p>IN</p>
          <p>WA</p>
        </div>
        <p className="text-gray-700 text-center text-sm py-4">
          © 2023 TerraGlamp. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
