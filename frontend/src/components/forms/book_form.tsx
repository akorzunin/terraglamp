import { useEffect, useState } from "react";

const inputStyle = "w-full border-2 border-orange-400 rounded-md p-2";
const inputSectionStyle = "flex flex-col gap-2";

export const BookForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [userName, setUserName] = useState("");
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);

  useEffect(() => {
    if (userName.length > 0) {
      setIsFormValid(true);
    }
  }, [userName]);

  const submitForm = () => {
    fetch("http://localhost:8888/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        adult,
        children,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2 className="py-4 text-2xl">Заполните форму для бронирования</h2>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-4 w-[80%] mx-auto text-start"
      >
        <div className="flex flex-col gap-4 mb-4 w-[80%] mx-auto text-start">
          <div className={inputSectionStyle}>
            <label>Тип палатки</label>
            <select className={inputStyle}>
              <option value="Призма">Призма</option>
              <option value="Шатёр">Шатёр</option>
              <option value="Сафари">Сафари-тент</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Дата бронироваиня</label>
            <input className={inputStyle} type="datetime-local" />
          </div>
          <div className={inputSectionStyle}>
            <label>Число взрослых</label>
            <select
              className={inputStyle}
              value={adult}
              onChange={(e) => setAdult(parseInt(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Число детей</label>
            <select
              className={inputStyle}
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>E-mail</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваш e-mail"
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Имя</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваше полное имя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Телефон</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваш телефон"
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Комментарий</label>
            <textarea className={inputStyle} placeholder="Ваш комментарий" />
          </div>
        </div>
        <button
          disabled={!isFormValid}
          className=" mx-auto bg-yellow-400 text-black rounded-3xl text-sm	 font-bold px-14 py-3 transition-colors hover:bg-orange-400"
        >
          Забронировать аппартаменты
        </button>
      </form>
    </>
  );
};
