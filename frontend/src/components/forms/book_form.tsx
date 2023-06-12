import dayjs from "dayjs/esm/index.js";

import { useEffect, useState } from "react";
import { FormValidationError } from "./FormValidationError";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../api/booking";
import { BookingForm } from "../../api/client";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  setFormAdults,
  setFormCheckInDate,
  setFormCheckOutDate,
  setFormEmail,
  setFormFirstName,
  setFormLastName,
  setFormPhone,
  validateForm,
} from "../../store/reducers/bookingFormReduser";

const inputStyle = "w-full border-2 border-yellow-400 rounded-md p-2";
const inputSectionStyle = "flex flex-col gap-2";
const errorTextValidator = "text-red-500 text-xs";

export const BookForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tentType, setTentType] = useState<BookingForm.tent_type>(
    BookingForm.tent_type.PRISMA
  );
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [comment, setComment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorText, setErrorText] = useState<string[]>([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const bookingForm = useTypedSelector((state) => state.bookingForm);
  useEffect(() => {
    if (
      // check if required fields filled
      (bookingForm.first_name &&
        bookingForm.last_name &&
        bookingForm.email &&
        bookingForm.phone &&
        bookingForm.tent_type &&
        // bookingForm.check_in_date &&
        // bookingForm.check_out_date &&
        bookingForm.adults) ||
      bookingForm.isFormValid
    ) {
      dispatch(validateForm());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bookingForm.first_name,
    bookingForm.last_name,
    bookingForm.email,
    bookingForm.phone,
    bookingForm.tent_type,
    bookingForm.check_in_date,
    bookingForm.check_out_date,
    bookingForm.adults,
  ]);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await createBooking({
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
    });
    if (!res.success) {
      console.error(res.message);
      if (typeof res.message === "string") {
        setErrorText([res.message]);
        return;
      }
      setErrorText(res.message);
      return;
    }
    setErrorText([]);
    navigate("/booking-success");
    return;
  }

  return (
    <>
      <h2 className="text-center py-4 text-2xl">
        Заполните форму для бронирования
      </h2>
      <form
        onSubmit={submitForm}
        className="flex flex-col items-center gap-4 w-[80%] max-w-screen-md mx-auto text-start mb-8"
      >
        {/* todo MAKE INPUT COMPONTENTS */}
        <div className="flex flex-col gap-4 mb-4 w-[80%] mx-auto text-start">
          <div className={inputSectionStyle}>
            <label>Имя</label>
            <input
              name="first_name"
              className={inputStyle}
              type="text"
              placeholder="Ваше полное имя"
              defaultValue={firstName}
              onChange={(e) => dispatch(setFormFirstName(e.target.value))}
            />
            {bookingForm.firstNameError && (
              <p className={errorTextValidator}>
                Имя должно быть больше 3 символов
              </p>
            )}
          </div>
          <div className={inputSectionStyle}>
            <label>Фамилия</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Ваша фамилия"
              defaultValue={lastName}
              onChange={(e) => dispatch(setFormLastName(e.target.value))}
            />
            {bookingForm.lastNameError && (
              <p className={errorTextValidator}>
                Фамилия должно быть больше 3 символов
              </p>
            )}
          </div>
          <div className={inputSectionStyle}>
            <label>E-mail</label>
            <input
              className={inputStyle}
              type="email"
              placeholder="Ваш e-mail"
              defaultValue={email}
              onChange={(e) => dispatch(setFormEmail(e.target.value))}
            />
            {bookingForm.emailError && (
              <p className={errorTextValidator}>
                Неправильный формат электронной почты
              </p>
            )}
          </div>
          <div className={inputSectionStyle}>
            <label>Телефон</label>
            <input
              className={inputStyle}
              type="tel"
              placeholder="Ваш телефон"
              defaultValue={phone}
              onChange={(e) => dispatch(setFormPhone(e.target.value))}
            />
            {bookingForm.phoneError && (
              <p className={errorTextValidator}>Неправильный формат телефона</p>
            )}
          </div>
          <div className={inputSectionStyle}>
            <label>Тип палатки</label>
            <select
              className={inputStyle}
              defaultValue={tentType}
              onSelect={(e) =>
                setTentType(e.currentTarget.value as BookingForm.tent_type)
              }
            >
              <option defaultValue="prisma">Призма</option>
              <option defaultValue="shater">Шатёр</option>
              <option defaultValue="safariTent">Сафари-тент</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Дата въезда</label>
            <input
              className={inputStyle}
              type="datetime-local"
              defaultValue={checkInDate}
              onChange={(e) => dispatch(setFormCheckInDate(e.target.value))}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Дата выезда</label>
            <input
              className={inputStyle}
              type="datetime-local"
              defaultValue={checkOutDate}
              onChange={(e) => dispatch(setFormCheckOutDate(e.target.value))}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Число взрослых</label>
            <select
              className={inputStyle}
              defaultValue={adult}
              onChange={(e) =>
                dispatch(setFormAdults(parseInt(e.target.value)))
              }
            >
              <option defaultValue="1">1</option>
              <option defaultValue="2">2</option>
              <option defaultValue="3">3</option>
              <option defaultValue="4">4</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Число детей (Дополнительные места)</label>
            <select
              className={inputStyle}
              defaultValue={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
            >
              <option defaultValue="0">0</option>
              <option defaultValue="1">1</option>
              <option defaultValue="2">2</option>
              <option defaultValue="3">3</option>
              <option defaultValue="4">4</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Комментарий</label>
            <textarea
              className={inputStyle}
              placeholder="Ваш комментарий"
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={!bookingForm.isFormValid}
          className="w-64 bg-yellow-400 text-black rounded-full text-sm font-bold py-3 transition-colors hover:bg-orange-400 disabled:bg-gray-400"
        >
          Забронировать аппартаменты
        </button>
        <FormValidationError errorText={errorText} />
      </form>
    </>
  );
};
