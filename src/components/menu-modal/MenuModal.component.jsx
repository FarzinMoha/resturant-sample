import React, { useEffect } from "react";
import "./MenuModal.style.scss";
import { RiCloseCircleFill } from "react-icons/ri";
import pizza from "../../image/pizza1.webp";
const MenuModal = ({ showModal, setShowModal }) => {
  useEffect(() => {}, [showModal]);
  return (
    <div className={showModal ? "menu-modal scale1" : "menu-modal"}>
      <div className="menu-modal-close">
        <RiCloseCircleFill onClick={() => setShowModal(false)} />
      </div>
      <div className="modal-container">
        <img className="menu-modal-image" src={pizza} alt="pizza" />
        <div className="menu-modal-info">
          <h1 className="menu-modal-name">PIZZA DIAVOLA</h1>
          <p className="menu-modal-ingridients">
            PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
          </p>
        </div>
      </div>
    </div>
  );
};
export default MenuModal;
