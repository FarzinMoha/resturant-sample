import React, { useState } from "react";
import "./Form.style.scss";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
const nameRegex = /^[a-zA-Z\s]*$/;
const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^\+[0-9]\d{10,14}$/;
const errors = {
  nameErr: "",
  emailErr: "",
  phoneErr: "",
  dateErr: "",
  messageErr: "",
};
const initUser = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  people: "",
};
const Form = ({ setShowModal }) => {
  const [user, setUser] = useState(initUser);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(errors);
  const [error, setError] = useState(errors);
  const { name, email, phone, date, people, time } = user;
  const { nameErr, emailErr, phoneErr, messageErr } = err;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    switch (name) {
      case "name":
        if (!nameRegex.test(value)) {
          setErr({ ...err, nameErr: "Name is not valid!" });
          setError(true);
        } else {
          setErr({ ...err, nameErr: "" });
          setError(false);
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          setErr({ ...err, emailErr: "Email is not valid!" });
          setError(true);
        } else {
          setErr({ ...err, emailErr: "" });
          setError(false);
        }
        break;
      case "phone":
        if (!phoneRegex.test(value)) {
          setErr({
            ...err,
            phoneErr: "phone is not valid! (example:+905546405389)",
          });
          setError(true);
        } else {
          setErr({ ...err, phoneErr: "" });
          setError(false);
        }
        break;
      default:
        break;
    }
  };
  const isoDate = user.date ? new Date(user.date).toISOString() : null;
  const USER = {
    name: name,
    email: email,
    phone: phone,
    date: isoDate,
    persons: parseInt(people),
    time: time,
  };
  const onClickHandler = () => {
    setModal(false);
    setShowModal(false);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(true);
    console.log(USER);
    try {
      await axios
        .post("https://30c9-78-162-47-202.eu.ngrok.io/reserve", USER)
        .then((res) => {
          if (res.status === 201) {
            setLoading(false);
          }
        });
      setModal("Ti Asspetiamo. Check Your Mailbox");
      setUser(initUser);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setModal(error.message);
    }
  };
  return (
    <div className="form-section">
      <p className="form-text1">BOOK A TABLE FOR GOOD TIMES</p>
      <p className="form-text2">AFTER THAT WE SET TIME WITH YOU</p>
      <form className="form-container" onSubmit={onSubmitHandler}>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {nameErr ? <p className="form-err">{nameErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {emailErr ? <p className="form-err">{emailErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {phoneErr ? <p className="form-err">{phoneErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="date"
            placeholder="DATE"
            name="date"
            value={date}
            onChange={(event) => onChangeHandler(event)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            type="number"
            className="form-input"
            placeholder="BOOK A TABLE FOR HOW MANY PERSON ?"
            name="people"
            value={people}
            onChange={(event) => onChangeHandler(event)}
            required
            min={1}
          />
          {messageErr ? <p className="form-err">{messageErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            type="time"
            min="11:00:00"
            max="24:00:00"
            className="form-input"
            placeholder="TIME"
            name="time"
            value={time}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {messageErr ? <p className="form-err">{messageErr}</p> : null}
        </div>
        <button className="btn" disabled={error || loading ? true : false}>
          {loading && <FaSpinner className="spinner" />}
          {loading ? <span>Sending Message</span> : <span>Send Message</span>}
        </button>
      </form>
      <div
        className="send-message"
        style={modal ? { diplay: "block" } : { display: "none" }}
      >
        <div className="form-modal">
          <p>{modal}</p>
          {modal ? (
            <button className="btn" onClick={onClickHandler}>
              OK
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
