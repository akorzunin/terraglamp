import { useEffect, useState } from "react";
import * as dayjs from "dayjs";

const inputStyle = "w-full border-2 border-yellow-400 rounded-md p-2";
const inputSectionStyle = "flex flex-col gap-2";

export const BookForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tentType, setTentType] = useState("prisma");
  const [checkInDate, setCheckInDate] = useState(dayjs().format());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().format());
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [comment, setComment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (firstName.length > 0) {
      setIsFormValid(true);
    }
  }, [firstName]);

  const submitForm = () => {
    console.log(import.meta.env.VITE_API_URL);

    fetch(`${import.meta.env.VITE_API_URL}/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        tent_type: tentType,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        adults: adult,
        children: children,
        total_members: adult + children,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // react redirect to success page
          window.location.href = "/#/booking-success";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2 className="text-center py-4 text-2xl">
        Заполните форму для бронирования
      </h2>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-4 w-[80%] max-w-screen-md mx-auto text-start"
      >
        <div className="flex flex-col gap-4 mb-4 w-[80%] mx-auto text-start">
          <div className={inputSectionStyle}>
            <label>Имя</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваше полное имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Фамилия</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваша фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>E-mail</label>
            <input
              className={inputStyle}
              type="email"
              placeholder="Ваш e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Телефон</label>
            <input
              className={inputStyle}
              type="tel"
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Тип палатки</label>
            <select
              className={inputStyle}
              value={tentType}
              onChange={(e) => setTentType(e.target.value)}
            >
              <option value="prisma">Призма</option>
              <option value="shater">Шатёр</option>
              <option value="safariTent">Сафари-тент</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Дата въезда</label>
            <input
              className={inputStyle}
              type="datetime-local"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Дата выезда</label>
            <input
              className={inputStyle}
              type="datetime-local"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
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
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Комментарий</label>
            <textarea
              className={inputStyle}
              placeholder="Ваш комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={!isFormValid}
          className=" mx-auto bg-yellow-400 text-black rounded-3xl text-sm	 font-bold px-14 py-3 transition-colors hover:bg-orange-400 mb-8"
        >
          Забронировать аппартаменты
        </button>
      </form>
    </>
  );
};
