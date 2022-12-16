import React, { useEffect, useState } from "react";
import "./Reserve.style.scss";
import Form from "../../components/form/Form.component";
const Reserve = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="reserve-container">
      <div
        className={
          showModal ? "menu-container-darkbg showMenu" : "menu-container-darkbg"
        }
      ></div>

      <Form setShowModal={setShowModal} />
    </div>
  );
};

export default Reserve;
