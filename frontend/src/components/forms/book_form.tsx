// import dayjs from "dayjs/esm/";

import { useEffect, useState } from "react";
import { FormValidationError } from "./FormValidationError";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../api/booking";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  FormTentType,
  setFormAdults,
  setFormCheckInDate,
  setFormCheckOutDate,
  setFormChildren,
  setFormComment,
  setFormEmail,
  setFormFirstName,
  setFormLastName,
  setFormPhone,
  setFormTentType,
  validateForm,
} from "../../store/reducers/bookingFormReduser";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const dateFormat = "DD.MM.YYYY";

const inputStyle = "w-full border-2 border-yellow-400 rounded-md p-2";
const inputSectionStyle = "flex flex-col gap-2";
const errorTextValidator = "text-red-500 text-xs";

export const BookForm = () => {
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
        bookingForm.check_in_date &&
        bookingForm.check_out_date &&
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
      first_name: bookingForm.first_name,
      last_name: bookingForm.last_name,
      email: bookingForm.email,
      phone: bookingForm.phone,
      tent_type: bookingForm.tent_type,
      check_in_date: bookingForm.check_in_date,
      check_out_date: bookingForm.check_out_date,
      adults: bookingForm.adults,
      children: bookingForm.children,
      total_members: bookingForm.adults + bookingForm.children,
      comment: bookingForm.comment,
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
            <label>Тип палатки</label>
            <select
              className={inputStyle}
              defaultValue={bookingForm.tent_type}
              onChange={(e) =>
                dispatch(setFormTentType(e.currentTarget.value as FormTentType))
              }
            >
              <option defaultValue="prisma">Призма</option>
              <option defaultValue="shater">Шатёр</option>
              <option defaultValue="safariTent">Сафари-тент</option>
            </select>
          </div>
          <div className={inputSectionStyle}>
            <label>Период бронирования</label>
            <RangePicker
              className={inputStyle}
              disabledDate={(currentDate) => {
                return currentDate.isBefore(dayjs());
              }}
              placement="bottomRight"
              format={dateFormat}
              size="large"
              picker="date"
              onChange={(dateRange) => {
                if (!dateRange) {
                  return;
                }
                if (!dateRange[0] || !dateRange[1]) {
                  return;
                }
                dispatch(setFormCheckInDate(dateRange[0]?.format()));
                dispatch(setFormCheckOutDate(dateRange[1]?.format()));
              }}
              inputReadOnly={true}
            />
          </div>
          <div className={inputSectionStyle}>
            <label>Имя</label>
            <input
              name="first_name"
              className={inputStyle}
              type="text"
              placeholder="Ваше полное имя"
              defaultValue={bookingForm.first_name}
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
              defaultValue={bookingForm.last_name}
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
              defaultValue={bookingForm.email}
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
              defaultValue={bookingForm.phone}
              onChange={(e) => dispatch(setFormPhone(e.target.value))}
            />
            {bookingForm.phoneError && (
              <p className={errorTextValidator}>Неправильный формат телефона</p>
            )}
          </div>
          <div className={inputSectionStyle}>
            <label>Число взрослых</label>
            <select
              className={inputStyle}
              defaultValue={bookingForm.adults}
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
              defaultValue={bookingForm.children}
              onChange={(e) =>
                dispatch(setFormChildren(parseInt(e.target.value)))
              }
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
              defaultValue={bookingForm.comment}
              onChange={(e) => dispatch(setFormComment(e.target.value))}
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
