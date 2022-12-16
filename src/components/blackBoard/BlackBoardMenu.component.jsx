import React from "react";
import "./BlackBoardMenu.style.scss";

const BlackBoardMenu = ({ setShowModal }) => {
  return (
    <div className="blackboard-container">
      <div className="blackboard-bg">
        <h1 className="blackboard-bg-title">NEW BRIDGE SPRIZZA Menu</h1>
        <div className="left-menu">
          <h1 className="pizza-menu-title">PIZZA</h1>
          <div className="pizza-menu-list">
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              Margaretha
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              DIAVOLA
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              CALABRESE
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              PUGLIESE
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              SICILIANA
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              VEGETARIANA
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              CAPRICCIOSA
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              würstel
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              ROMANA CROCCHE
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              UMBRA
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              NAPOLI
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              New Bridge Sprizza
            </p>
            <p className="pizza-menu-food" onClick={() => setShowModal(true)}>
              PROSCIUTTO E FUNGHI
            </p>
          </div>
        </div>
        <div className="right-menu">
          <div className="panuozzi-menu">
            <h1
              className="panuozzi-menu-title"
              onClick={() => setShowModal(true)}
            >
              Panuozzi
            </h1>
            <div
              className="panuozzi-menu-list"
              onClick={() => setShowModal(true)}
            >
              <p
                className="panuozzi-menu-food"
                onClick={() => setShowModal(true)}
              >
                Panuozzo
              </p>
              <p
                className="panuozzi-menu-food"
                onClick={() => setShowModal(true)}
              >
                CON NUTELLA
              </p>
              <p
                className="panuozzi-menu-food"
                onClick={() => setShowModal(true)}
              >
                Carraia
              </p>
              <p
                className="panuozzi-menu-food"
                onClick={() => setShowModal(true)}
              >
                Alle Grazie
              </p>
              <p
                className="panuozzi-menu-food"
                onClick={() => setShowModal(true)}
              >
                San Niccolò
              </p>
            </div>
          </div>
          <div className="panuozzi-menu margin">
            <h1 className="panuozzi-menu-title">Vino</h1>
            <div className="panuozzi-menu-list">
              <p
                className="panuozzi-menu-birra margin"
                onClick={() => setShowModal(true)}
              >
                LE NOSTRE BIRRE
              </p>
              <p
                className="panuozzi-menu-birra margin"
                onClick={() => setShowModal(true)}
              >
                Ichnusa non filtrata
              </p>
              <p
                className="panuozzi-menu-birra margin"
                onClick={() => setShowModal(true)}
              >
                Messina
              </p>
              <p
                className="panuozzi-menu-birra margin"
                onClick={() => setShowModal(true)}
              >
                Moretti
              </p>
              <p
                className="panuozzi-menu-birra margin"
                onClick={() => setShowModal(true)}
              >
                Peroni Gluten Free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBoardMenu;
