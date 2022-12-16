import React, { useState , useEffect } from "react";
import BlackBoardMenu from "../../components/blackBoard/BlackBoardMenu.component";
import MenuModal from "../../components/menu-modal/MenuModal.component";
import TitleWallMenu from "../../components/title-wall-meu/TitleWallMenu.component";
import "./Menu.style.scss";
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="menu-container">
        <div
          className={
            showModal
              ? "menu-container-darkbg showMenu"
              : "menu-container-darkbg"
          }
        ></div>
        <MenuModal showModal={showModal} setShowModal={setShowModal} />
        <TitleWallMenu />
        <BlackBoardMenu setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default Menu;
